import React from "react";
export default function Carousal(){
    return(
        <>
        <div className="contianer-fluid">
            <div className="row col-12 p-0">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="img/1.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="img/2.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="img/3.jpg" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            </div>
        </div>
        </>
    )
}
