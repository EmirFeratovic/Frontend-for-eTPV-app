import React from "react";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./Sidebar";


const Main = () => {
  return <Grid container style={{ width: "100%", height: "100%" }}>
    < Grid item md={4} lg={3} style={{ borderRight: "1px solid #1291CA" }}>
      <Sidebar />
    </Grid>
    <Grid item md={8} lg={9}>

      <div style={{ width: "100%", height: "100%" }}>
      </div>

    </Grid>
  </Grid >
};

export default Main;
