import React from "react";
import { NavDropdown } from "react-bootstrap";

export default class CartSummary extends React.Component {
    render() {
        return (
            <NavDropdown align="end" className='text-white' title={`Cart - ${this.props.cart.length}`}>
                {this.props.cart.map(item => {
                    return <NavDropdown.Item key={item.product.id} href="#action3">{item.product.productName} - {item.quantity}</NavDropdown.Item>
                })}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Go to Cart
                </NavDropdown.Item>
            </NavDropdown>)
    }
}