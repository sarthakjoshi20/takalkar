import React from "react";

const Teaching = [{
    "title": "Teaching Methodology",
    "desc": "Our focus is more than grades; we want a shift in the perspective, we want to reshape how students look at studies.",
    "img": "https://takalkarclasses.com/wp-content/uploads/2023/10/Group-213.png"
}
]

export default function Teachingmethod() {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="fw-bold text-center text-dark">{Teaching[0].title}</h1>
                        <p className="text-center mt-3 text-dark">{Teaching[0].desc}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <img src={Teaching[0].img} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    )
}