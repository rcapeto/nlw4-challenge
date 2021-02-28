import { BsGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo-menu.png';
import homeImg from '../../assets/home.png';
import homeActiveImg from '../../assets/home-active.png';
import awardImg from '../../assets/award.png';
import awardActiveImg from '../../assets/award-active.png';

import './styles.css';

export default function Sidebar({ currentPage }) {
   return(
      <div className="sidebar">
         <div className="sidebar-logo">
            <img src={logoImg} alt="Logo"/>
         </div>

         <div className="sidebar-nav">
            <Link to="/dashboard" className={currentPage === 'dashboard' ? 'active' : ''}>
               <img 
                  src={currentPage === 'dashboard' ? homeActiveImg : homeImg } 
                  alt="Dashboard"
               />
            </Link>

            <Link to="/leaderboard" className={currentPage === 'leaderboard' ? 'active' : ''}>
               <img 
                  src={currentPage === 'leaderboard' ? awardActiveImg : awardImg } 
                  alt="awardImg"
               />
            </Link>

            <Link to="/config" className={currentPage === 'config' ? 'active' : ''}>
               <BsGearFill 
                  size={25} 
                  color={currentPage === 'config' ?  '#5965e0' : '#6766'}
               />
            </Link>
         </div>

         <div/>
      </div>
   );
}  