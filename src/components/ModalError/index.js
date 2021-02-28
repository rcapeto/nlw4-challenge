import { AiOutlineClose } from 'react-icons/ai';

import closeImg from '../../assets/close.png';

export default function ModalError({ message, close }) {
   return(
      <div className="overlay">
         <div className="modal">
            <div className="modal-content">
               <div className="icon error">
                  <AiOutlineClose size={35} color="#fff"/>
               </div>

               <h5>{message}</h5>
               <h6>Tente novamente</h6>
            </div>
            
            <button type="button" onClick={close} className="close-button">
               <img src={closeImg} alt="Fechar"/>
            </button>
         </div>
      </div>
   );
}