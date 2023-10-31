import BookmarkGunungIdb from './bookmark-gunung-idb';
import { createBookmarkButtonTemplate, createBookmarkedButtonTemplate } from '../../component/template-main';

const BookmarkButtonInitiator = {
  async init({ likeButtonContainer, gunung }) {
    this._likeButtonContainer = likeButtonContainer;
    this._gunung = gunung;

    await this._renderButton();
  },

  async _renderButton(){
    const { id } = this._gunung;

    if (await this._isGunungExist(id)) {
      this._renderBookmarked();
    } else {
      this._renderBookmark();
    }
  },

  async _isGunungExist(id) {
    const gunung = await BookmarkGunungIdb.getGunung(id);
    return !!gunung;
  },
 
  _renderBookmark() {
    this._likeButtonContainer.innerHTML = createBookmarkButtonTemplate();
    
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await BookmarkGunungIdb.putGunung(this._gunung);
      await this._renderButton();
    });
  },
 
  _renderBookmarked() {
    this._likeButtonContainer.innerHTML = createBookmarkedButtonTemplate();
    
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await BookmarkGunungIdb.deleteGunung(this._gunung.id);
      await this._renderButton();
    });
  },
};

export default BookmarkButtonInitiator;