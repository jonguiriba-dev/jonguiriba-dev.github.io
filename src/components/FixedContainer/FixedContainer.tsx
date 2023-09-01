import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './FixedContainer.css';
import { ReactNode } from "react";

  
const FixedContainer = (props:{children:ReactNode}) => {
  return (
    <div className="fixed-container">
      {props.children}
    </div>    
  );
};

export default FixedContainer;