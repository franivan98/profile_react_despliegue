import React from "react";

function About(){
    const aboutData={
        nombre: 'Franco Mamani',
        edad: 25,
        profesion: 'Desarrollador Web',
        descripcion: 'Me gusta el desarrollo web'
    };

    return(
        <div className="container">
            <h2>Acerca de Mi</h2>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{aboutData.nombre}</h3>
                    <p className="card-text">Edad: {aboutData.edad}</p>
                    <p className="card-text">Profesion: {aboutData.profesion}</p>
                    <p className="card-text">descripcion: {aboutData.descripcion}</p>
                </div>
            </div>
            <br/>
        </div>
    );
}

export default About;