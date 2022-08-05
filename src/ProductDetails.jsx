import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductContext from './product-services/product-context.jsx';
import Icon from "./Icon";


function ProductDetails(props) {
    const [product,setProduct] = useState({});
    const {id}= useParams();
    useEffect(()=>{
        ProductContext.getProductById(id).then(data=>setProduct(data))
    },[id]);
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-6 p-3">
                    <img src="https://picsum.photos/800/800" className="img-fluid rounded" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                        <h4 className="card-title text-uppercase">{product.productName}</h4>
                        <Icon  fill={"green"} name="addtocart" size={30} onClick={()=>props.addToCart (product)}/>
                        </div>
                        <p className="card-text ">{product.description}</p>
                        <hr />
                    </div>
                    <div>
                        <table className="table  table-hover">
                            <tbody>
                            
                                <tr>
                                    <td>Quantity Per Unit</td>
                                    <td>{product.quantityPerUnit}</td>
                                </tr>
                                <tr>
                                    <td>Stock Amount</td>
                                    <td>{product.unitsInStock}</td>
                                </tr>
                                <tr>
                                    <td>Unit Price</td>
                                    <td>€ {product.unitPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='d-flex justify-content-end m-3'>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ProductDetails;
