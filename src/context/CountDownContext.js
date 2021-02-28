import { createContext, useState, useEffect, useContext } from 'react';
import { ChallengeContext } from './ChallengeContext';

export const CountDownContext = createContext({});

let countdownTimer;

export default function CountDownContextProvider({ children }) {
   const [time, setTime] = useState(0.1 * 60);
   const [hasFinished, setHasfinished] = useState(false); 
   const [isActive, setIsActive] = useState(false); 

   const minutes = Math.floor(time / 60);
   const seconds = time % 60;

   const { startChallenge } = useContext(ChallengeContext);

   function startCountDown() {
      setIsActive(true);
   }

   function resetCountDown() {
      setIsActive(false);
      setHasfinished(false);
      clearTimeout(countdownTimer);
      setTime(0.1 * 60);
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
         time
      }}>
         { children }
      </CountDownContext.Provider>
   );
}