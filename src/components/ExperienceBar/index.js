import { useContext } from 'react';

import { ChallengeContext } from '../../context/ChallengeContext';

import './styles.css';

export default function ExperienceBar() {
   const { experienceToNextLevel, currentExperience } = useContext(ChallengeContext);
   const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

   return(
      <div className="bar-container">
         <span>0xp</span>
         <div className="bar">

            <div className="bar-green"  style={{ width: `${percentToNextLevel}%` }}></div>

            <span className="current-experience" style={{ left: `${percentToNextLevel}%` }}>{currentExperience}xp</span>
         </div>
         <span>{experienceToNextLevel}xp</span>
      </div>
   );
}