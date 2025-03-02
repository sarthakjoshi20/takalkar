import React from "react";
export default function Carousal(){
    return(
        <>
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 p-0">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/1.jpg" height="500px" alt="./img/1.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img src="img/2.jpg" height="500px" className="d-block w-100 imgcrl" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="img/3.jpg" height="500px" className="d-block w-100 imgcrl" alt="..." />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
