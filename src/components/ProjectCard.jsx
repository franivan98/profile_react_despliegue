import React from "react";
import { Card } from "react-bootstrap";

function ProjectCard({proyecto}) {
    return(
        <Card bg="light" style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{proyecto.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{proyecto.empresa}</Card.Subtitle>
                <Card.Text>
                    {proyecto.descripcion}
                </Card.Text>
                <Card.Link href="#">Ver mas</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;