import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, IconButton, Button, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { IonToolbar, IonButtons, IonMenuButton, IonTitle } from "@ionic/react";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuColor: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
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
            <div className={classes.title}>
              <Button>
                <Link className={classes.menuLink} to="/">
                  {name}
                </Link>
              </Button>
            </div>
            <Button>
              <Link to="/create" className={classes.menuLink}>
                Create
              </Link>
            </Button>
            <Button color="inherit" className={classes.menuLink}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </IonToolbar>
  );
};

export default Title;
