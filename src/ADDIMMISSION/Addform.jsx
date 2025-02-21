import React from "react";
export default function Addform(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="ml-5 row">
                            <div className="col-12 mt-5 mb-5">
                                <img src="https://takalkarclasses.com/wp-content/uploads/2024/12/Takalkar-classes-admission.png" alt="" height="400px"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="mr-5 row">
                            <div className="col-12 mt-5 mb-5">
                                <h4 style={{fontWeight:"bold"}}>Fill out the form</h4>
                                <input type="text" placeholder="Name" className="form form-control mt-4"/>
                                <input type="text" placeholder="Email" className="form form-control mt-4"/>
                                <input type="text" placeholder="Mobile" className="form form-control mt-4"/>
                                <select name="state" id="state" className="form form-control form-select mt-4">
                                        <option value="">-- Select Course --</option>
                                        <option value="8th , 9th SSC">8th , 9th SSC</option>
                                        <option value="10th SSC">10th SSC</option>
                                        <option value="8th , 9th CBSE">8th , 9th CBSE</option>
                                        <option value="10th CBSE">10th CBSE</option>
                                        <option value="8th , 9th ICSE">8th , 9th ICSE</option>
                                        <option value="10th ICSE">10th ICSE</option>
                                        <option value="11th &amp; 12th Science ">11th &amp; 12th Science </option>
                                        <option value="11th , 12th  Science &amp; JEE">11th , 12th  Science &amp; JEE</option>
                                        <option value="11th , 12th  Science &amp; NEET">11th , 12th  Science &amp; NEET</option>
                                        <option value="11th , 12th  Science &amp; CET">11th , 12th  Science &amp; CET</option>
                                        <option value=""></option>
                                </select>
                                <select name="state" id="state" className="form form-control form-select mt-4">
                                        <option value="">-- Select Nearest Centre --</option>
                                        <option value="Aundh">Aundh</option>
                                        <option value="Balaji Nagar">Balaji Nagar</option>
                                        <option value="Baner">Baner</option>
                                        <option value="Bavdhan">Bavdhan</option>
                                        <option value="Bibwewadi">Bibwewadi</option>
                                        <option value="Gokul Nagar">Gokul Nagar</option>
                                        <option value="Hadapsar">Hadapsar</option>
                                        <option value="Keshav Nagar">Keshav Nagar</option>
                                        <option value="Kharadi">Kharadi</option>
                                        <option value="Kothrud">Kothrud</option>
                                        <option value="Nanded City">Nanded City</option>
                                        <option value="Narhe">Narhe</option>
                                        <option value="Pimple Gurav-Sangvi">Pimple Gurav-Sangvi</option>
                                        <option value="Sadashiv Peth">Sadashiv Peth</option>
                                        <option value="Sinhgad Road">Sinhgad Road</option>
                                        <option value="Wakad">Wakad</option>
                                        <option value="Wanawadi">Wanawadi</option>
                                        <option value="Warje">Warje</option>
                                </select>
                                <button className="btn btn-success pr-4 pl-4 mt-5" style={{fontWeight:"bold"}}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}