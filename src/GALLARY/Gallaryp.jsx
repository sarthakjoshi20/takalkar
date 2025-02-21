import React from "react";

export default function Gallaryp(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-5 mb-2 text-center">
                        <button className="btn btn-danger">ALL</button>
                        <button className="btn btn-outline-danger ml-3">JALLOSH 2022</button>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                {/* Repeat for each image card */}
                {[
                    "https://takalkarclasses.com/wp-content/uploads/2023/10/AA-1686.jpg",
                    "https://takalkarclasses.com/wp-content/uploads/2023/10/AA-1699.jpg",
                    "https://takalkarclasses.com/wp-content/uploads/2023/10/AA-2062.jpg",
                    "https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1528.jpg",
                    "https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1536.jpg",
                    "https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1653.jpg",
                    "https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1755.jpg",
                    "https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1915.jpg",
                    "https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1976.jpg"
                ].map((image, index) => (
                    <div className="col-md-4 p-1" key={index}>
                    <div className="card">
                        <div className="card-header p-0">
                        <img
                            src={image}
                            className="w-100 img-thumbnail"
                            style={{ height: "275px" }}
                            alt={`Gallery item ${index + 1}`}
                        />
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-4 mb-4 text-center">
                        <button className="btn btn-danger">LOAD MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}