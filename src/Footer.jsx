import React from "react";
export default function Footer(){
    return(
        <>
            <section>
            <div className="container-fluid p-5 text-white" style={{ backgroundColor: "black" }}>
            <div className="row">
                <div className="col-3">
                    <ul className="infosect">
                        <li style={{listStyleType:"none"}}><img src="https://takalkarclasses.com/wp-content/uploads/2023/04/Fotter-Logo-1.png" alt="" className="mb-2"/></li>
                        <li style={{listStyleType:"none"}}>
                            <p className="text-justify">Takalkar Eduhub Pvt. Ltd. with a directorial experience of 70+ years has evolved tremendously, both in their scale and the quality of education..</p>
                        </li>
                        <li style={{listStyleType:"none"}}>
                            <h4>Reach out to us</h4>
                        </li>
                        <li style={{listStyleType:"none"}}>
                            <p className="text-white"><i class="fa-regular fa-envelope"></i> learn@takalkarclasses.com</p>
                        </li>
                        <li style={{listStyleType:"none"}}>
                            <p className="text-white"><i class="fa-solid fa-phone"></i> +91 98810 98308</p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 text-center">
                <ul type="none" className="text-left infosect">
                    <li>
                    <h5 className="text-uppercase text-primary">QUICK LINKS</h5>
                    </li>
                    <li className="mt-3">
                    <a href="About.html" className="text-white">
                        Home
                    </a>
                    </li>
                    <li className="mt-3">
                    <a href="Gallary.html" className="text-white">
                        About Us
                    </a>
                    </li>
                    <li className="mt-3">
                    <a href="Blog.html" className="text-white">
                        Courses
                    </a>
                    </li>
                    <li className="mt-3">
                    <a href="Contact.html" className="text-white">
                        Contact
                    </a>
                    </li>
                </ul>
                </div>

                <div className="col-md-2 text-center">
                <ul type="none" className="text-left infosect">
                    <li>
                        <h5 className="text-uppercase text-primary">TAGS</h5>
                    </li>
                    <li className="mt-3">
                        <button className="btn btn-transparent">SSC</button><button>CBSC</button>
                    </li>
                    <li className="mt-3">
                    <a href="Gallary.html" className="text-white">
                        About Us
                    </a>
                    </li>
                    <li className="mt-3">
                    <a href="Blog.html" className="text-white">
                        Courses
                    </a>
                    </li>
                    <li className="mt-3">
                    <a href="Contact.html" className="text-white">
                        Contact
                    </a>
                    </li>
                </ul>
                </div>

            <div className="col-md-3 text-center">
              <ul type="none" className="text-left infosect1">
                <li>
                  <h5 className="text-uppercase text-primary">CONTACT US</h5>
                </li>
                <li>
                  303–318, Agro Business Park, Sadanand Estates, Plot No.5, S.No.105, Dehu Road, Dehu, Pune–411 045,
                </li>
                <li>
                  Tel: <a href="#" className="text-light">+91 (020) 29996412/13</a>
                </li>
                <li>
                  Email: <a href="#" className="text-light">info@sjcpl.in</a>
                </li>
                <li style={{ fontSize: "25px" }}>
                  <i className="fa-brands fa-linkedin"></i>{" "}
                  <i className="fa-brands fa-facebook"></i>{" "}
                  <i className="fa-brands fa-youtube"></i>{" "}
                  <i className="fa-brands fa-instagram"></i>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6845.2814732733395!2d73.767407!3d18.567675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf79c2468cbd%3A0xea6b75c9fc133a64!2sS%20J%20Contracts%20Pvt%20Ltd!5e1!3m2!1sen!2sus!4v1729942202806!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}