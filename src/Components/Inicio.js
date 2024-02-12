import acercaDe from '../Archivos/Imagenes/acercade.jpg'
import '../App.css'
import './Inicio.css'
export default function inicio() {
    return (
        <section>
            <h1>
            <h2>"Imaginación sin límite"</h2>
            </h1>
            <div className='acercaDe'>
                <div className='acercaDe-texto'>
                    <p>
                        Buenas! FezTa es mi pseudónimo, representando en esta oportunidad a un joven artista que tiene mucho Arte por expresar.
                        Siempre dibujé, siempre mi familia me alentó a que me lance en este mundo.  Y ya hace unos 8 años comencé a animarme y a adentrarme de lleno en este universo.
                        Combinar colores y crear figuras, personas o animales de una forma única y abstracta es lo que me caracteriza.
                    </p>
                </div>
                <img src={acercaDe} width={600} alt='pintor artista' />
            </div>
        </section>
    )
}