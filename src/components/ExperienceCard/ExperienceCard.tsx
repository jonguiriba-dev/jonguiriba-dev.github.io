import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './ExperienceCard.css';
import TagList from '../TagList/TagList'


  
const ExperienceCard = (props:{
  title:string,
  dateFrom:string,
  dateTo:string,
  description:string,
  tags:string[]
}) => {
  return (
    <div className='card-container'>
      <IonCard className="experience-card">
        <IonCardHeader>
          <IonCardTitle className="title">
            <span>{props.title}</span>
            <span>{props.dateFrom} - {props.dateTo}</span>
          </IonCardTitle>
          <IonCardSubtitle>
            <div className="card-text">
              <p>{props.description}</p>
            </div>
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
            <TagList data={props.tags}/>
        </IonCardContent>
      </IonCard>
    </div>    
  );
};

export default ExperienceCard;