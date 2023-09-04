import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './ExperienceCard.css';
import TagList from '../TagList/TagList'

const ExperienceCard = (props:{
  title:string,
  dateFrom:string,
  dateTo:string,
  description:string,
  tags:string[],
  link:string | null,
  onMouseEnter?:any,
  onMouseLeave?:any 

}) => {
  return (
      <div className='card-container'>
        <div className='screen-bg'>
          <div></div>
        </div>
        <span className='date'>{props.dateFrom} - {props.dateTo}</span>
        <a style={{textDecoration: "none", pointerEvents: props.link ? "initial" : "none"}} href={props.link || ""} target="_blank" rel="noopener noreferrer">
        <IonCard className="experience-card" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
          <IonCardHeader>
            <IonCardTitle className="card-title">
              <span className='title'>{props.title}</span>
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
        </a>
      </div>    
  );
};

export default ExperienceCard;