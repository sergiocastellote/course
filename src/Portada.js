import React, { useState } from 'react';
import './Portada.css';
import Proyecto from './Projecto';
import Contacto from './Contacto';

function Portada() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const avatarImageUrl = 'https://www.example.com/tu-imagen-de-avatar.jpg';

  const proyectosDestacados = [
    {
      titulo: 'Proyecto 1',
      descripcion: 'Descripción del Proyecto 1',
      imagenUrl: 'https://www.example.com/proyecto1.jpg',
    },
    {
      titulo: 'Proyecto 2',
      descripcion: 'Descripción del Proyecto 2',
      imagenUrl: 'https://www.example.com/proyecto2.jpg',
    },
    {
      titulo: 'Proyecto 3',
      descripcion: 'Descripción del Proyecto 3',
      imagenUrl: 'https://www.example.com/proyecto3.jpg',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <div className="portada">
      <header className="encabezado">
        <div className="redes-sociales">
          <a href="https://www.facebook.com/tu-tienda" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.twitter.com/tu-tienda" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://www.instagram.com/tu-tienda" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <nav className="navegacion">
          <a onClick={scrollToTop} href="#top">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>
      <section className="aterrizaje">
        <div className="biografia">
        <img src={avatarImageUrl} alt='imagen' />
          <h2>Sergio Castellote</h2>
          <p>Breve biografía sobre mí...</p>
        </div>
      </section>

      <div className="portada-header">
        <h1>Tienda en Línea</h1>
        <p>Bienvenido a nuestra tienda en línea. Encuentra lo que necesitas.</p>
      </div>

      <section className="proyectos" id="proyectos">
        <h2>Proyectos Destacados</h2>
        <div className="proyectos-grid">
          {proyectosDestacados.map((proyecto, index) => (
            <Proyecto
              key={index}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              imagenUrl={proyecto.imagenUrl}
            />
          ))}
        </div>
      </section>
      <Contacto id="contacto"/>
    </div>
  );
}

export default Portada;