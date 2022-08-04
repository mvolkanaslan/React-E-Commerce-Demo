import React from "react";
import { Badge, NavDropdown, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CartSummary extends React.Component {
    render() {
        return (
            <NavDropdown align="end" className='text-white' title={`Cart - ${this.props.cart.length}`}>
                {this.props.cart.map(item => {
                    return <NavDropdown.Item className="d-flex justify-content-between" key={item.product.id}>
                        <span>{item.product.productName}</span>
                        <Stack direction="horizontal" gap={1}>
                            <Badge bg="success">{item.quantity}</Badge>
                            <Badge onClick={() => this.props.removeFromCart(item.product)} bg="danger">X</Badge>
                        </Stack>
                    </NavDropdown.Item>
                })}
                <NavDropdown.Divider />
                
                <Link to="/cart" style={{ textDecoration: "none" }} className="dropdown-item">Go To Cart</Link>
            </NavDropdown>)
    }
}