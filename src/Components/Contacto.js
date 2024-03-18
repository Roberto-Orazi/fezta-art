import { Container, Row, Col } from "react-bootstrap";
import '../App.css';
import './Contacto.css'
const Contacto = () => {
    return (
        <Container className="container__contacto">
            <Row>
                <Col><br /><h1>Contacto o cotizacion</h1></Col>
            </Row>
            <Row className="contactoform">

                <Row xl={4} md={6} className="col-12 mb-1 columnas">
                    <div className="form-group">
                        <Col className="labeltext">
                            <label htmlFor="basicInput">Nombre</label>
                        </Col>
                        <Col>
                            <input type="text" className="form-control" placeholder="Nombre" />
                        </Col>
                    </div>
                    <span id="basic_cust_name_val" className="validation_msg"></span>
                </Row>

                <Row xl={4} md={6} className="col-12 mb-1 columnas">
                    <div className="form-group">
                        <Col className="labeltext">
                            <label htmlFor="Last_Name">Apellido</label>
                        </Col>
                        <Col>
                            <input type="text" className="form-control" id="basic_id_cust_last_name" name="basic_cust_last_name" placeholder="Apellido" />
                        </Col>
                    </div>
                    <span id="basic_cust_lastname_val" className="validation_msg"></span>
                </Row>

                <Row xl={4} md={6} className="col-12 mb-1 columnas">
                    <div className="form-group">
                        <Col className="labeltext">
                            <label htmlFor="basic_edit_email">Email</label>
                        </Col>
                        <Col>
                            <input type="email" className="form-control" placeholder="Email" name="basic_email" id="basic_email" />
                        </Col>
                        <span id="basic_email_val" className="validation_msg"></span>
                    </div>
                </Row>

                <Row xl={4} md={6} className="col-12 mb-1 columnas">
                    <div className="form-group">
                        <Col className="labeltext">
                            <label htmlFor="largo">Largo</label>
                        </Col>
                        <Col>
                            <input type="text" className="form-control" placeholder="Largo" name="largo" id="largo" />
                        </Col>
                    </div>
                </Row>

                <Row xl={4} md={6} className="col-12 mb-1 columnas">
                    <div className="form-group">
                        <Col className="labeltext">
                            <label htmlFor="ancho">Ancho</label>
                        </Col>
                        <Col>
                            <input type="text" className="form-control" placeholder="Ancho" name="ancho" id="ancho" />
                        </Col>
                    </div>
                </Row>

                <Row xl={4} md={6} className="col-12 mb-1 columnas">
                    <div className="form-group">
                        <Col className="labeltext">
                            <label htmlFor="basic_edit_email">Cargar Archivos</label>
                        </Col>
                        <Col>
                            <input type="file" className="form-control fileCharge" name="archivos" id="archivos" />
                        </Col>
                    </div>
                </Row>

                <Row xl={4} md={6} className="col-12 mb-1 columnas">
                    <div className="form-group">
                        <Col className="labeltext">
                            <label htmlFor="basic_edit_email">Aclaraciones</label>
                        </Col>
                        <Col>
                            <textarea className="form-control" placeholder="Aclaraciones" name="aclaraciones" id="aclaraciones" />
                        </Col>
                    </div>
                    <Col>
                        <button className="" type="submit">Enviar</button>
                    </Col>
                    <span id="basic_email_val" className="validation_msg"></span>
                </Row>

            </Row>
            <div className="redes_sociales">
                <h4>
                    Redes sociales
                </h4>
                <h4><a href="https://www.instagram.com/fezta.art/" target="blank">Instagram</a></h4>
            </div>
        </Container>
    )
}

export default Contacto;