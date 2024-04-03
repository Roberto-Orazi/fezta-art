import React, { useEffect } from 'react';
import '../App.css';
import firstSticker from '../Archivos/Imagenes/Kuni2sticker.png';
import secondSticker from '../Archivos/Imagenes/emojisticker.png';
import thirdSticker from '../Archivos/Imagenes/monosticker.png';
import fourthSticker from '../Archivos/Imagenes/camarasticker.png';
import fifthSticker from '../Archivos/Imagenes/conejosticker.png';
import sixthSticker from '../Archivos/Imagenes/guitarrasticker.png';
import seventhSticker from '../Archivos/Imagenes/patolucassticker.png';
import './Cuadros.css'; // Assuming "Cuadros.css" contains your additional styles
import foto1 from '../Archivos/Imagenes/digital1.jpg';
import foto2 from '../Archivos/Imagenes/digital2.jpg';
import foto3 from '../Archivos/Imagenes/digital3.jpg';
import foto4 from '../Archivos/Imagenes/digital4.jpg';
import foto5 from '../Archivos/Imagenes/digital5.jpg';

const photos = [
  { id: 1, src: foto1, alt: 'Foto 1' },
  { id: 2, src: foto2, alt: 'Foto 2' },
  { id: 3, src: foto3, alt: 'Foto 3' },
  { id: 4, src: foto4, alt: 'Foto 4' },
  { id: 5, src: foto5, alt: 'Foto 5' },
];

/* const stickers = [ firstSticker, secondSticker, thirdSticker, fourthSticker, fifthSticker, sixthSticker,
  seventhSticker,
]; */

const stickersMultiples = [ firstSticker, secondSticker, thirdSticker, fourthSticker, fifthSticker, sixthSticker,
  seventhSticker, firstSticker, secondSticker, thirdSticker, fourthSticker, fifthSticker, sixthSticker, seventhSticker,
  firstSticker, secondSticker, thirdSticker, fourthSticker, fifthSticker, sixthSticker, seventhSticker,
];

const ArteDigital = () => {
  useEffect(() => {
    const handleScroll = () => {
      const stickers = document.querySelectorAll('.sticker-grid__2 img');
      stickers.forEach((sticker, index) => {
        const scrollY = window.scrollY;
        const translateY = index * scrollY * 0.1;
        const rotate = scrollY * 0.1;

        sticker.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="container-container">
      {/* <div className="sticker-grid">
        {stickers.map((sticker, index) => (
          <img
          key={index}
          src={sticker}
          alt={`Sticker ${index + 1}`}
          className="sticker"
          />
          ))}
        </div> */}

      <div className="sticker-grid__2">
        {stickersMultiples.map((sticker, index) => (
          <img
            key={index}
            src={sticker}
            alt={`Sticker ${index + 1}`}
            className={`sticker sticker-${index + 1}`}
          />
        ))}
      </div>

      <div className="photo-grid">
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