import './Cuadros.css'
import foto1 from '../Archivos/Imagenes/foto1.png'
import foto2 from '../Archivos/Imagenes/foto2.png'
import foto3 from '../Archivos/Imagenes/foto3.png'

const photos = [
    { id: 1, src: foto1, alt: 'Foto 1' },
    { id: 2, src: foto2, alt: 'Foto 2' },
    { id: 3, src: foto3, alt: 'Foto 3' },
    { id: 4, src: foto2, alt: 'Foto 2' },
    { id: 5, src: foto3, alt: 'Foto 3' },
];

const Cuadros = () => {

    return (
        <>
            <div className="grid-container">
                {photos.map((photo) => (
                    <div key={photo.id} className={`grid-item item${photo.id}`}>
                        <img src={photo.src} alt={photo.alt} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cuadros;
