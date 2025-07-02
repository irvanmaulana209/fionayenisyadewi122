import React from 'react';
import './About.css';

const categories = [
  {
    title: 'Mission',
    image: '/mission.jpg',
    description: 'Setiap tujuan besar dimulai dari satu langkah kecil.Fokuskan energi untuk menembus targetmu!'
  },
  {
    title: 'Second Mission',
    image: '/mission1.jpg',
    description: 'Dengan visi yang tajam dan strategi yang tepat, tidak ada mimpi yang terlalu jauh.'
  },
  {
    title: 'Values',
    image: '/values.jpg',
    description: 'Nilai-nilai adalah kompas hidup. Pegang teguh integritas, dan arahmu akan selalu jelas.'
  },
  {
    title: 'Commitment',
    image: '/comen.jpg',
    description: 'Komitmen adalah bahan bakar utama untuk bertahan di jalur menuju sukses.'
  },
];

export default function About() {
  return (
    <div className="about-grid">
      {categories.map((cat, idx) => (
        <div
          className="about-card"
          key={idx}
          style={{ backgroundImage: `url(${cat.image})` }}
        >
          <div className="overlay">
            <h2>{cat.title}</h2>
            <p>{cat.description}</p>
            <button></button>
          </div>
        </div>
      ))}
    </div>
  );
}
