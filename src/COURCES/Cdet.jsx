import React from "react";
 export default function Cdetails(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-danger text-center mt-5">Cour<span style={{borderBottom:"5px solid green"}}>ses Off</span>ered</h1>
                    </div>
                   <div col-5 className="text-center">
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/05/i1.png" height="80px" style={{paddingLeft:"14px"}}></img>
                    </div>
                    <div col-7>
                        <h4 className="pt-4 pl-2">CET</h4>
                    </div>
                    <div className="col-12 pt-2">
                        <p>The MHT-CET or  Common Entrance Test is an annual entrance exam conducted by the Government of Maharashtra. It is conducted by the Directorate of Technical Education. The degree courses of the following streams are mainly accounted for this entrance exam:</p>
                        <p><span className="text-danger"><i class="fa-solid fa-arrow-right-long"></i></span> Engineering</p>
                        <p><span className="text-danger"><i class="fa-solid fa-arrow-right-long"></i></span> Pharmacy</p>
                    </div>
                    <div className="col-12 mb-4">
                        <p>The test was conducted in online mode for the first time in 2019. The State Common Entrance Test Cell, Maharashtra released the syllabus and marking scheme for the Computer Based Test(CBT).</p>
                    </div>
                </div>
            </div>
        </>
    )
 }