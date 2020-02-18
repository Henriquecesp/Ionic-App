import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import { IonApp, IonContent, IonHeader } from "@ionic/react";
import Title from "../../components/Header";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "300px",
    margin: "0 auto 0",
    padding: "0 20px",
    border: "1px solid #ddd"
  },
  media: {
    height: 140,
    width: "auto"
  },
  textCenter: {
    textAlign: "center"
  },
  bgLogin: {
    width: "100%",
    height: "100vh",
    padding: "10px"
  }
}));

const Profile: React.FC = () => {
  const classes = useStyles();
  return (
    <IonApp>
      <IonHeader>
        <Title name="Profile" />
      </IonHeader>
      <IonContent>
        <div className={classes.bgLogin}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                title="Profile Picture"
              />
              <CardContent className={classes.textCenter}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  color="primary"
                >
                  Username
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  User description...
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        </div>
      </IonContent>
    </IonApp>
  );
};

export default Profile;
