import PropTypes from 'prop-types';

function MountainItem({ gunung }) {
  const { gambar, nama, status, id, keamanan, geolokasi } = gunung;
  const geolokasiLink = `https://www.google.com/maps?q=${geolokasi}`;

  return (
    <div className="gunung-item">
      <img
        className="gunung-poster"
        src={gambar}
        alt={nama}
      />
      <div className="gunung-item__content">
        <h3 className="gunung__title">
          <a href={`/detail/${id}`}>{nama}</a>
        </h3>
        <p>Status : {status}</p>
        <p>Keamanan : {keamanan}</p>
        <p>Geolokasi: <a href={geolokasiLink} target="_blank" rel="noreferrer">{geolokasi}</a></p>
      </div>
    </div>
  );
}

MountainItem.propTypes = {
  gunung: PropTypes.shape({
    nama: PropTypes.string,
    gambar: PropTypes.string,
    id: PropTypes.string,
    status: PropTypes.string,
    keamanan: PropTypes.string,
    geolokasi: PropTypes.string,
  }),
};

function MountainDetail({ gunung }) {
  const { gambar, nama, status, keamanan, geolokasi, bentuk, tinggi_meter, estimasi_letusan_terakhir } = gunung;
  const geolokasiLink = `https://www.google.com/maps?q=${geolokasi}`;

  return (
    <div className='detail-container'>
      <h2 className="gunung__name">{nama}</h2>
      <img className="gunung__image" src={gambar} alt={nama} />
      <div className="gunung__info">
        <h3>Information</h3>
        <h4>Bentuk</h4>
        <p>{bentuk}</p>
        <h4>Tinggi</h4>
        <p>{tinggi_meter}</p> 
        <h4>Letusan Terakhir</h4>
        <p>{estimasi_letusan_terakhir}</p>
        <h4>Geolokasi</h4>
        <p><a href={geolokasiLink} target="_blank" rel="noreferrer">{geolokasi}</a></p>
        <h4>Status</h4>
        <p>{status}</p>
        <h4>Keamanan</h4>
        <p>{keamanan}</p>
      </div>
    </div>
  );
}

MountainDetail.propTypes = {
  gunung: PropTypes.shape({
    nama: PropTypes.string,
    gambar: PropTypes.string,
    id: PropTypes.string,
    status: PropTypes.string,
    keamanan: PropTypes.string,
    geolokasi: PropTypes.string,
    bentuk: PropTypes.string,
    tinggi_meter: PropTypes.string,
    estimasi_letusan_terakhir: PropTypes.string,
  }),
};

const createBookmarkButtonTemplate = () => (
  <button aria-label="like this mountain" id="likeButton" className="like">
    <i className="fa fa-heart-o" aria-hidden="true"></i>
  </button>
);

const createBookmarkedButtonTemplate = () => (
  <button aria-label="unlike this mountain" id="likeButton" className="like">
    <i className="fa fa-heart" aria-hidden="true"></i>
  </button>
);

export { MountainItem, MountainDetail, createBookmarkButtonTemplate, createBookmarkedButtonTemplate };
