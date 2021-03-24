import React from "react";
import { Carousel } from "react-bootstrap";
import imageSlider from "../../assets/img/image1.jpg";
import imageSlider2 from "../../assets/img/image2.jpg";
import imageSlider3 from "../../assets/img/image3.jpg";
import Zoom from "react-reveal/Zoom";
import "./carousel.css";

const CarouselHome = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item style={{ height: "700px" }}>
          <img
            className="d-block w-100"
            src="https://scontent.ftun7-1.fna.fbcdn.net/v/t1.0-9/11061708_820595684678691_4774585600693255582_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=e3f864&_nc_ohc=YaUs2_6Gxg0AX_4nTpp&_nc_ht=scontent.ftun7-1.fna&oh=be8258e75e11327c38c36965f227f2f5&oe=6075C879"
            alt="iùage"
            style={{ width: "100%", height: "100%" }}
          />
          <Carousel.Caption>
            <Zoom left cascade>
              <h1 className="titleCarousel">MT ELECTRONICS</h1>
            </Zoom>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "700px" }}>
          <img
            className="d-block w-100"
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/159916654_456410605671345_8693254210308898120_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=58c789&_nc_ohc=yXwfVVCsNDkAX8Jfm30&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=fb392664d7f224866e36ca04e78b0602&oe=6075F001"
            alt="iùage"
            style={{ width: "100%", height: "100%" }}
          />
          <Carousel.Caption>
            <Zoom left cascade>
              <h1 className="titleCarousel">MT ELECTRONICS</h1>
            </Zoom>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "700px" }}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1604590003197-21a045e0d2ed?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTZ8fGVsZWN0cm9uaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
            alt="iùage"
            style={{ width: "100%", height: "100%" }}
          />
          <Carousel.Caption>
            <Zoom left cascade>
              <h1 className="titleCarousel">MT ELECTRONICS</h1>
            </Zoom>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
