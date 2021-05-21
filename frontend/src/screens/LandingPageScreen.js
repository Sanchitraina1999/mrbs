import React, { useEffect } from "react"
import { Row, Col } from "react-bootstrap"


import Feature from "../components/Feature"
import { listFeatures } from "../actions/featureActions"
import { useDispatch, useSelector } from "react-redux"

import Loader from "../components/Loader"
import Message from "../components/Message"

const LandingPageScreen = () => {
    const dispatch = useDispatch()
    const featureList = useSelector(state => state.featureList)
    const { loading, error, features } = featureList
    useEffect(() => {
        dispatch(listFeatures())
    }, [dispatch])
    return (
        <>
            <h1>FEATURES:</h1>
            {/* {loading ? <Loader /> : error
                ? <Message variant='danger'>{error}</Message>
                : <Row>
                    {
                        features.map(feature => (
                            <Col key={feature._id} sm={12} md={6} lg={4} xl={3}>
                                <Feature feature={feature} />
                            </Col>
                        ))
                    }
                </Row>
            } */}
        </>
    )
}

export default LandingPageScreen