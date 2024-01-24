import React, { useEffect, useState } from 'react';
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contacto from "./Contacto";
import Inicio from "./Inicio";
import logo from '../Archivos/Imagenes/logo.png';
import ArteDigital from "./ArteDigital";
import Cuadros from "./Cuadros";

const NavBar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setIsNavbarFixed(true);
    } else {
      setIsNavbarFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Nav className={`navfullsize ${isNavbarFixed ? 'nav-fixed' : ''}`}>
        <ul>
          <li>
            <img src={logo} width={200} alt="feztaart" />
            <Link to='/'>Inicio</Link>
            <Link to='/arte-digital'>Arte digital</Link>
            <Link to="/cuadros">Cuadros</Link>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </Nav>
      <Routes>
        <Route exact path='/' element={<Inicio />} />
        <Route exact path='/arte-digital' element={<ArteDigital />} />
        <Route exact path='/cuadros' element={<Cuadros />} />
        <Route exact path='/contacto' element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default NavBar;