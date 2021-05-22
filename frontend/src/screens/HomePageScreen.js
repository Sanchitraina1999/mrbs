import React, { useEffect } from "react";
import MeetingRoom from "../components/MeetingRoom";
import { Row, Col } from "react-bootstrap";

import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const meetingRoomList = useSelector(state => state.meetingRoomList);
    const { loading, error, products } = meetingRoomList;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <>
            <h1>Latest Products</h1>
            {loading ? <Loader /> : error
                ? <Message variant='danger'>{error}</Message>
                : <Row>
                    {
                        products.map(room => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <MeetingRoom room={room}/>
                            </Col>
                        ))
                    }
                </Row>
            }
        </>
    )
}

export default HomeScreen
