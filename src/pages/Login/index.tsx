import React from "react";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  CardActions,
  makeStyles
} from "@material-ui/core";
import { IonApp, IonContent, IonButton } from "@ionic/react";

const useStyles = makeStyles(_theme => ({
  root: {
    position: "absolute",
    top: "50%",
    width: "100%",
    transform: "translate(0, -50%)"
  },
  bg: {
    backgroundColor: "black"
  }
}));

export const Login: React.FC = () => {
  const classes = useStyles();
  return (
    <IonApp>
      <IonContent>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography>Login</Typography>
            <TextField
              autoFocus
              margin="dense"
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
            />
            <br />
            <TextField
              autoFocus
              margin="dense"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
            />
            <CardActions>
              <IonButton color="primary" fill="clear">
                Cancel
              </IonButton>
              <IonButton routerLink="/home" color="primary">
                Login
              </IonButton>
            </CardActions>
          </CardContent>
        </Card>
      </IonContent>
    </IonApp>
  );
};

export default Login;
