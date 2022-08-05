import React, { Component } from 'react'
import { Button, ListGroup, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default class ProductList extends Component {
    comp
    render() {
        return (
            <>
                <ListGroup>
                    <ListGroup.Item className='mb-2 bg-dark text-white'>Category : {this.props.currentCategory.categoryName ? this.props.currentCategory.categoryName : "All Products"}</ListGroup.Item>
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
                                        <td><Link to={`/product/${product.id}`}  style={{textDecoration:"none", color:"black"}}>{product.productName}</Link></td>
                                        <td>{product.quantityPerUnit}</td>
                                        <td align='center'>€ {product.unitPrice}</td>
                                        <td align='center'>{product.unitsInStock}</td>
                                        <td align='center'><Button disabled={product.unitsInStock>0?false:true} onClick={() => this.props.addToCart(product)} size='sm' variant='primary'>Add</Button></td>
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