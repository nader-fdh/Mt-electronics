import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer-left col-md-4 col-sm-6">
          <p class="about">
            <span>
              <h4 style={{ color: "#fff" }}>About us</h4>
            </span>
            <h3 style={{ color: "#fff" }}>
              MT Electronics is a dynamic and responsive team, specialized in
              the study, manufacture and maintenance of electronic and
              electrical systems.
            </h3>
          </p>
          <div class="icons">
            <a href="https://www.facebook.com/nader.sahliano.52/">
              <i class="fa fa-facebook"></i>
            </a>

            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div class="footer-center col-md-4 col-sm-6">
          <div>
            {/* <i class="fa fa-map-marker"></i> */}
            <p>
              <span>
                <h4 style={{ color: "#fff" }}>
                  Imm.Haddar office N*2 -Street of Republic 5000
                </h4>
              </span>
              <h4 style={{ color: "#fff" }}> Monastir, TUNISIA</h4>
            </p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p> (+216) 94 348 683</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="#">w.fadhel@yahoo.fr</a>
            </p>
          </div>
        </div>
        <div class="footer-right col-md-4 col-sm-6">
          <h2>
            <img
              src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.15752-9/161170592_432337394530169_8927731534154911180_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=s4L1t-a16TcAX-feWJs&_nc_ht=scontent.ftun3-1.fna&oh=bf3f1e4d84ba0538b464806d8be67939&oe=6076717C"
              alt="logo"
            />
          </h2>
          <p class="menu">
            <a href="/contact">
              <h3 style={{ color: "#fff" }}>Contact Us </h3>
            </a>
          </p>
          <p class="name"> Mt electronics &copy; 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
