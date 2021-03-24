import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getProduct, deleteProduct } from "../../actions/productActions";
import ModalEdit from "./modal";

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

export default function TypographyPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      <Card className={classes.display}>
        <CardHeader
          color="primary"
          style={{ display: "flex", padding: "20px" }}
        >
          <h4 className={classes.cardTitleWhite}>List of products</h4>

          <ModalEdit check={false} />
        </CardHeader>
        <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
          {products != null
            ? products.map((el) => (
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
                    <CardActions>
                      <ModalEdit products={el} check={true} />
                      {/* <TypographyPage /> */}
                      <Button
                        size="small"
                        color="secondary"
                        onClick={() => dispatch(deleteProduct(el._id))}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </CardBody>
              ))
            : true}
        </div>
      </Card>
    </div>
  );
}
