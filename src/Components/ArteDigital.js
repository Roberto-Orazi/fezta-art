import React from 'react';
import firstSticker from '../Archivos/Imagenes/Kuni2sticker.png'
import secondSticker from '../Archivos/Imagenes/emojisticker.png'
import ThrirdSticker from '../Archivos/Imagenes/monosticker.png'
import fourthSticker from '../Archivos/Imagenes/camarasticker.png'
import fifthSticker from '../Archivos/Imagenes/conejosticker.png'
import sixthSticker from '../Archivos/Imagenes/guitarrasticker.png'
import seventSticker from '../Archivos/Imagenes/patolucassticker.png'
import '../App.css'

const ArteDigital = () => {

    return (
        <div className="sticker-container">
            <img src={firstSticker} alt="Sticker 1" className="sticker" style={{ top: '10px', left: '10px' }}/>
            <img src={secondSticker} alt="Sticker 2" className="sticker" style={{ top: '10px', left: '10px' }}/>
            <img src={ThrirdSticker} alt="Sticker 3" className="sticker" style={{ top: '10px', left: '10px' }}/>
            <img src={fourthSticker} alt="Sticker 4" className="sticker" style={{ top: '10px', left: '10px' }}/>
            <img src={fifthSticker} alt="Sticker 5" className="sticker" style={{ top: '10px', left: '10px' }}/>
            <img src={sixthSticker} alt="Sticker 6" className="sticker" style={{ top: '10px', left: '10px' }}/>
            <img src={seventSticker} alt="Sticker 7" className="sticker" style={{ top: '10px', left: '10px' }}/>
        </div>
    );
};

export default ArteDigital;
