import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { IonCol, IonGrid, IonRow} from '@ionic/react';
import './ProgressBar.css';
const ProgressBar = (data) => {
  return (
    <div className='progress-bar-container'>
      <IonGrid>
        <IonRow>
          <IonCol>
            <h4>{data.label}</h4>
          </IonCol>
          <IonCol>
            <h4>{data.level}</h4>
          </IonCol>
        </IonRow>
      </IonGrid>
      
      <div className="progress-bar">
          <div className={"progress " + data.color} style={{width:data.value}}></div>
      </div>
    </div>
  );
};

export default ProgressBar;