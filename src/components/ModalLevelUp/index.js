import './styes.css';
import { ChallengeContext } from '../../context/ChallengeContext';
import { useContext } from 'react';
import closeImg from '../../assets/close.png';
import twitterImg from '../../assets/twitter.png';
import numberBg from '../../assets/bg-number.png';

export default function ModalLevelUp() {
   const { level, closeModal } = useContext(ChallengeContext);

   return(
      <div className="overlay">
         <div className="modal">
            <div className="modal-content">
               <header>
                  <img src={numberBg} alt="Fundo Número"/>
                  <span>{level}</span>
               </header>
               <strong>Parabéns!</strong>
               <p>Você alcançou um novo level.</p>
            </div>

            <div className="share-twitter">
               <p>Compartilhar no Twitter</p>
               <img src={twitterImg} alt="Twitter Logo"/>
            </div>

            <button type="button" onClick={closeModal} className="close-button">
               <img src={closeImg} alt="Fechar"/>
            </button>
         </div>
      </div>
   );
}