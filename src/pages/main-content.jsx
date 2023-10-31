// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import gunungResource from '../utils/api/gunung-resource';
import { MountainItem } from '../component/template-main';
import Layout from '../component/layout';

function Main() {
  const [gunungList, setGunungList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await gunungResource.listGunung();
        setGunungList(response.data.gunung);
      } catch (error) {
        console.error('Error fetching gunung data:', error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filteredGunung = gunungList.filter((gunung) => {
      return gunung.nama.toLowerCase().includes(searchValue.toLowerCase());
    });
    setSearchResults(filteredGunung);
  }, [searchValue, gunungList]);

  return (
    <Layout>
      <div>
        <h1 className='judul-main'>Daftar Gunung di Indonesia</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Cari nama gunung..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} 
          />
        </div>
        <ul className="main">
          {searchResults.map((gunung) => (
            <li key={gunung.id}>
              <MountainItem gunung={gunung} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

Main.propTypes = {
  gunung: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    nama: PropTypes.string,
    gambar: PropTypes.string,
    status: PropTypes.string,
  })),
};

export default Main;
