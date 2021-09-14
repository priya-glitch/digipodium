import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProductDetails = () =>{

    const {id} = useParams();
    return (
        <>
        <h1>Product Details</h1>
       
       <h1>
           ID : {id}
       </h1>


       <div className="container bcontent">
        <h2>Bootstrap Horizontal Card</h2>
        <hr />
        <div className="card" >
            <div className="row no-gutters">
                <div className="col-sm-5">
                    <img className="card-img" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Suresh Dasari Card"/>
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h2 className="card-title">Asus ROG</h2>
                        <h5>Processor: 10th Gen Intel Core i7-10875H, 2.3 GHz Base Speed, Up to 5.1 GHz Max Turbo Speed, 8 cores, 16 Threads, 16MB Cache
Memory: 16GB DDR4 3200MHz, Upgradeable Up to 32GB using 2x SO-DIMM Slot with | Storage: 1TB M.2 NVMe PCIe 3.0 SSD with additional 2x M.2 2280 PCIe 3.0 Slot for SSD Storage Expansion
Graphics: Dedicated NVIDIA GeForce RTX 2070 SUPER GDDR6 8GB VRAM
Display: 15.6-inch (39.62 cms) FHD (1920 x 1080) 16:9 LED-Backlit LCD, 300nits, 300Hz/3ms Refresh Rate, Anti-Glare IPS-level Panel, 1:1000 Contrast Ratio, 72% NTSC, 100% sRGB, 75.35% Adobe
Software Included: Pre-installed Office Home and Student 2019 with lifetime validity | Operating System: Pre-loaded Windows 10 Home with lifetime validity
                            </h5>

                        <p className="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                        <Link  className="btn btn-primary">View Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
    )
    
}

export  default ProductDetails;