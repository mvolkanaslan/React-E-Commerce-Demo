import React, { Component } from 'react'
import { ListGroup, Stack, Table } from 'react-bootstrap'


export default class ProductList extends Component {
    state = {
        products: []
    }

    render() {
        return (
            <>
                <ListGroup>
                    <ListGroup.Item className='mb-2 bg-dark text-white'>{this.props.currentCategory.categoryName?this.props.currentCategory.categoryName:"All Products"}</ListGroup.Item>
                </ListGroup>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Product Name</th>
                            <th>Category Id</th>
                            <th>Quantity Per Unit</th>
                            <th>Unit Price</th>
                            <th>Units In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => {
                                return (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.product}</td>
                                        <td>{product.categoryId}</td>
                                        <td>{product.quantityPerUnit}</td>
                                        <td>{product.unitPrice}</td>
                                        <td>{product.unitsInStock}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </Table>

            </>
        )
    }
}