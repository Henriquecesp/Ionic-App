import React, { Component } from "react";
import { IonPage, IonContent, IonHeader } from "@ionic/react";

export default class Default extends Component {
  render() {
    return (
      <IonPage>
        <IonHeader>Default</IonHeader>
        <IonContent>
          <div>Default</div>
        </IonContent>
      </IonPage>
    );
  }
}
