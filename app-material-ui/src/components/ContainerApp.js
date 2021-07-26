import React, { useState } from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import DraWer from "./DraWer";
import BoxUi from './BoxUi'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
const ContainerApp = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const deploy = ()=>{
    setOpenDrawer(!openDrawer)
  }

  return (
    <div className={classes.root}>
      <NavBar deploy={deploy}/>
      <Hidden xsDown>
        <DraWer variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <DraWer
          variant="temporary"
          open={openDrawer}
          onClose={deploy}
        />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <BoxUi/>
      </div>
    </div>
  );
};

export default ContainerApp;
