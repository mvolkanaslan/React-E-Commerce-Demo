export default class ProductContext{
    constructor(){
        this.url="http://localhost:3000/products";
    }
    
     static getProducts = async () =>{
       return await fetch('http://localhost:3000/products')
       .then(response => response.json())
       .then(data=>data)
    }
     static getProductById = async (id) =>{
       return await fetch('http://localhost:3000/products/'+id)
            .then(response => response.json())
            .then(data=>data)
    }
}
