import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { LoginContext } from '../../context/LoginContext';

import Sidebar from '../../components/Sidebar';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import ChallengesCompleted from '../../components/ChallengesCompleted';
import CountDown from '../../components/CountDown';
import ChallengeBox from '../../components/ChallengeBox';

import './styles.css';

export default function Dashboard() {
   const history = useHistory();
   const { currentUser } = useContext(LoginContext);

   useEffect(() => {
      if(!currentUser)
         history.push('/login');
   }, [currentUser, history]);

   return(
      <div className="dashboard">
         <Sidebar currentPage="dashboard"/>

         <div className="dashboard-content">
            <ExperienceBar />

            <section>
               <div className="left">
                  <Profile />
                  <ChallengesCompleted />
                  <CountDown />
               </div>
               <div className="right">
                  <ChallengeBox />
               </div>
            </section>
         </div>
      </div>
   );
}