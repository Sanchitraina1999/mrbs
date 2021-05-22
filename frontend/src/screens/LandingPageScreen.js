import React, { useEffect } from "react"
import { Row, Col } from "react-bootstrap"

import { useDispatch, useSelector } from "react-redux"

import Feature from "../components/Feature"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { listFeatures } from "../actions/featureActions"

const LandingPageScreen = () => {
    const dispatch = useDispatch()
    const featureList = useSelector(state => state.featureList)
    const { loading, error, features } = featureList
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin
    useEffect(() => {
        if(userInfo)
            history.push('/homepage')
        dispatch(listFeatures())
    }, [dispatch, userInfo])
    return (
        <div>
            <h1>FEATURES:</h1>
            {loading ? <Loader /> : error
                ? <Message variant='danger'>{error}</Message>
                : <Row>
                    {
                        features.map(feature => (
                            <Col key={feature._id}>
                                <Feature feature={feature} />
                            </Col>
                        ))
                    }
                </Row>
            }
        </div>
    )
}

export default LandingPageScreen