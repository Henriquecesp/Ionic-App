import React from "react";
import { IonFab, IonFabButton, IonIcon, IonFabList } from "@ionic/react";
import {
  arrowDropup,
  chatbubbles,
  settings,
  cloudUpload
} from "ionicons/icons";

export const FabList: React.FC = () => (
  <IonFab vertical="bottom" horizontal="end" slot="fixed">
    <IonFabButton>
      <IonIcon icon={arrowDropup} />
    </IonFabButton>
    <IonFabList side="top">
      <IonFabButton color="primary">
        <IonIcon icon={cloudUpload} />
      </IonFabButton>
    </IonFabList>
    <IonFabList side="start">
      <IonFabButton color="success">
        <IonIcon icon={chatbubbles} />
      </IonFabButton>
      <IonFabButton color="medium">
        <IonIcon icon={settings} />
      </IonFabButton>
    </IonFabList>
  </IonFab>
);
