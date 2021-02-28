import './styles.css';
import { ChallengeContext } from '../../context/ChallengeContext';
import { useContext } from 'react';

export default function ChallengesCompleted() {
   const { completedChallenges } = useContext(ChallengeContext);

   return(
      <div className="challenges">
         <p>Desafios Completados</p>
         <span>{completedChallenges}</span>
      </div>
   );
}