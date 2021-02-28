import { useState, useContext, useEffect } from 'react';

import { CountDownContext } from '../../context/CountDownContext';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import Sidebar from '../../components/Sidebar';
import ModalSuccess from '../../components/ModalSuccess';

import './styles.css';

export default function Configuration() {
   const [inputTime, setInputTime] = useState('');
   const [showModal, setShowModal] = useState(false);
   const { changeTime, getMainTime } = useContext(CountDownContext);
   const { currentUser } = useContext(LoginContext);

   const history = useHistory();

   useEffect(() => {
      if(!currentUser) {
         history.push('/');
      }

      setInputTime(getMainTime());

   }, [currentUser, history, getMainTime]);

   function handleSaveConfig() {
      if(!inputTime) return;
      changeTime(+inputTime);
      setShowModal(true);
   }

   function handleCloseModal() {
      setShowModal(false);
      history.push('/dashboard');
   }

   return(
      <div className="configuration">
         <Sidebar currentPage="config"/>
         
         <div className="config-content">
            <h2>Configurações</h2>
            
            <div className="config-items">
               <div className="block">
                  <label htmlFor="time_input">Tempo do ciclo:</label>

                  <div className="config-input">
                     <input 
                        type="number"
                        className="config-input"
                        maxLength={2}
                        value={inputTime}
                        onChange={event => setInputTime(event.target.value)}
                        id="time_input"
                        min="0"
                        step="0.1"
                     />
                     <p>Minutos</p>
                  </div>
               </div>

              <div className="button-container">
                 <button onClick={handleSaveConfig}>Salvar</button>
              </div>
            </div>
         </div>

         { showModal && <ModalSuccess message="Configurações salvas" close={handleCloseModal}/> }
      </div>
   );
}