import React, { Component } from 'react'
import { Button, ListGroup, Stack, Table } from 'react-bootstrap'


export default class ProductList extends Component {
    state = {
        products: []
    }

    render() {
        return (
            <>
                <ListGroup>
                    <ListGroup.Item className='mb-2 bg-dark text-white'>Category : {this.props.currentCategory.categoryName?this.props.currentCategory.categoryName:"All Products"}</ListGroup.Item>
                </ListGroup>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Product Name</th>
                            {/* <th>Category Id</th> */}
                            <th>Quantity Per Unit</th>
                            <th>Unit Price</th>
                            <th>Units In Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => {
                                return (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.productName}</td>
                                        {/* <td>{product.categoryId}</td> */}
                                        <td>{product.quantityPerUnit}</td>
                                        <td align='center'>€ {product.unitPrice}</td>
                                        <td align='center'>{product.unitsInStock}</td>
                                        <td align='center'><Button onClick={()=>this.props.addToCart(product)} size='sm' variant='primary'>Add</Button></td>
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