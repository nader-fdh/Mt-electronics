import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MobileIcon, NavMenu } from "./NavBarElements";
import "./nav.css";
export const Navbar = ({ toggle }) => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h6>
                <a href="/">
                  <img
                    className="logo"
                    src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.15752-9/161170592_432337394530169_8927731534154911180_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=s4L1t-a16TcAX-feWJs&_nc_ht=scontent.ftun3-1.fna&oh=bf3f1e4d84ba0538b464806d8be67939&oe=6076717C"
                    alt="logo-doc"
                  />
                </a>
              </h6>
            </div>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <div className="col-sm-4">
              <NavMenu>
                <nav className="nav-link">
                  <ul className="main-menu">
                    <li className="list-nav">
                      <a className="list-nav-link" href="about as">
                        <Link to="/">Home</Link>
                      </a>
                    </li>

                    <li className="list-nav">
                      <a>
                        <Link className="list-nav-link" to="/login">
                          Login
                        </Link>
                      </a>
                    </li>
                    <li className="list-nav">
                      <a>
                        <Link className="list-nav-link" to="/register">
                          Register
                        </Link>
                      </a>
                    </li>

                    <li className="list-nav dropdown">
                      <a>Contact</a>

                      <div className="dropdown-content">
                        <ul>
                          <li>
                            <a href="/contact">Contact Us</a>
                          </li>

                          <li>
                            <a href="/devis">Devis</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
              </NavMenu>
            </div>
          </div>
        </div>
      </nav>
    </>

    //     <nav className="nav">
    // //     <div className="container">
    // //         <div className="row">
    // //             <div className="col-sm-8">
    // //                 <h6> <a href="index.html"> <img className="logo" src="logo-doc.png" alt="logo-doc"></a></h6>
    // //             </div>

    // //             <div className="col-sm-4">
    // //                 <nav className="nav-link">
    // //                     <ul className="main-menu">
    // //                         <li className="list-nav"><a className="list-nav-link" href="about as">About Us</a></li>
    // //                         <li className="list-nav"><a href="career">Career</a></li>
    // //                         <li className="list-nav dropdown"><a>Department</a>

    // //                             <div className="dropdown-content">
    // //                                 <ul>
    // //                                     <li><a href="https://www.docplanner.com/department?dep=marketing">marketing</a></li>
    // //                                     <li><a href="https://www.docplanner.com/department?dep=customer">customer</a></li>
    // //                                     <li><a href="https://www.docplanner.com/department?dep=it">Product</a></li>
    // //                                 </ul>
    // //                             </div>
    // //                         </li>
    // //                     </ul>
    // //                 </nav>
    // //             </div>
    // //         </div>
    // //     </div>
    // // </nav>
  );
};

export default Navbar;
