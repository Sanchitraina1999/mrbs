import React, { useEffect } from "react"
import { Row, Col } from "react-bootstrap"

import { listFeatures } from "../actions/featureActions"
import { useDispatch, useSelector } from "react-redux"

import Feature from "../components/Feature"
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
        <div>
            <h1>FEATURES:</h1>
            {loading ? <Loader /> : error
                ? <Message variant='danger'>{error}</Message>
                : <Row>
                    {
                        features.map(feature => (
                            <Col key={feature._id} sm={12} md={6} lg={4} xl={3}>
                                <Feature feature={feature} />
                            </Col>
                        ))
                    }
                    <Card className="my-3 py-3 rounded">
                        <Card.Img src={feature.image} variant="top"></Card.Img>
                        <Card.Body>
                            <Card.Title as='div'><strong>{feature.name}</strong></Card.Title>
                            <Card.Text as='h4'>${feature.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            }
        </div>
    )
}

export default LandingPageScreen