import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/Logo.png';
import { LoginContext } from '../../context/LoginContext';

import './styles.css';

export default function Home() {
   const history = useHistory();
   const { getUser } = useContext(LoginContext);

   useEffect(() => {
      if(getUser()) {
         history.push('/dashboard');
      } else {
         history.push('/login');
      }
   }, [getUser, history]);

   return(
      <div className="home-container">
         <img src={logoImg} alt="Moveit"/>
      </div>
   );
}