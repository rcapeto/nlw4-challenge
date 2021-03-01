import { useState, useContext, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { LoginContext } from '../../context/LoginContext';
import { ChallengeContext } from '../../context/ChallengeContext';
import Sidebar from '../../components/Sidebar';
import UserTable from '../../components/UserTable';

import './styles.css';

export default function Leaderboard() {
   const { currentUser } = useContext(LoginContext);
   const { level, completedChallenges, currentExperience } = useContext(ChallengeContext);
   const history = useHistory();

   const [users, setUsers] = useState([]);

   const handleGetUsers = useCallback(() => {
      const usersTest = [
         {
            username: currentUser.username,
            name: currentUser.name,
            completedChallenges,
            currentExperience,
            level
         },
         {
            username: 'diego3g',
            name: 'Diego Fernandes',
            completedChallenges: 0,
            currentExperience: 0,
            level: 1
         }
      ];

      setUsers(usersTest);
   }, [currentExperience, currentUser, level, completedChallenges]);

   useEffect(() => {
      if(!currentUser) history.push('/');
      else handleGetUsers();
      
   }, [currentUser, history, handleGetUsers]);

   return(
      <div className="leaderboard">
         <Sidebar currentPage="leaderboard"/>

         <div className="leaderboard-content">
            <h2>Leaderboard</h2>

            <table>
               <thead>
                  <tr>
                     <th>Posição</th>
                     <th>Usuário</th>
                     <th>Desafios</th>
                     <th>Experiência</th>
                  </tr>
               </thead>

               <tbody>
                  {
                     users.length > 0 && users.map((user, index) => (
                        <UserTable user={user} position={(index + 1)}/>
                     ))
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
}