import React, { useEffect, useState } from 'react';
import firstSticker from '../Archivos/Imagenes/Kuni2sticker.png'
import secondSticker from '../Archivos/Imagenes/emojisticker.png'
import ThrirdSticker from '../Archivos/Imagenes/monosticker.png'
import fourthSticker from '../Archivos/Imagenes/camarasticker.png'
import fifthSticker from '../Archivos/Imagenes/conejosticker.png'
import sixthSticker from '../Archivos/Imagenes/guitarrasticker.png'
import seventSticker from '../Archivos/Imagenes/patolucassticker.png'

const ArteDigital = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ position: 'absolute', left: '50%', top: '20%', transform: 'translateX(-50%)' }}>
            {/* Renderiza tus imágenes de stickers aquí */}
            <img src={firstSticker} alt="Sticker 1" width={400}/>
            <img src={secondSticker} alt="Sticker 2" width={400}/>
            <img src={ThrirdSticker} alt="Sticker 3" width={800}/>
            <img src={fourthSticker} alt="Sticker 4" width={400}/>
            <img src={fifthSticker} alt="Sticker 5" width={400}/>
            <img src={sixthSticker} alt="Sticker 6" width={400}/>
            <img src={seventSticker} alt="Sticker 7" width={400}/>
            {/* Agrega más imágenes según sea necesario */}
        </div>
    );
};

export default ArteDigital;