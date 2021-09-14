import ProductData from "./productdata";

const ProductList = () =>{

    const data = ProductData;
    return (
        <>
        <h1>Product List</h1>
        <hr/>
        {
        data.map(  (product) => {
            return  <><h1>{ product.name}</h1>
            <h2>{ product.price}</h2>
            </>
        })
        } 
        </>

    )
}
export  default ProductList;