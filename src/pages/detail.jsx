import React, { useEffect } from 'react';
import { createRoot } from 'react-dom'; 
import { useParams } from 'react-router-dom';
import gunungResource from '../utils/api/gunung-resource';
import { MountainDetail } from '../component/template-main';
import Layout from '../component/layout';

const Detail = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const gunung = await gunungResource.detailGunung(id);
      const detailgunung = gunung.data.note;
      const gunungContainer = document.querySelector('#detailGunung');

      const root = createRoot(gunungContainer);
      root.render(
        <React.StrictMode>
          <MountainDetail gunung={detailgunung} />
        </React.StrictMode>
      );
    };

    fetchData();
  }, [id]);

  return (
    <Layout>
      <div>
        <div id="detailGunung" className="detailGunung"></div>
        <div id="likeButtonContainer"></div>
      </div>
    </Layout>
  );
};

export default Detail;
