import React, { Component } from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AppPage } from "./declarations";

/*Pages import */
import Menu from "./components/Menu";
import Main from "./pages/Main";
import List from "./pages/List";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/SettingsPage";

import { list, settings, person, logOut, home } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

//Import connection test
import { connection } from "./connection";

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/home",
    icon: home
  },
  {
    title: "Profile",
    url: "/profile",
    icon: person
  },
  {
    title: "List",
    url: "/list",
    icon: list
  },
  {
    title: "Settings",
    url: "/settings",
    icon: settings
  },
  {
    title: "Logout",
    url: "/",
    icon: logOut
  }
];
export default class App extends Component {
  componentDidMount() {
    connection();
  }
  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu appPages={appPages} />
            <IonRouterOutlet id="main">
              <Route exact={true} path="/" component={Login} />
              <Route path="/home" component={Main} />
              <Route path="/list" component={List} />
              <Route path="/profile" component={Profile} />
              <Route path="/settings" component={Settings} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    );
  }
}
