import levelImg from '../../assets/Up.svg';

import './styles.css';

export default function UserTable({ user, position }) {
  return(
   <tr>
      <td className="position">{position}</td>
      <td>
         <div className="profile">
            <img src={`https://github.com/${user.username}.png`} alt={user.name}/>

            <div className="profile-info">
               <p>{user.name}</p>

               <div className="level">
                  <img src={levelImg} alt="Level"/>
                  <h6>Level {user.level}</h6>
               </div>
            </div>

         </div>
      </td>
      <td>
         <p><span>{user.completedChallenges}</span> completados</p>
      </td>
      <td>
         <p><span>{user.currentExperience}</span> xp</p>
      </td>
   </tr>
  );
}