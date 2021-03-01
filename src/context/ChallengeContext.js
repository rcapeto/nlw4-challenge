import { createContext, useState, useEffect, useContext, useCallback } from 'react';

import ModalLevelUp from '../components/ModalLevelUp';
import ModalTwitter from '../components/ModalTwitter';
import challenges from '../challenges.json';
import iconImg from '../assets/favicon.png';
import { LoginContext } from './LoginContext';

export const ChallengeContext = createContext({});

export default function ChallengeContextProvider({ children }) {
   const [level, setLevel] = useState(1);
   const [completedChallenges, setCompletedChallenges] = useState(0);
   const [showModal, setShowModal] = useState(false);
   const [showModalTwitter, setShowModalTwitter] = useState(false);
   const [activeChallange, setActiveChallenge] = useState(null);
   const [currentExperience, setCurrentExperience] = useState(0); 

   const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

   const { currentUser } = useContext(LoginContext);
   
   const getChallengeInfo = useCallback(() => {

      if(currentUser) {
         const data = JSON.parse(localStorage.getItem(`:move.it:${currentUser.username}`));

         if(!data) return;

         setLevel(data.level);
         setCurrentExperience(data.currentExperience);
         setCompletedChallenges(data.completedChallenges);
      }
   }, [currentUser]);

   useEffect(() => {
      Notification.requestPermission();
      getChallengeInfo();
   }, [getChallengeInfo]);

   useEffect(() => {
      if(currentUser) {
         const user_informations = {
            level,
            currentExperience,
            completedChallenges,
         }
   
         localStorage.setItem(`:move.it:${currentUser.username}`, JSON.stringify(user_informations));
      }
   }, [level, currentExperience, completedChallenges, currentUser]);


   function levelUp() {
      setLevel(level + 1);
      setShowModal(true);
   }

   function startChallenge() {
      const randomNumber = Math.floor(Math.random() * challenges.length);
      const challenge = challenges[randomNumber];

      if(Notification.permission === 'granted') {
         const notification = new Notification('Novo Desafio!', {
            icon: iconImg,
            body: `Valendo: ${challenge.amount}xp!`         
         });

         setTimeout(() => notification.close(), 2000);
      }

      setActiveChallenge(challenge);
   }

   function closeModal() {
      setShowModal(false);
   }

   function shareOnTwitter() {
      setShowModalTwitter(true);
   }

   function closeModalTwitter() {
      setShowModalTwitter(false);
   }

   function completeChallenge() {
      if(!activeChallange) return;

      const { amount } = activeChallange;

      let xp = currentExperience + amount;

      if(xp >= experienceToNextLevel) {
         levelUp();
         xp = xp - experienceToNextLevel;
      }

      setCurrentExperience(xp);
      setActiveChallenge(null);
      setCompletedChallenges(completedChallenges + 1);
   }

   function resetChallenge( ){
      setActiveChallenge(null);
   }

   return(
      <ChallengeContext.Provider value={{
         level,
         completedChallenges,
         closeModal,
         activeChallange,
         startChallenge,
         currentExperience,
         completeChallenge,
         resetChallenge,
         experienceToNextLevel,
         shareOnTwitter,
         closeModalTwitter
      }}>
         { children }
         { showModal && <ModalLevelUp /> }
         { showModalTwitter && <ModalTwitter /> }
      </ChallengeContext.Provider>
   );
}