import React from "react";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  makeStyles,
  withStyles
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IonApp, IonContent, IonButton } from "@ionic/react";

const useStyles = makeStyles(_theme => ({
  root: {
    position: "absolute",
    top: "50%",
    width: "100%",
    transform: "translate(0, -50%)",
    background: "transparent",
    boxShadow: "none",
    padding: "20px"
  },
  bgLogin: {
    background:
      "linear-gradient(to right, rgba(62,146,204,1) 0%, rgba(42,98,143,1) 0%, rgba(42,98,143,1) 100%)",
    width: "100%",
    height: "100vh"
  },
  loginIcon: {
    textAlign: "center",
    marginBottom: "30px",
    color: "white"
  },
  loginBtn: {
    marginTop: "8px",
    width: "100%",
    margin: "0",
    borderRadius: "5px"
  }
}));

const CssTextField = withStyles({
  root: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: "5px",
    "& label.Mui-focused": {
      color: "#000"
    },
    "& MuiFormLabel-root": {
      color: "#000"
    }
  }
})(TextField);

export const Login: React.FC = () => {
  const classes = useStyles();
  return (
    <IonApp>
      <IonContent>
        <div className={classes.bgLogin}>
          <Card className={classes.root}>
            <CardContent>
              <div className={classes.loginIcon}>
                <AccountCircleIcon fontSize="large" />
                <Typography>Login</Typography>
              </div>
              <CssTextField
                autoFocus
                margin="dense"
                label="Username"
                type="text"
                variant="filled"
                fullWidth
                InputProps={{
                  disableUnderline: true
                }}
              />
              <CssTextField
                autoFocus
                margin="dense"
                label="Password"
                type="password"
                variant="filled"
                fullWidth
                InputProps={{
                  disableUnderline: true
                }}
              />
              <IonButton
                className={classes.loginBtn}
                routerLink="/home"
                routerDirection="none"
                color="azul-escuro"
              >
                Login
              </IonButton>
            </CardContent>
          </Card>
        </div>
      </IonContent>
    </IonApp>
  );
};

export default Login;
