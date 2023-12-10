import React from "react";

function Contact(){
    return(
        <div className="container mt-5">
            <h2>Contacto</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" className="form-control" id="nombre"/>
                </div>
                <div className="form-group">
                    <label htmlFor="correo">Correo electronico:</label>
                    <input type="text" className="form-control" id="correo"/>
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea className="form-control" id="mensaje" rows="4"/>
                </div>
                <div className="mb-3 mt-3"> {/* Espacio adicional antes del boton */}
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;