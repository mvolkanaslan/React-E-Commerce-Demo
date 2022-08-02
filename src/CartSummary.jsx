import React from "react";
import { Badge, NavDropdown, Stack } from "react-bootstrap";

export default class CartSummary extends React.Component {
    render() {
        return (
            <NavDropdown align="end" className='text-white' title={`Cart - ${this.props.cart.length}`}>
                {this.props.cart.map(item => {
                    return <NavDropdown.Item className="d-flex justify-content-between" key={item.product.id} href="#action3">
                        <span>{item.product.productName}</span>
                        <Stack direction="horizontal" gap={1}>
                            <Badge bg="success">{item.quantity}</Badge>
                            <Badge onClick={()=>this.props.removeFromCart(item.product)} bg="danger">X</Badge>
                        </Stack>
                    </NavDropdown.Item>
                })}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Go to Cart
                </NavDropdown.Item>
            </NavDropdown>)
    }
}