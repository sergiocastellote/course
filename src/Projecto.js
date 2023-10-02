import React from 'react';
import './Projecto.css';

function Proyecto({ titulo, descripcion, imagenUrl }) {
  return (
    <div className="proyecto">
      <img src={imagenUrl} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Proyecto;