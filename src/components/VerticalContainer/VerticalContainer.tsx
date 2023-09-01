import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './VerticalContainer.css';
import { ReactNode } from "react";

  
const VerticalContainer = (props:{children:ReactNode}) => {
  return (
    <div className="vertical-container">
      {props.children}
    </div>    
  );
};

export default VerticalContainer;