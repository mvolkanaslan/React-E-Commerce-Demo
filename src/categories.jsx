import React, { Component } from "react";
import { ListGroup, Stack } from 'react-bootstrap';

export default class Categories extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        this.getCategories()
    }
    getCategories() {
        fetch("http://localhost:3000/categories")
            .then(response => response.json())
            .then(data => this.setState({ categories: data }))
    }

    render() {
        return (
            <ListGroup>
                {
                    this.state.categories.map(category => {
                        return <ListGroup.Item action variant="success" key={category.id} onClick={() => this.props.setCurrentCategory(category)}>{category.categoryName}</ListGroup.Item>
                    })
                }
            </ListGroup>
        )
    }
}
