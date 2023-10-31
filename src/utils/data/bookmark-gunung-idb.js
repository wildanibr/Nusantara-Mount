import { openDB } from 'idb';
import CONFIG from '../api/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
 
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const BookmarkGunungIdb = {
  async getGunung(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllGunungs() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putGunung(gunung) {
    return (await dbPromise).put(OBJECT_STORE_NAME, gunung);
  },
  async deleteGunung(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default BookmarkGunungIdb;
