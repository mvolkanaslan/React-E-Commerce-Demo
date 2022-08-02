import { Component } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import CartSummary from './CartSummary';


export default class Navi extends Component {
    render() {
        return (
            <>

                <Navbar className="mb-3" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            Product Management
                        </Navbar.Brand>
                        {this.props.cart.length>0 && <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>}
                    </Container>
                </Navbar>
            </>
        );
    }
}