import React from "react";
import ProjectCard from "./ProjectCard";
import { Container } from "react-bootstrap";

function Home({proyectos}){
    return(
        <Container>
            <h1>Bienvenido al Perfil de Usuario</h1>
            <p>Estos son mis proyectos:</p>
            <div className="container mt-5 ">
            <div className="row">
            {proyectos.map(proyecto=>(
                    <div className="col-12 col-md-6 col-lg-3">
                        <ProjectCard key={proyecto.id} proyecto={proyecto} />
                        <br/>
                    </div>
                ))
            }
            </div>
            </div>
        </Container>
    );
}

export default Home;