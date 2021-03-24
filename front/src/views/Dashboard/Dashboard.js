import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";

// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Table from "../../components/Table/Table";

import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "../../components/Card/CardIcon";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import { getDashboardInfo } from "../../actions/dashboardActions";
import ModalUpdate from "./modal";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardInfo());
  }, []);
  const dashboardInfo = useSelector(
    (state) => state.dashboardInfo.dashboardInfo
  );
  console.log(dashboardInfo);

  const classes = useStyles();
  return (
    <div>
      {dashboardInfo != null
        ? dashboardInfo.map((el) => (
            <GridContainer>
              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                      <Icon>content_copy</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Number of workers</p>
                    <h3 className={classes.cardTitle}>
                      {el.employer}
                      <small>__workers</small>
                    </h3>
                  </CardHeader>
                  <CardFooter stats>
                    <div className={classes.stats}>Ower workers</div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                      <Store />
                    </CardIcon>
                    <p className={classes.cardCategory}>Revenue</p>
                    <h3 className={classes.cardTitle}>{el.revenue}</h3>
                  </CardHeader>
                  <CardFooter stats>
                    <div className={classes.stats}>
                      <DateRange />
                      Last 24 Hours
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="danger" stats icon>
                    <CardIcon color="danger">
                      <Icon>info_outline</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Completed work</p>
                    <h3 className={classes.cardTitle}>{el.completedWork}</h3>
                  </CardHeader>
                  <CardFooter stats>
                    <div className={classes.stats}>
                      <LocalOffer />
                      Completed succefully
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                      <Accessibility />
                    </CardIcon>
                    <p className={classes.cardCategory}>Clients</p>
                    <h3 className={classes.cardTitle}>{el.client}</h3>
                  </CardHeader>
                  <CardFooter stats>
                    <div className={classes.stats}>
                      <Update />
                      Just Updated
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <ModalUpdate dashboardInfo={el} />
            </GridContainer>
          ))
        : true}

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th March , 2021
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
