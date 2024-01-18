import { Nav } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contacto from "./Contacto"
import Inicio from "./Inicio"
import logo from '../Archivos/Imagenes/logo.png'
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
                <Route exact path='/contacto' element={< Contacto />}></Route>
            </Routes>
        </Router>
    )
}

export default NavBar;