import { createContext, useState, useEffect, useContext, useCallback } from 'react';

import { ChallengeContext } from './ChallengeContext';
import { LoginContext } from './LoginContext';

export const CountDownContext = createContext({});

let countdownTimer;

export default function CountDownContextProvider({ children }) {
   const [mainTime, setMainTime] = useState(0.1);
   const [time, setTime] = useState(0.1 * 60);
   const [hasFinished, setHasfinished] = useState(false); 
   const [isActive, setIsActive] = useState(false); 

   const minutes = Math.floor(time / 60);
   const seconds = time % 60;

   const { startChallenge } = useContext(ChallengeContext);
   const { currentUser } = useContext(LoginContext);

   const getCountDownInfo = useCallback(() => {
      if(currentUser) {
         const localStorageTime = localStorage.getItem(`:move.it:${currentUser.username}:mainTime`);

         if(!localStorageTime) {
            setMainTime(0.1);
            setTime(0.1 * 60);
         } else {
            setMainTime(+localStorageTime);
            setTime(+localStorageTime * 60);
         }
      }
   }, [currentUser]);

   useEffect(() => {
      getCountDownInfo();
   }, [mainTime, getCountDownInfo]);

   function startCountDown() {
      setIsActive(true);
   }

   function changeTime(newTime) {
      localStorage.setItem(`:move.it:${currentUser.username}:mainTime`, String(newTime));
      setMainTime(newTime);
   }  

   function resetCountDown() {
      setIsActive(false);
      setHasfinished(false);
      clearTimeout(countdownTimer);
      setTime(mainTime * 60);
   }

   function getMainTime() {
      return mainTime;
   }

   useEffect(() => {
      if(isActive && time > 0) {
         countdownTimer = setTimeout(() => {
            setTime(time - 1);
         }, 1000);
      } else if(isActive && time === 0) {
         setHasfinished(true);
         setIsActive(false);
         startChallenge();
      }
   }, [isActive, time, startChallenge]);

   return(
      <CountDownContext.Provider value={{
         minutes,
         seconds,
         hasFinished,
         isActive,
         startCountDown,
         resetCountDown,
         changeTime,
         getMainTime
      }}>
         { children }
      </CountDownContext.Provider>
   );
}