import React from 'react';
// import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const MeetingRoom = ({ room }) => {
    return (<>
        {room}
        {/*  <Link to={`/products/${product._id}`}> */}
            <Card className="my-3 py-3 rounded">
                <Card.Img src={room.image} variant="top"></Card.Img>
                <Card.Body>
                    <Card.Title as='div'><strong>{room.roomName}</strong></Card.Title>
                    <Card.Text as='h4'>${room.pointOfContact.name}</Card.Text>
                </Card.Body>
            </Card>
        {/*  </Link > */}
        </>
    )
}

export default MeetingRoom
