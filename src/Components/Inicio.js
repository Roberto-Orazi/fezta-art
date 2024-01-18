import acercaDe from '../Archivos/Imagenes/acercade.jpg'
import '../App.css'
export default function inicio() {
    return (
        <>
            <h1>
                Acerca de mi
            </h1>
            <div className='acercaDe'>
                <p>Hola soy federico</p>
                <img src={acercaDe} width={600} alt='pintor artista' />
            </div>
        </>
    )
}