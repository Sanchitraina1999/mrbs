import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa'

import moment from 'moment'

import Loader from '../components/Loader'
import Message from '../components/Message'
import { listMeetingRoomDetails } from '../actions/meetingRoomActions'

moment().format()

const BookingPageScreen = ({ history, match }) => {

    const dispatch = useDispatch()
    const meetingRoomDetails = useSelector(state => state.meetingRoomDetails)
    const { loading, error, meetingRoom } = meetingRoomDetails
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [startDate, setStartDate] = useState(moment(new Date()).format('yyyy-MM-DD'))
    const [startTime, setStartTime] = useState(moment(new Date()).format('HH:mm'))
    const [endDate, setEndDate] = useState(moment(new Date()).format('yyyy-MM-DD'))
    const [endTime, setEndTime] = useState('')
    const [purposeOfBooking, setPurposeOfBooking] = useState('')
    const [message, setMessage] = useState(null)

    useEffect(() => {
        if (userInfo || !Object.keys(meetingRoom).length)
            dispatch(listMeetingRoomDetails(match.params.id))
    }, [dispatch, match])

    const submitHandler = (e) => {
        e.preventDefault();
        var currentDateTime = moment(new Date()).format()
        var startDateTime = moment(new Date()).format()
        var endDateTime = moment(new Date()).format()
        currentDateTime = moment(currentDateTime).format()
        { console.log(currentDateTime) }
        { console.log(startDateTime) }
        { console.log(startDateTime) }
    }

    return (
        <>
            {!userInfo && history.push('/login')}
            <Link className='btn btn-dark my-3' to='/'>
                <FaAngleLeft />
            </Link>
            {
                loading ? <Loader />
                    : error ? (<Message variant='danger'>{error}</Message>)
                        : (
                            < Row >
                                <Col md={5}>
                                    <Image src={meetingRoom.image} alt={meetingRoom.roomName} fluid />
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item >
                                            {meetingRoom.roomName}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col md={6}>
                                    {message && <Message variant='danger'>{message}</Message>}
                                    <Card className='card bg-danger mb-3 rounded'>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <Form onSubmit={submitHandler}>
                                                    <Form.Group controlId='startDateTime'>
                                                        <Form.Label>Start Date & Time</Form.Label>
                                                        <Form.Text className='text-muted'>
                                                            The Date & Time when your meet starts
                                                            </Form.Text>
                                                        <Form.Control type='date' value={startDate} onChange={e => setStartDate(e.target.value)}></Form.Control>
                                                        <Form.Control type='time' value={startTime} onChange={e => setStartTime(e.target.value)}></Form.Control>
                                                    </Form.Group>


                                                    <Form.Group controlId='endDateTime'>
                                                        <Form.Label>End Date & Time</Form.Label>
                                                        <Form.Text className='text-muted'>
                                                            The Date & Time when your meet ends
                                                            </Form.Text>
                                                        <Form.Control type='date' value={endDate} onChange={e => setEndDate(e.target.value)}></Form.Control>
                                                        <Form.Control type='time' value={endTime} onChange={e => setEndTime(e.target.value)}></Form.Control>
                                                    </Form.Group>

                                                    <Form.Group controlId='purposeOfBooking'>
                                                        <Form.Label>Purpose of meeting</Form.Label>
                                                        <Form.Control type='text' value={purposeOfBooking} onChange={e => setPurposeOfBooking(e.target.value)}></Form.Control>
                                                    </Form.Group>

                                                    <Button variant='primary' type='submit' className='my -3 py-3'>
                                                        Get Availability
                                                        </Button>
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
