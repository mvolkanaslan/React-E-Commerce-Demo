import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import ProductList from './ProductList';
import Categories from './Categories'
import { Routes, Route, Outlet } from "react-router-dom"


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
