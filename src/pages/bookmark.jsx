import React, { useEffect, useState } from 'react';
import BookmarkGunungIdb from '../utils/data/bookmark-gunung-idb';
import { MountainItem } from '../component/template-main';
import Layout from '../component/layout';

function Bookmark() {
  const [gunungs, setGunungs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const gunungData = await BookmarkGunungIdb.getAllGunungs();
      setGunungs(gunungData);
    }
    fetchData();
  }, []);

  return (
    <Layout>
    <div id="main" className="main">
      {gunungs.map((gunung) => (
        <div key={gunung.id}>
          {MountainItem(gunung)}
        </div>
      ))}
    </div>
    </Layout>
  );
}

export default Bookmark;
