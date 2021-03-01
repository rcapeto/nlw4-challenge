import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/Logo.png';
import { LoginContext } from '../../context/LoginContext';

import './styles.css';

export default function Home() {
   const history = useHistory();
   const { currentUser } = useContext(LoginContext);

   useEffect(() => {
      if(currentUser) {
         history.push('/dashboard');
      } else {
         history.push('/login');
      }
   }, [currentUser, history]);

   return(
      <div className="home-container">
         <img src={logoImg} alt="Moveit"/>
      </div>
   );
}