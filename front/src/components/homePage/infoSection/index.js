import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardBody from "../../Card/CardBody";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getProduct } from "../../../actions/productActions";
import { deleteProduct } from "../../../actions/productActions";
import "./style.css";
import Bounce from "react-reveal/Bounce";
import Wobble from "react-reveal/Wobble";
import Fade from "react-reveal/Fade";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "flex",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  display: {
    display: "flex",
    flexWrap: "wrap",
  },
  root: {
    maxWidth: 345,
  },
};

const useStyles = makeStyles(styles);

function InfoSection() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <Card className={classes.display}>
        <Fade right>
          <div class="row section-padding30">
            <div class="col-lg-12">
              <div class="section-tittle mb-55">
                <div class="front-text">
                  <h2 style={{ marginLeft: "100px", marginBottom: "-224px" }}>
                    Achevments
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {products != null
            ? products.map((el) => (
                <Bounce left>
                  <CardBody>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="140"
                          image={el.image}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {el.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {el.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </CardBody>
                </Bounce>
              ))
            : true}
        </div>
      </Card>
      {/* <!-- Services Area Start --> */}
      <div
        class="services-area1 section-padding30"
        style={{ backgroundColor: "beige" }}
      >
        <div class="container">
          {/* <!-- section tittle --> */}
          <div class="row">
            <div class="col-lg-12">
              <div class="section-tittle mb-55">
                <div class="front-text">
                  <h2 class="">Ower Services</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <Wobble>
              <div class="col-xl-4 col-lg-4 col-md-6 brd-orange ">
                <div class="single-service-cap mb-30">
                  <div class="service-cap">
                    <h4>
                      <a>Electronis and electrecal equipements repairs</a>
                    </h4>
                  </div>
                  <div class="service-img">
                    <img
                      src="https://images.unsplash.com/photo-1580691746056-4badd831b86e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGVsZWN0cm9uaXMlMjBhbmQlMjBlbGVjdHJlY2FsJTIwZXF1aXBlbWVudHMlMjByZXBhaXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                      alt=""
                    />
                  </div>
                  <p>
                    We are occupied with offering excellent Pressure Instrument
                    Repairing Service. The offered administration is rendered by
                    our group of deft experts using astounding crude material
                    and propelled innovation remembering set business sector
                    gauges. This administration is exceedingly refreshing for
                    convenient usage, unwavering quality and cost-adequacy.
                  </p>
                </div>
              </div>
            </Wobble>
            <Wobble>
              <div class="col-xl-4 col-lg-4 col-md-6 brd-orange">
                <div class="single-service-cap mb-30">
                  <div class="service-cap">
                    <h4>
                      <a>PCB prototyping, assembly, small series production</a>
                    </h4>
                  </div>
                  <div class="service-img">
                    <img
                      src="https://images.unsplash.com/photo-1563968743333-044cef800494?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzc2VtYmx5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                      alt=""
                    />
                  </div>
                  <p>
                    NextPCB is a high-quality PCB Manufacturer. With
                    professional PCB manufacturing capabilities, our PCB
                    engineers with more than 10 years of experience will
                    double-check your engineering files. Besides, NextPCB is
                    certified by IATF16949, ISO9001, ISO14001, UL, CQC, RoHS and
                    REACH; more importantly, we handle the whole process
                    including PCB prototype, PCB manufacturing, PCB assembly,
                    testing, and final shipment. We are capable of assembling
                    BGA, Micro-BGA, QFN, and other leadless package parts. We
                    also have an online parts shop, you can choose any parts you
                    need.
                  </p>
                </div>
              </div>
            </Wobble>
            <Wobble>
              <div class="col-xl-4 col-lg-4 col-md-6 brd-orange">
                <div class="single-service-cap mb-30">
                  <div class="service-cap">
                    <h4>
                      <a>
                        Ambadded system solutions development and manufacturing
                      </a>
                    </h4>
                  </div>
                  <div class="service-img">
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fHN5c3RlbXMlMjBzb2x1dGlvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60"
                      alt=""
                    />
                  </div>
                  <p>
                    We can take a project from the initial phases of design
                    through software application development and into volume
                    manufacturing, or participate in any step of the entire
                    process. We can share the responsibility with your internal
                    team to maximize efficiency or handle all the design and
                    manufacturing aspects.
                  </p>
                </div>
              </div>
            </Wobble>
            <Wobble>
              <div class="col-xl-4 col-lg-4 col-md-6 brd-orange">
                <div class="single-service-cap mb-30">
                  <div class="service-cap">
                    <h4>
                      <a>Machines reinnovation and improvment </a>
                    </h4>
                  </div>
                  <div class="service-img">
                    <img
                      src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hY2hpbmVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                      alt=""
                    />
                  </div>
                  It’s about seeing technology for what it really is - a tool to
                  help us do something we want to do. It’s about being able to
                  recognise all the ways that technology could benefit your
                  patients, your colleagues and you
                </div>
              </div>
            </Wobble>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
