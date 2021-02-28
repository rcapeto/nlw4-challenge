import { useContext } from 'react';

import { ChallengeContext } from '../../context/ChallengeContext';

import './styles.css';

export default function ChallengesCompleted() {
   const { completedChallenges } = useContext(ChallengeContext);

   return(
      <div className="challenges">
         <p>Desafios Completados</p>
         <span>{completedChallenges}</span>
      </div>
   );
}