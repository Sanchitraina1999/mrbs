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

    const [startDate, setStartDate]= useState(Date.now())
    const [startTime, setStartTime]= useState()
    const [endDate, setEndDate]= useState(Date.now())
    const [endTime, setEndTime]= useState()
    const [message, setMessage] = useState(null)

    useEffect(() => {
        if(userInfo || !Object.keys(meetingRoom).length)
            dispatch(listMeetingRoomDetails(match.params.id))
    }, [dispatch, match])

    const submitHandler = (e) => {
        e.preventDefault();
        {console.log()}
    }

    return (
        <>
            { console.log(meetingRoom)}
            {!userInfo && history.push('/login')}
            <Link className='btn btn-dark my-3' to='/'>
                Go Back
            </Link>
            {
                loading ? <Loader />
                    : error ? (<Message variant='danger'>{error}</Message>)
                        : (
                            < Row >
                                <Col md={5}>
                                    <Image src={meetingRoom.image} alt={meetingRoom.roomName} fluid />
                                </Col>
                                <Col md={6}>
                                    {message && <Message variant='danger'>{message}</Message>}
                                    <Card className='card bg-dark mb-3'>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <Form onSubmit={submitHandler}>
                                                    <Form.Group controlId='bookingForm'>
                                                        <Form.Label>Start Date & Time</Form.Label>
                                                        <Form.Control type='date' value={startDate}></Form.Control>
                                                        <Form.Control type='time' value={startTime}></Form.Control>
                                                        <Form.Text className='text-muted'>
                                                            The Date & Time when your meet starts
                                                            </Form.Text>
                                                        <Form.Label>End Date & Time</Form.Label>
                                                        <Form.Control type='date' value={endDate}></Form.Control>
                                                        <Form.Control type='time' value={endTime}></Form.Control>
                                                        <Form.Text className='text-muted'>
                                                            The Date & Time when your meet ends
                                                            </Form.Text>
                                                        <Button variant='primary' type='submit'>
                                                            Book Room
                                                            </Button>
                                                    </Form.Group>
                                                </Form>
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
