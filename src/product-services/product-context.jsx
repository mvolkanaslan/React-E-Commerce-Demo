export default class ProductContext{ 
    
    static url = "http://localhost:3000/products"
     static getProducts = async () =>{
       return await fetch(this.url)
       .then(response => response.json())
       .then(data=>data)
    }
     static getProductById = async (id) =>{
       return await fetch(`${this.url}/${id}`)
            .then(response => response.json())
            .then(data=>data)
    }
}
