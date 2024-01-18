import React, { useState, useEffect } from 'react';
import '../App.css';
import firstSticker from '../Archivos/Imagenes/Kuni2sticker.png';
import secondSticker from '../Archivos/Imagenes/emojisticker.png';
import thirdSticker from '../Archivos/Imagenes/monosticker.png';
import fourthSticker from '../Archivos/Imagenes/camarasticker.png';
import fifthSticker from '../Archivos/Imagenes/conejosticker.png';
import sixthSticker from '../Archivos/Imagenes/guitarrasticker.png';
import seventhSticker from '../Archivos/Imagenes/patolucassticker.png';
import './Cuadros.css'; // Assuming "Cuadros.css" contains your additional styles
import foto1 from '../Archivos/Imagenes/foto1.png';
import foto2 from '../Archivos/Imagenes/foto2.png';
import foto3 from '../Archivos/Imagenes/foto3.png';

const photos = [
  { id: 1, src: foto1, alt: 'Foto 1' },
  { id: 2, src: foto2, alt: 'Foto 2' },
  { id: 3, src: foto3, alt: 'Foto 3' },
  { id: 4, src: foto2, alt: 'Foto 2' },
  { id: 5, src: foto3, alt: 'Foto 3' },
];

const stickers = [
  firstSticker,
  secondSticker,
  thirdSticker,
  fourthSticker,
  fifthSticker,
  sixthSticker,
  seventhSticker,
  firstSticker,
  secondSticker,
  thirdSticker,
  fourthSticker,
  fifthSticker,
  sixthSticker,
  seventhSticker,
  firstSticker,
  secondSticker,
  thirdSticker,
  fourthSticker,
  fifthSticker,
  sixthSticker,
  seventhSticker,
];

const ArteDigital = () => {
  const [stickerPositions, setStickerPositions] = useState([]);

  useEffect(() => {
    const generateRandomStickerPositions = () => {
      const newPositions = stickers.map((sticker) => ({
        src: sticker,
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
      }));
      setStickerPositions(newPositions);
    };

    generateRandomStickerPositions();
  }, []);

  return (
    <div className="container-container">
      {stickerPositions.map((sticker, index) => (
        <img
          key={index}
          src={sticker.src}
          alt={`Sticker ${index + 1}`}
          className="sticker"
          style={{ top: sticker.top, left: sticker.left, width: '400px'}}
        />
      ))}

      <div className="sticker-grid">
        {photos.map((photo) => (
          <div key={photo.id} className={`grid-item item${photo.id}`}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArteDigital;