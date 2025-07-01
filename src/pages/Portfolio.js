import { useEffect, useState } from 'react';
import axios from 'axios';
import './Portfolio.css';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="portfolio-container">
      <div className="profile-card">
        <img
          src="/11.png"
          alt="avatar perempuan"
          className="avatar"
        />
        <h1> Make It Easy - FYNZLX.NET</h1>
        <div className="check-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <p>RESTO AND CAFE</p>
      </div>

      <div className="project-list">
        <h2>My Social Media</h2>
        <ul>
          {projects.map(proj => (
            <li key={proj.id}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </li>
          ))}
        </ul>

        <div className="instagram-link">
          <a
            href="https://www.instagram.com/fynzlx_?igsh=NDdhbTM1dnJlMjh5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kunjungi Instagram Saya
          </a>
        </div>
      </div>
    </div>
  );
}
