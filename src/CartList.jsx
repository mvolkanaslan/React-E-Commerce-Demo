import React, { Component } from 'react'
import { Button, ListGroup, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class CartList extends Component {
  
  render() {
    const {cart,removeFromCart} = this.props;
    return (
      <>
                <ListGroup>
                    <ListGroup.Item className='mb-2 bg-dark text-white'>Your Cart</ListGroup.Item>
                </ListGroup>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             cart.map(item => {
                                return (
                                    <tr key={item.product.id}>
                                        <td>{item.product.id}</td>
                                        <td><Link to={`/product/${item.product.id}`}  style={{textDecoration:"none",color:"black"}}>{item.product.productName}</Link></td>
                                        <td align='center'>€ {item.product.unitPrice}</td>
                                        <td>{item.quantity}</td>
                                        <td align='center'><Button onClick={() => removeFromCart(item.product)} size='sm' variant='primary'>Remove</Button></td>
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
