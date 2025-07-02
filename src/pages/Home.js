import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1>
          Let’s grow yourself <br />  right
          <span className="highlight">  NOW.</span>
        </h1>

        <div className="cta-box">
          <h3>Ambil kesempatan itu attau tidak sama sekali</h3>
          <p>
            <p>
  Setiap langkah kecil hari ini adalah pijakan menuju impian besarmu. Jangan ragu untuk bermimpi tinggi—karena kamu punya semua yang dibutuhkan untuk mencapainya. Jadikan setiap tantangan sebagai batu loncatan menuju versi terbaik dari dirimu!
</p>

          </p>
          <button>Lets start now</button>
        </div>
      </div>

      <div className="image-section">
        <img src="/fffff.jpg" alt="Fiona" />
      </div>
    </div>
  );
}
