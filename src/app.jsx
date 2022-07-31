import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Categories from './categories'
import Navi from './navi';
import ProductList from './productList';

class App extends React.Component {
    state = {
        currentCategory: {},
        products: []
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

    render() {
        return (
            <Container>
                <Navi />
                <Row>
                    <Col lg={3}>
                        <Categories setCurrentCategory={this.setCurrentCategory} />
                    </Col>
                    <Col lg={9}>
                        <ProductList products={this.state.products} currentCategory={this.state.currentCategory} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default App;