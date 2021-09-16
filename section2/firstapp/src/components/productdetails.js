import { useParams } from "react-router";
import ProductData from "./productdata";


const ProductDetails = () =>{

    const {id} = useParams();
    const  currentProduct = ProductData[id];
    return (
        <>
        <h1>Product Details</h1>
        <h1>index : {id}</h1>
        <h1>{currentProduct.name}</h1>
        <h1>{currentProduct.price}</h1>
       
       


       
    </>
    )
    
}

export  default ProductDetails;