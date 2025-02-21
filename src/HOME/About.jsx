import React from "react";

export default function HAbout()
{
    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="mt-4" src="https://takalkarclasses.com/wp-content/uploads/2023/04/About.png" alt="" />
                
                    <h1 className="fw-bold"><span className="text-success">Takalkar</span> Classes</h1>
                    <p className="p-style">
                    In the year 1987, a visionary saw a dream. A dream to impart quality education to every student who would come seeking it. Through his persistent efforts , Prof. Kedar Takalkar realized his dream and brought the Takalkar Legacy to life along with Prof. Vrinda Takalkar, Prof. Ritesh Bhattad , and Mr. Sheetal Patil as support pillars and directors of the organization
                    </p>
                    <button className="border-0 btn btn-white mb-3">
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/05/Read-More.png" alt="" />
                    </button>
                    
                    <ul className="about-list">
                        <li>
                            <div class="feature-item">
                                <div class="feature-icon"><i class="fas fa-users"></i></div>
                                <div class="feature-text">1 Lakh Alumni +</div>
                            </div>
                        </li>
                        <li>
                            <div class="feature-item">
                                <div class="feature-icon"><i class="fas fa-lightbulb"></i></div>
                                <div class="feature-text">Learning Material</div>
                            </div>
                        </li>
                        <li>
                            <div class="feature-item">
                                <div class="feature-icon"><i class="fas fa-book-open"></i></div>
                                <div class="feature-text">Quality Education</div>
                            </div>
                        </li>
                    </ul>  
                    <ul className="about-list">
                        <li>
                            <div class="feature-item">
                                <div class="feature-icon"><i class="fas fa-user-check"></i></div>
                                <div class="feature-text">Admission Assistance</div>
                            </div>
                        </li>
                        <li>
                            <div class="feature-item">
                                <div class="feature-icon"><i class="fas fa-file-invoice"></i></div>
                                <div class="feature-text">TEMAT</div>
                            </div>
                        </li>
                        <li>
                            <div class="feature-item">
                                <div class="feature-icon"><i class="fas fa-hand-holding-usd"></i></div>
                                <div class="feature-text">Affordable fees</div>
                            </div>
                        </li>
                    </ul>  
                </div>
                <div className="col-md-6">
                    <img className="h-75" src="https://takalkarclasses.com/wp-content/uploads/2023/06/Group-169_11zon.png" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}