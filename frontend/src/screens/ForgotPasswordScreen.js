import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

const ForgotPasswordScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [keepLoggedIn, setKeepLoggedIn] = useState(false)
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const dispatch = useDispatch()

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password, keepLoggedIn))
    }
    const resetHandler = (e) => {
        e.preventDefault()
        setEmail('')
        setPassword('')
        setKeepLoggedIn(false)
    }
    return (
        <div>
            <FormContainer>
                <h1>FORGOT PASSWORD</h1>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler} onReset={resetHandler}>
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Button type='submit' variant='primary'>Get Password</Button>
                        </Col>
                        <Col>
                            <Button type='reset' variant='primary'>Reset</Button>
                        </Col>
                    </Row>
                </Form>
                <Row className='py-3'>
                    <Col>
                        <Link to='/login'>Signin here</Link>
                    </Col>
                </Row>
            </FormContainer>
        </div>
    )
}

export default ForgotPasswordScreen
