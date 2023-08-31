import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, ScrollDetail} from '@ionic/react';
import ExperienceCard from '../components/ExperienceCard/ExperienceCard';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Vignette from '../components/Vignette/Vignette';
import './Home.css';

let currentY = 0

function onScroll(event: CustomEvent<ScrollDetail>){
  currentY = event.detail.currentY
}

const Home: React.FC = () => {
  return (
    <IonPage 
    >
      <div className='sliding-background'></div>
      <div className='sliding-background-reverse'></div>
      <IonContent fullscreen 
        className="root" 
        scrollEvents={true}
        onIonScroll={onScroll}
      >
        <Vignette></Vignette>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonGrid className='grid'>
          <IonRow>
            <IonCol>
              <div>
                <div className="fixed-container">
                  <h1>
                    Jon Carlo Guiriba
                  </h1>
                  <h2><b className="jobtitle-highlight">Senior Engineer</b> at <b>Quest Finance</b></h2>
                  <h4>
                    I enjoy crafting solutions to all kinds of scenarios. Building websites, apps, mini-games, and digital services since 2015.
                  </h4>
                  <ul>
                    <li>
                      <ProgressBar label="Typescript" level="Expert" color="gold" value="100%">
                      </ProgressBar>
                    </li>
                    <li>
                      <ProgressBar label="Angular" level="Expert" color="gold" value="100%">
                      </ProgressBar>
                    </li>
                    <li>
                      <ProgressBar label="React" level="Beginner" color="gold" value="30%">
                      </ProgressBar>
                    </li>
                    <li>
                      <ProgressBar label="CSS" level="Capable" color="gold" value="60%">
                      </ProgressBar>
                    </li>
                    <li>
                      <ProgressBar label="AWS" level="Capable" color="gold" value="60%">
                      </ProgressBar>
                    </li>
                  </ul>

                </div>
              </div>
            </IonCol>
            <IonCol>
              <div>
                <div>
                  <h3 className='section-divider'>Work</h3>
                </div>
                <div>
                  <ExperienceCard 
                    icon = "assets/imgs/netzwelt_icon.png"
                    title="Fullstack Developer · Netzwelt"
                    tags={["PHP", "Laravel", "Anguler", "MySql", "JQuery"]}
                    description="Maintenance and full-stack development of a web-based product inventory management for the FortuneGlobe company. 
                      The system is for management and storage of clothing inventory local and online. It accomodates multiple client companies."
                    dateFrom="Feb 2016"
                    dateTo="Oct 2016"
                  />
                  <ExperienceCard 
                    icon = "assets/imgs/pccw_icon.jpg"
                    title="Fullstack Developer · Pccw Solutions Inc."
                    tags={["Java", "Struts2", "MySql", "JQuery"]}
                    description="Worked with a team to deliver support and full-stack development for a Hong Kong based project named Tap&Go. 
                      Activities include responding to "
                    dateFrom="Oct 2016"
                    dateTo="Feb 2018"
                  />
                  <ExperienceCard 
                    icon = "assets/imgs/netzwelt_icon.png"
                    title="Fullstack Developer · MarketConnect Inc."
                    tags={["Nodejs", "Angular", "Ionic", "Android", "Phaser", "Firebase"]}
                    description="Development of multiple 2D Games, Mobile Apps, Websites and Webapps"
                    dateFrom="Feb 2018"
                    dateTo="Nov 2018"
                  />
                  <ExperienceCard 
                    icon = "assets/imgs/netzwelt_icon.png"
                    title="Senior Fullstack Developer · Hiraya Water"
                    tags={["PHP","Nodejs", "Angular", "Ionic", "Android", "AWS", "Firebase", "MySql"]}
                    description="Development and maintenance of the RTap System. A water facility enhancement system that makes sure water pressure is optimized to save unnecessary expenditures concerning its operation"
                    dateFrom="Aug 2018"
                    dateTo="Sep 2021"
                  />
                  <ExperienceCard 
                    icon = "assets/imgs/netzwelt_icon.png"
                    title="Senior Backend Engineer · Quest Finance"
                    tags={["PHP","Nodejs", "Angular", "Ionic", "Android", "AWS", "Firebase", "MySql"]}
                    description="development and maintenance of the QuestFinance system. A brokerage system that enables easy application and processing of loans from quote, application to funding approval. The system was praised for its smooth UX for applicants and loan officer/analyst alike"
                    dateFrom="Sep 2021"
                    dateTo="Jul 2023"
                  />
                </div>
                <div>
                  <h3 className='section-divider'>Projects</h3>
                </div>
                <div>
                  <ExperienceCard 
                    title="Woomen.ph"
                    tags={["Laravel", "Heroku", "Paypal", "MySql"]}
                    description="Worked with a team as a full-stack developer to deliver a Laravel Ecommerce Project. 
                    Responsible for system data handling, setting up VCS , UI enhancements, feature implementation and planning, 
                    server deployment, setup payment gateway, team coordination."
                    dateFrom="Aug 2017"
                    dateTo="Oct 2017"
                  />
                  <ExperienceCard 
                    title="2080"
                    tags={["Ionic", "Firebase", "Google API", "Android"]}
                    description="An app for department communication. Functions as a billboard to keep all users updated with tasks and events. Published in web and android.."
                    dateFrom="Aug 2017"
                    dateTo="Oct 2017"
                  />
                  <ExperienceCard 
                    title="Nintendo Switch Eshop Unofficial"
                    tags={["Ionic", "Firebase", "Google API", "Android"]}
                    description="A personal side project made using Ionic and Firebase. The app shows updated NS Eshop store listing for comfortable viewing."
                    dateFrom="Aug 2017"
                    dateTo="Oct 2017"
                  />
                  <ExperienceCard 
                    title="Console Nation (Beta)"
                    tags={["Ionic", "Firebase", "Google API", "Android"]}
                    description="Made with Ionic and Firebase. The app lets people trade PS4, XBOX1, and Nintendo Switch games with other people. Marketplace monetization is planned as it gains traction."
                    dateFrom="Aug 2017"
                    dateTo="Oct 2017"
                  />
                  <ExperienceCard 
                    title="Personal Assistant (private)"
                    tags={["Ionic", "Firebase", "Google API", "Android"]}
                    description="Made with ElectronReact . My personal app that automates my day to day tasks. Currently integrated with Git, Trello, AWS, Gmail, Gchat. Planning to add more integrations. After refinement, might open source it or ready for monetization."
                    dateFrom="Aug 2017"
                    dateTo="Oct 2017"
                  />
                  <ExperienceCard 
                    title="AutoDownload/Edit/Upload with Twitch/Youtube"
                    tags={["Ionic", "Firebase", "Google API", "Android"]}
                    description="Made with ElectronReact and Selenium. The app lets me automatically download, edit and upload with one click."
                    dateFrom="Aug 2017"
                    dateTo="Oct 2017"
                  />
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
