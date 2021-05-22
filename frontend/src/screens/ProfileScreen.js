import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Message from '../components/Message'
import Loader from '../components/Loader'
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

    useEffect(() => {
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
    }, [user, dispatch, history, userInfo, success])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        }
        else {
            //DISPATCH UPDATE PROFILE
            dispatch(updateUserProfileDetails({ id: user._id, username, email, password }))
            if (success) {
                toast.dark('User Profile Updated!')
            }
        }
    }

    return (
        <Row>
            <Col md={3}>
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
                <h2>My Meetings</h2>
            </Col>
        </Row>
    )
}

export default ProfileScreen