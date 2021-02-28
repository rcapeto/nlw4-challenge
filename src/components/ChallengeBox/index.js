import { useContext } from 'react';

import { ChallengeContext } from '../../context/ChallengeContext';
import { CountDownContext } from '../../context/CountDownContext';
import plusImg from '../../assets/plus.png';
import bodyImage from '../../assets/peso.png';
import eyeImage from '../../assets/eye.svg';

import './styles.css';

export default function ChallengeBox() {
   const { activeChallange, completeChallenge, resetChallenge } = useContext(ChallengeContext);
   const { resetCountDown } = useContext(CountDownContext);

   function handleResetChallengeAndCountDown() {
      resetChallenge();
      resetCountDown();
   }

   function handleCompleteChallenge() {
      completeChallenge();
      resetCountDown();
   }

   return(
      <div className="challenge-box">
         {
            activeChallange ? (
               <div className="challenge-box-completed-challenge">
                  <div className="challenge-box-content">
                     <h2>Ganhe {activeChallange.amount} xp</h2>

                     <div className="challenge-description">
                        <img src={
                           activeChallange === 'body' ? bodyImage : eyeImage
                        } alt="Força"/>
                        <h3>Exercite-se</h3>
                        <p>
                           {activeChallange.description}
                        </p>
                     </div>
                  </div>

                  <div className="challenge-buttons">
                     <button className="button fail" onClick={handleResetChallengeAndCountDown}>Falhei</button>
                     <button className="button success" onClick={handleCompleteChallenge}>Completei</button>
                  </div>
               </div>
            ) : (
               <div className="challenge-box-uncompleted">
                  <h3>Inicie um ciclo para receber desafios a serem completados</h3>

                  <div className="challenge-box-flex">
                     <img src={plusImg} alt="Imagem"/>
                     <p>Complete-os e ganhe experiência e avance de level.</p>
                  </div>
               </div>
            )
         }
      </div>
   );
}