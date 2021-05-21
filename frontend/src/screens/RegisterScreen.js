import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ReCAPTCHA from 'react-google-recaptcha'
import asyncHandler from 'express-async-handler'

import Message from '../components/Message'
import Loader from '../components/Loader'
import { register } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

const RegisterScreen = ({ location, history }) => {
    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const REACT_APP_RECAPTCHA_SITE_KEY = '6Le9fOEaAAAAAGE6xgxlHXqVaJSUwt9ptXoUTUr8'
    const reRef = useRef(ReCAPTCHA)

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister


    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = asyncHandler(async(e) => {
        e.preventDefault()
        //DISPATCH LOGIN
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        }
        else {
            const recaptchaToken = await reRef.current.executeAsync()
            dispatch(register(username, email, password))
            reRef.current.reset()
        }
    })

    const resetHandler = (e) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler} onReset={resetHandler}>
                <Form.Group controlId='name'>
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
                <Row>
                    <ReCAPTCHA
                        sitekey= {REACT_APP_RECAPTCHA_SITE_KEY}
                        size='invisible'
                        ref={reRef}
                    />
                    <Col>
                        <Button type='submit' variant='primary'>Sign Up</Button>
                    </Col>
                    <Col>
                        <Button type='reset' variant='primary'>Reset</Button>
                    </Col>
                </Row>

            </Form>
            <Row className='py-3'>
                <Col>
                    Have an Account?{' '}
                    <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Login
                </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen