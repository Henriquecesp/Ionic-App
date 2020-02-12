import React from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AppPage } from "./declarations";

import Menu from "./components/Menu";
import Main from "./pages/Main";
import List from "./pages/List";
import Slides from "./pages/Slides";
import Settings from "./pages/SettingsPage";
import { home, list, settings, person, logOut, airplane } from "ionicons/icons";

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
import Default from "./pages/Default";
// import Home from "./pages/Home";

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/home",
    icon: home
  },
  {
    title: "Profile",
    url: "/home/profile",
    icon: person
  },
  {
    title: "List",
    url: "/home/list",
    icon: list
  },
  {
    title: "Settings",
    url: "/home/settings",
    icon: settings
  },
  {
    title: "Logout",
    url: "/",
    icon: logOut
  },
  {
    title: "Default",
    url: "/default",
    icon: airplane
  }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Main} exact={true} />
          <Route path="/home/list" component={List} exact={true} />
          <Route path="/home/settings" component={Settings} exact={true} />
          <Route path="/" component={Slides} exact={true} />
          <Route path="/default" component={Default} exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
