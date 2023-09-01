import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { IonCol, IonGrid, IonRow} from '@ionic/react';
import './ProgressBar.css';
const ProgressBar = (props:{
  label:string,
  color:string,
  value:string,
  level:string
}) => {
  return (
    <div className='progress-bar-container'>
      <IonGrid>
        <IonRow>
          <IonCol>
            <h4>{props.label}</h4>
          </IonCol>
          <IonCol>
            <h4>{props.level}</h4>
          </IonCol>
        </IonRow>
      </IonGrid>
      
      <div className="progress-bar">
          <div className={"progress " + props.color} style={{width:props.value}}></div>
      </div>
    </div>
  );
};

export default ProgressBar;