
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Categories from './Categories'
import Navi from './Navi';
import ProductList from './ProductList';
import ToastConfig from './toast-config';


class App extends React.Component {
    state = {
        currentCategory: {},
        products: [],
        cart: []
    }

    setCurrentCategory = (curCategory) => {
        this.setState({
            currentCategory: { ...curCategory }
        })
        this.getProducts(`?categoryId=${curCategory.id}`)
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts(query = "") {
        fetch("http://localhost:3000/products" + query)
            .then(response => response.json())
            .then(data => this.setState({ products: data }))
    }
    addToCart = (product) => {
        let currentCart = this.state.cart;
        let addedProduct = currentCart.find(item => item.product.id === product.id);
        addedProduct ? (()=>{addedProduct.quantity++;this.setState(currentCart)})() : this.setState({ cart: [...this.state.cart, { product: product, quantity: 1 }] });
        toast.success(`"${product.productName}" added to Cart`,ToastConfig);
    }
    removeFromCart = (product) => {
        this.setState({ cart: this.state.cart.filter(item => item.product.id !== product.id) })
        toast.warning(`"${product.productName}" deleted from the Cart`,ToastConfig);
    }

    render() {
        return (
            <Container>
                <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
                <Row>
                    <Col lg={3}>
                        <Categories setCurrentCategory={this.setCurrentCategory} />
                    </Col>
                    <Col lg={9}>
                        <ProductList addToCart={this.addToCart} products={this.state.products} currentCategory={this.state.currentCategory} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default App;