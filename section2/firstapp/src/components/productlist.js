import ProductData from "./productdata";
 import { Link } from "react-router-dom";
 import { useState } from "react";
 import './productlist.css';
const Product = (props) => {
  
   const data = props.productDataKey;
 const index = props.indexKey;

  return (
    <>
  
       <div className="container bcontent">
        <hr />
        <div className="card">
          <div className="row no-gutters">
            <div className="col-sm-3">
              <div className="container">
                
                <img
                  className="card-img-top"
                  src={data.img}
                  alt="Suresh Dasari Card"
                />
              </div>
            </div>
            <div className="col-sm-7">
              <div className="card-body">
                <h2>
                  <Link to={"/productdetails/" + index}>{data.name}</Link>
                </h2>

                <h6>
                  Processor: 10th Gen Intel Core i7-10875H, 2.3 GHz Base Speed,
                  Up to 5.1 GHz Max Turbo Speed, 8 cores, 16 Threads, 16MB Cache
                  Memory: 16GB DDR4 3200MHz, Upgradeable Up to 32GB using 2x
                  SO-DIMM Slot with | Storage: 1TB M.2 NVMe PCIe 3.0 SSD with
                  additional 2x M.2 2280 PCIe 3.0 Slot for SSD Storage Expansion
                  Graphics: Dedicated NVIDIA GeForce RTX 2070 SUPER GDDR6 8GB
                  VRAM
                </h6>
                <h2> ₹ : {data.price}</h2>
                <h4>Reviews : {data.reviews}</h4>

                <p className="card-text">
                Ratings : {data.ratings}
                </p>
                <Link className="btn btn-primary" to="">View Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </div> 

    </>
  );
};

const ProductList = () => {

  const initUser = () =>{
    let user = sessionStorage.getItem('user');

    if(user){
      return JSON.parse(user);
    }else{
      return{}
    }
  }


  // const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))
  const [currentUser, setCurrentUser] = useState(initUser())

  const displayUserDetails = () =>{
    if(currentUser.username){
      return(
        <>
        <h2>
          Hello,  {currentUser.username} !!!<br/>
          Your Password is '{currentUser.password}'
        </h2>
        </>
      )
    }
   else {
    return <p>Not Loggedin? <Link to="/login">Login Now</Link></p>
}
    
  }


  return (
    <>
     {displayUserDetails()}
      
      <h1>Product List</h1>
      <hr />
      {ProductData.map((product, index) => {
        return (
          <div key={index}>
            <Product productDataKey={product} indexKey={index} ></Product>
          </div>
        );
      })}
    </>
  );
};
export default ProductList;
