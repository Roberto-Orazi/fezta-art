import { Nav } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contacto from "./Contacto"
import Inicio from "./Inicio"
import logo from '../Archivos/Imagenes/logo.png'
import ArteDigital from "./ArteDigital"
import Cuadros from "./Cuadros"

const NavBar = () => {
    return (
        <Router>
            <Nav className="navfullsize">
                <ul>
                    <li>
                        <img src={logo} width={200} alt="feztaart" />
                        <Link to='/'>Inicio </Link >
                        <Link to='/arte-digital'>Arte digital </Link >
                        <Link to="/cuadros">Cuadros</Link>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </Nav>
            <Routes>
                <Route exact path='/' element={< Inicio />}></Route>
                <Route exact path='/arte-digital' element={< ArteDigital />}></Route>
                <Route exact path='/cuadros' element={<Cuadros />}></Route>
                <Route exact path='/contacto' element={< Contacto />}></Route>
            </Routes>
        </Router>
    )
}

export default NavBar;