import { useState } from "react";

const Gallery = () => {

    const img1 = "https://store-images.s-microsoft.com/image/apps.36942.64089017197710810.41be4569-c1ec-4aff-8658-ec58f7466792.dddff402-496e-47e6-b071-3c5bb954dcc6?mode=scale&q=90&h=1080&w=1920";
    const img2 = "https://compass-ssl.xbox.com/assets/6a/31/6a31393d-b0cc-4833-8e82-fd3a2c6b6e19.jpg?n=FH4_GLP-Page-Hero-1084_1920x1080_02.jpg";
    const img3 = "https://media.gq-magazine.co.uk/photos/5d1397d74858d3e3e0005036/16:9/w_2560%2Cc_limit/burnout-05-gq-13-mar18_b.jpg";
    const img4 = "https://i.ytimg.com/vi/dWSqqckKjVM/maxresdefault.jpg";

    const [mainIMg, setMainIMg] = useState(img1)

    const changeImage = (img) => {
        setMainIMg(img);
    }

    return (
        <div className="container">

            <img className="img-fluid" src={mainIMg} />

            <div className="row mt-3">
                <div className="col-md">
                    <img onClick={e => { changeImage(img1) }} className="img-fluid" src={img1} />
                </div>
                <div className="col-md">
                    <img onClick={e => { changeImage(img2) }} className="img-fluid" src={img2} />
                </div>
                <div className="col-md">
                    <img onClick={e => { changeImage(img3) }} className="img-fluid" src={img3} />
                </div>
                <div className="col-md">
                    <img onClick={e => { changeImage(img4) }} className="img-fluid" src={img4} />
                </div>
            </div>

        </div>
    )
}

export default Gallery;