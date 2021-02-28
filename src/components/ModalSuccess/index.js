import { BsCheck } from 'react-icons/bs';

import closeImg from '../../assets/close.png'

import './styles.css';

export default function ModalSuccess({ message, close }) {
   return(
      <div className="overlay">
         <div className="modal">
            <div className="modal-content">
               <div className="icon">
                  <BsCheck size={35} color="#fff"/>
               </div>

               <h5>{message}</h5>
               <h6>com sucesso!</h6>

            </div>
            
            <button type="button" onClick={close} className="close-button">
               <img src={closeImg} alt="Fechar"/>
            </button>
         </div>
      </div>
   );
}