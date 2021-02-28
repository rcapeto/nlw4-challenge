import './styles.css';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { ChallengeContext } from '../../context/ChallengeContext';
import levelImg from '../../assets/Up.svg';

export default function Profile() {
   const { currentUser } = useContext(LoginContext);
   const { level } = useContext(ChallengeContext);

   return(
      <div className="profile">
         <img src={currentUser?.image} alt={currentUser?.name}/>

         <div>
            <h2>{currentUser?.name}</h2>

            <p>
               <img src={levelImg} alt="Level"/>
               Level {level}
            </p>
         </div>
      </div>
   );
}