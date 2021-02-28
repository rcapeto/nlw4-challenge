import { useContext, useRef, useState } from 'react';
import * as htmlFor from 'html-to-image';

import { ChallengeContext } from '../../context/ChallengeContext';
import closeImg from '../../assets/close.png';
import logoImg from '../../assets/logo-purple.png';
import ModalSuccess from '../../components/ModalSuccess';
import ModalError from '../../components/ModalError';

import './styles.css';


export default function ModalTwitter() {
   const { level, completedChallenges, currentExperience, closeModalTwitter } = useContext(ChallengeContext);
   const [showSuccessModal, setShowSuccessModal] = useState(false);
   const [showErrorModal, setShowErrorModal] = useState(false);

   const modalContentRef = useRef();

   function handleDownload() {
      htmlFor.toPng(modalContentRef.current, {
         backgroundColor: '#fff',
         quality: 1,
         style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
         }
      }).then(dataUrl => {
         const tagA = document.createElement('a');

         tagA.download = 'certificado-move.it.png';
         tagA.href = dataUrl;
         tagA.click();

         setShowSuccessModal(true);

      }).catch(err => {
         console.error(err);
         setShowErrorModal(true);
      });
   }

   function closeAllModals() {
      setShowSuccessModal(false);
      closeModalTwitter();
   }

   function closeErrorModal() {
      setShowErrorModal(false);
   }
 
   return(
      <div className="overlay">
         <div className="modal">
            <div className="modal-twitter-content" ref={modalContentRef}>
               <div className="content-left">
                  <header>
                     <span>{level}</span>
                  </header>

                  <h3>Avancei para o próximo level</h3>
               </div>
               <div className="content-right">
                  <div className="content-block">
                     <h3>Desafios</h3>
                     <p><span>{completedChallenges}</span> completados</p>
                  </div>
                  <div className="content-block">
                     <h3>Experiência</h3>
                     <p><span>{currentExperience}</span> xp</p>
                  </div>

                  <img src={logoImg} alt="Move it"/>
               </div>
            </div>
               <button type="button" onClick={closeModalTwitter} className="close-button">
                  <img src={closeImg} alt="Fechar"/>
               </button>

               <button type="button" onClick={handleDownload} className="download-button">
                  Download
               </button>
         </div>

         { showSuccessModal && <ModalSuccess message="Certificado salvo" close={closeAllModals}/>}
         { showErrorModal && <ModalError message="Ops! Ocorreu um erro!" close={closeErrorModal}/>}
      </div>
   );
}