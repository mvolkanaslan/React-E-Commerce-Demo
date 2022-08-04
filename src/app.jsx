
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Navi from './Navi';
import ToastConfig from './toast-config';
import { Routes, Route, Navigate } from "react-router-dom"
import ContentLayout from './ContentLayout';
import ProductList from './ProductList';
import NotFound from './NotFound';
import CartList from './CartList';


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
        addedProduct ? addedProduct.quantity++ : currentCart.push({ product: product, quantity: 1 });
        this.setState({ cart: currentCart })
        toast.success(`"${product.productName}" added to Cart`, ToastConfig);
    }
    removeFromCart = (product) => {
        this.setState({ cart: this.state.cart.filter(item => item.product.id !== product.id) })
        toast.warning(`"${product.productName}" deleted from the Cart`, ToastConfig);
    }

    render() {
        return (
            <Container>
                <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
                <Routes>
                    <Route path="/" element={<ContentLayout setCurrentCategory={this.setCurrentCategory}/>}>
                        <Route index={true} element={<ProductList addToCart={this.addToCart} products={this.state.products} currentCategory={this.state.currentCategory} />}/>
                        <Route  path="cart" element={this.state.cart.length===0 ? <Navigate to="/"/> : <CartList cart={this.state.cart} removeFromCart={this.removeFromCart}/>} />
                    </Route>
                    <Route path='*' element={<NotFound />}/>
                    
                </Routes>
            </Container>
        )
    }
}
export default App;