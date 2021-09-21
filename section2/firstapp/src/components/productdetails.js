import { useParams } from "react-router";
import ProductData from "./productdata";


const ProductDetails = () =>{

    const {id} = useParams();
    const  currentProduct = ProductData[id];
    return (
        <>
        <h1>Product Details</h1>
        <h1>index : {id}</h1>
        <h1>Name : {currentProduct.name}</h1>
        <h2> Price : ₹ {currentProduct.price}</h2>
        <h3> Ratings : {currentProduct.ratings}</h3>
        <h3> Reviews : {currentProduct.reviews}</h3>

       
    </>
    )
            
}

export  default ProductDetails;