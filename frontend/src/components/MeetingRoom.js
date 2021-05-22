import React from 'react';
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating"

const MeetingRoom = ({ product }) => {
    return (
        <Link to={`/products/${product._id}`}>
            <Card className="my-3 py-3 rounded">

                <Card.Img src={product.image} variant="top"></Card.Img>

                <Card.Body>
                    <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
                    <Card.Text as='div'>
                        <Rating product={product} />
                    </Card.Text>

                    <Card.Text as='h4'>${product.price}</Card.Text>

                </Card.Body>
            </Card>
        </Link >
    )
}

export default MeetingRoom
