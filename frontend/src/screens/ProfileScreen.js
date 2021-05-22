import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

import Message from '../components/Message'
import Loader from '../components/Loader'
import { listMeetingRooms } from '../actions/meetingRoomActions'
import { getUserDetails, updateUserProfileDetails } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const ProfileScreen = ({ location, history }) => {
    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const meetingRoomList = useSelector(state => state.meetingRoomList)
    const { meetingRooms } = meetingRoomList
    var meetingsOfCurrentUser
    useEffect(() => {
        dispatch(listMeetingRooms())
        if (!userInfo || success) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET })
            history.push('/login')
        }
        else {
            if (!user.username) {
                dispatch(getUserDetails('profile'))
            }
            else {
                setName(user.username)
                setEmail(user.email)
            }
        }
        if(meetingRooms)
            meetingsOfCurrentUser = meetingRooms.filter((room)=> {
                return room.bookedTimes.some((bookedTime)=>bookedTime.bookedBy === userInfo._id)
            })
    }, [user, dispatch, history, userInfo, success])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        }
        else {
            dispatch(updateUserProfileDetails({ id: user._id, username, email, password }))
            if (success) {
                toast.dark('User Profile Updated!')
            }
        }
    }

    return (
        <Row>
            <Col md={3}>
                <ToastContainer />
                <h1>User Profile</h1>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='username'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter name' value={username} onChange={e => setName(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password' value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>Update Details</Button>
                </Form>
            </Col>
            <Col md={9}>
                <ListGroup variant='flush'>
                    <h2>My Meetings</h2>
                    {console.log(meetingsOfCurrentUser)}
                    {/* {meetingRooms.bookedTimes.length === 0 ? <Message>You don't have any booked meetings</Message> : (
                        <ListGroup variant='flush'>
                            {meetingRooms.bookedTimes.map((item, index) => (
                                <ListGroup.Item key={index}>
                                    <Row>
                                        <Col md={1}>
                                            <Image src={item.image} alt={item.name} fluid rounded></Image>
                                        </Col>
                                        <Col>
                                            <Link to={`/product/${item.product}`}>
                                                {item.name}
                                            </Link>
                                        </Col>
                                        <Col md={4}>
                                            {item.qty} x ${item.price} = ${item.qty * item.price}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )} */}
                </ListGroup>
            </Col>
        </Row>
    )
}

export default ProfileScreen