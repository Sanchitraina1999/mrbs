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

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch(listMeetingRoomDetails(match.params.id))
    }, [dispatch, match])

    return (
        <>
            { console.log(meetingRoom) }
            {!userInfo && history.push('/login')}
            <Link className='btn btn-dark my-3' to='/'>
                Go Back
            </Link>
            {
                loading ? <Loader />
                    : error ? (<Message variant='danger'>{error}</Message>)
                        : (
                            < Row >
                                <Col md={6}>
                                    <Image src={meetingRoom.image} alt={meetingRoom.roomName} fluid />
                                </Col>
                                <Col md={6}>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            {meetingRoom.roomName}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                           {meetingRoom.location.address}{','}
                                           {meetingRoom.location.city}
                                        </ListGroup.Item>
                                        <ListGroup.Item className='text-info'>
                                            For more details:<br/>
                                            {meetingRoom.pointOfContact.name}{','}<br/>
                                            {meetingRoom.pointOfContact.mobile}{','}<br/>
                                            {meetingRoom.pointOfContact.email}{','}<br/>                                        
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <Card className='card bg-dark mb-3'>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <Form.Control>

                                                </Form.Control>
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
