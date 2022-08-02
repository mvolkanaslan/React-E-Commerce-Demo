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
            <ListGroup.Item  className="bg-dark text-white">Category List</ListGroup.Item>
                {
                    this.state.categories.map(category => {
                        return <ListGroup.Item action  key={category.id} onClick={() => this.props.setCurrentCategory(category)}>{category.categoryName}</ListGroup.Item>
                    })
                }
            </ListGroup>
        )
    }
}
