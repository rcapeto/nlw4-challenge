import { useContext } from 'react';
import { CountDownContext } from '../../context/CountDownContext';
import './styles.css';

export default function CountDown() {
   const { 
      minutes, 
      seconds, 
      hasFinished, 
      isActive, 
      resetCountDown, 
      startCountDown, 
   } = useContext(CountDownContext);

   const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
   const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

   return(
      <div>
         <div className="countdown">
            <div>
               <span>{minuteLeft}</span>
               <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
               <span>{secondLeft}</span>
               <span>{secondRight}</span>
            </div>
         </div>

         { hasFinished ? (
            <button 
               disabled
               className="countdown-button"
            >
               Ciclo encerrado
            </button>
         ) : (
            <>
               { isActive ? (
                  <button 
                     type="button" 
                     className={`countdown-button active`} 
                     onClick={resetCountDown}
                  >
                     Abandonar ciclo
                  </button>
               ) : (
                  <button 
                     type="button" 
                     className="countdown-button"
                     onClick={startCountDown}
                  >
                     Iniciar um ciclo 
                  </button>
               )}
            </>
         )}
      </div>
   );
}