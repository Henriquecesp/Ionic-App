import React from "react";
import { IonSlide, IonSlides, IonContent } from "@ionic/react";
import "./Slides.css";
import Login from "../Login";
const slideOpts = {
  initialSlide: 0,
  speed: 400
};
export const Slides: React.FC = () => (
  <IonContent>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <h3>Welcome, here's an explanation of how our system works!</h3>
      </IonSlide>
      <IonSlide>
        <h2>...System explanation...</h2>
      </IonSlide>
      <IonSlide>
        <Login />
      </IonSlide>
    </IonSlides>
  </IonContent>
);

export default Slides;
