import React from "react";

export default function Course()
{
    return(
        <>
             <div className="containe-fluid courses-head text-center p-5">
            <div className="row">
            <h2 class="fw-bold text-white">FLEXIBLE COURSES</h2>
            <p className="text-white">Our goal is to make students enjoy studies and prepare them for reaching greater heights. Our unique teaching methodology is focused on making students learn conceptually and in a way that works for them.</p>
            </div>
                </div>
        <section class="courses-section">
        <div class="container">
            <div class="row">
                <div className="col-md-1 ms-4"></div>
                <div class="col-md-3 mt-4">
                    <div class="course-card">
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/8th-9th-10th-1.png" alt="Course 1"/>
                        <div class="p-3">
                            <div class="course-title">8th, 9th, 10th</div>
                            <p>(SSC, CBSE, ICSE Boards)</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mt-4">
                    <div class="course-card">
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/11th-12th-Science-PCMB.png" alt="Course 2"/>
                        <div class="p-3">
                            <div class="course-title">11th, 12th, Science-PCMB</div>
                            <p>(HSC & CBSE)</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mt-4">
                    <div class="course-card">
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/JEE-NEET-CET.png" alt="Course 3"/>
                        <div class="p-3">
                            <div class="course-title">JEE, NEET, CET</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}