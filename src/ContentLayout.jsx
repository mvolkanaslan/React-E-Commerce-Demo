import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Categories from './Categories'
import {  Outlet } from "react-router-dom"


export default class ContentLayout extends Component {
    render() {
        return (
            <Row>
                <Col lg={3}>
                    <Categories setCurrentCategory={this.props.setCurrentCategory} />
                </Col>
                <Col lg={9}>
                    <Outlet />
                </Col>
            </Row>
        )
    }
}
