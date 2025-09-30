import {Card, Button, Row, Col} from "react-bootstrap";

export default function Productos (){

    const productos = [
        {
            id:1, 
            nombre: "producto 1",
            img: "https://placehold.co/300x200",
            precio: "100"
        },
        {
            id:2, 
            nombre: "producto 2",
            img: "https://placehold.co/300x200",
            precio: "200"
        },
        {
            id:3, 
            nombre: "producto 3",
            img: "https://placehold.co/300x200",
            precio: "300"
        },
    ];

    return (
        <div>
            <h2 className="mt-4">Sección Productos</h2>
            <Row>
                {productos.map(producto => (
                    <Col key={producto.id}>
                        <Card className="mb-4 shadow-sm">
                            <Card.Img variant="top" src={producto.img} alt={producto.nombre}/>
                            <Card.Body>
                                <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text>{producto.precio}</Card.Text>
                                <Button variant="primary">Agregar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
        
    );
}