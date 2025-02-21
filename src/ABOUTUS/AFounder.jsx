import React from "react";

const FounderData = [
    {
        "Descimg": "https://takalkarclasses.com/wp-content/uploads/2023/04/about.jpg",
        "Desctitle1": "In the year 1987, a visionary saw a dream. A dream to impart quality education to every student who would come seeking it. Through his persistent eﬀorts, Prof. Kedar Takalkar realized his dream and brought the Takalkar legacy to life along with Prof. Vrinda Takalkar, Prof. Ritesh Bhattad, and Mr. Sheetal Patil as support pillars and directors of the organization.",
        "Desctitle2": "Takalkar Eduhub Pvt. Ltd. with a directorial experience of 70+ years has evolved tremendously, both in their scale and the quality of education. Started from just 20 students in the ﬁrst batch, the class today caters to thousands of students every year.",

    }
]

const FounderInfo = [
    {
        "title": "About the Founder",
        "desc": "Workshops and more than 3000 seminars all over Maharashtra for parents and students. Through these seminars, he has guided on topics such as – Parenting, Techniques of Studying, How to write Board Papers, FYJC admission guidance, Aptitude tests, Engineering & Medical admission counseling etc. As an accomplished career counselor, he has been instrumental in directing thousands of young minds towards their dream careers. Times of India group has rightly felicitated him with the ‘Best Career Counsellor Award’ for Four consecutive years 2017, 2018,2019 & 2020.",
        "imagefounder": "https://takalkarclasses.com/wp-content/uploads/2023/04/director.png"
    }
]
export default function Founder() {
    return (
        <>
            <div className="container">
                <div className="row mt-5 align-items-center">
                    <div className="col-lg-6 col-md-12 text-center">
                        <img src={FounderData[0].Descimg}
                            className="img-fluid rounded shadow-lg"
                            alt="About Takalkar Classes" />
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <h1 className="text-dark fw-bold">
                            About <span className="text-danger fw-bold">Takalkar Classes</span>
                        </h1>
                        <p className="text-secondary">
                            {FounderData[0].Desctitle1}
                        </p>
                        <p className="text-secondary">{FounderData[0].Desctitle2}</p>

                        <button className="btn btn-success ">
                            <i className="fas fa-bullhorn me-2"></i> Apply For Admission
                        </button>
                    </div>
                </div>

                <div className="row mt-5 align-items-center">
                    <div className="col-sm-8">
                        <h1 className="fw-bold text-black">About the <span className="fw-bold text-danger">Founder</span></h1>
                        <p className="text-secondary">{FounderInfo[0].desc}</p>
                        <h6 style={{fontWeight:"bold"}}>PROF. KEDAR TAKALKAR</h6>
                        <h6>FOUNDER</h6>
                    </div>
                    <div className="col-sm-4 p-5">
                        <img
                            src={FounderInfo[0].imagefounder}
                            alt="Founder"
                            className="img-fluid rounded"
                            style={{ height: "330px", width: "100%" }} />
                    </div>
                </div>
            </div>
        </>
    )
}