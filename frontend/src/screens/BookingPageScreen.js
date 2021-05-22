import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listMeetingRoomDetails } from '../actions/meetingRoomActions'

const BookingPageScreen = ({ history, match }) => {

    const dispatch = useDispatch()

    const meetingRoomDetails = useSelector(state => state.meetingRoomDetails)
    const { loading, error, meetingRoom } = meetingRoomDetails

    useEffect(() => {
        if(!meetingRoom)
            dispatch(listMeetingRoomDetails(match.params.id))
    }, [dispatch, match])

    return (
        <>
            <Link className='btn btn-dark my-3' to='/'>
                Go Back
            </Link>
            {
                loading ? <Loader />
                    : error ? (<Message variant='danger'>{error}</Message>)
                        : (
                            <Row>
                                <Col md={6}>
                                    <Image src={meetingRoom.image} alt={meetingRoom.name} fluid />
                                </Col>
                                <Col md={6}>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            {meetingRoom.roomName}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            {`${meetingRoom.location.address} ${meetingRoom.location.city}`}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            For more details:
                                            {`${meetingRoom.pointOfContact.name} ${meetingRoom.pointOfContact.mobile} ${meetingRoom.pointOfContact.email}`}
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <Card className='card bg-dark mb-3'>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>

                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            </Row>
                        )
            }
        </>
    )
}

export default BookingPageScreen
