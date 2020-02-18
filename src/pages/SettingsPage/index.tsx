import React from "react";
import { IonPage, IonContent, IonHeader } from "@ionic/react";
import Title from "../../components/Header";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListSubheader,
  ListItemIcon,
  Switch
} from "@material-ui/core";
import WifiIcon from "@material-ui/icons/Wifi";
import SyncIcon from "@material-ui/icons/Sync";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

export default function Settings() {
  return (
    <IonPage>
      <IonHeader>
        <Title name="Settings" />
      </IonHeader>
      <IonContent>
        <List>
          <ListSubheader>Connection</ListSubheader>
          <ListItem>
            <ListItemIcon>
              <WifiIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
            <Switch edge="end" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SyncIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-wifi" primary="Sync" />
            <Switch edge="end" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <VolumeUpIcon />
            </ListItemIcon>
            <ListItemText
              id="switch-list-label-wifi"
              primary="Turn Sound ON-OF"
            />
            <Switch edge="end" />
          </ListItem>
          <ListSubheader>Email</ListSubheader>
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </IonContent>
    </IonPage>
  );
}
