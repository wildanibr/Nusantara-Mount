// eslint-disable-next-line no-unused-vars
import React from 'react';
import Layout from '../component/layout';

function LandingPage() {
    return (
        <Layout>
      <div className="hero">
        <div className="heroinner">
          <h1 className="hero-title">Nusantara Mount</h1>
          <p className="hero-desc">Nusantara Mount merupakan ensiklopedia mengenai data gunung di Indonesia. Sistem ini menyajikan beberapa informasi seperti sejarah gunung, lokasi gunung, hingga status gunung.</p>
          <button onClick={() => { window.location.href = '/main'; }} className="btn">START</button>
        </div>
      </div>
      <footer>
  <p>Wildan Ibra A - Alterra React C | © 2023 - Nusantara Mount</p>
</footer>
      </Layout>
    );
  }


export default LandingPage;
