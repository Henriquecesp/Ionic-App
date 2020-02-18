import React from "react";
import { Toolbar, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IonToolbar, IonButtons, IonMenuButton } from "@ionic/react";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuColor: {
    background:
      "linear-gradient(to right, rgba(62,146,204,1) 0%, rgba(42,98,143,1) 0%, rgba(42,98,143,1) 100%)"
  },
  menuLink: {
    textDecoration: "none",
    color: "white",
    padding: "10px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
const Title = ({ name }: { name: string }) => {
  const classes = useStyles();
  return (
    <IonToolbar>
      <div className={classes.root}>
        <AppBar position="static" className={classes.menuColor}>
          <Toolbar>
            <IonButtons slot="start">
              <IonMenuButton color="light" />
            </IonButtons>
            <div className={classes.title}>{name}</div>
          </Toolbar>
        </AppBar>
      </div>
    </IonToolbar>
  );
};

export default Title;
