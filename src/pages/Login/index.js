import { AiOutlineArrowRight } from 'react-icons/ai';
import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/Logo.png';
import githubLogin from '../../assets/Github.png';
import { LoginContext } from '../../context/LoginContext';

import './styles.css';

export default function Login() {
   const [github_username, setGithubUsername] = useState('');
   const { getUserInfo, getUser, errorLogin, loading } = useContext(LoginContext);
   const history = useHistory();

   useEffect(() => {
      if(loading) return;
      if(getUser()) history.push('/dashboard');
   }, [getUser, history, loading]);

   async function handleSubmit(e) {
      e.preventDefault();

      if(!github_username) return;

      try {
         await getUserInfo(github_username);
         history.push('/dashboard');

      } catch(err) {
         console.error(err);
      }
   }

   return(
      <div className="login-container">
         <form className="form-login" onSubmit={handleSubmit}>
            <img src={logoImg} alt="Logo" className="logo"/>

            <div className="form-content">
               <h2>Bem-vindo</h2>

               <div className="github-login">
                  <img src={githubLogin} alt="Github Logo"/>
                  <p>Faça o seu login com GitHub para começar</p>
               </div>

               <div className="input-block">
                  <input 
                     type="text" 
                     placeholder="Digite seu username"
                     value={github_username}
                     onChange={e => setGithubUsername(e.target.value)}
                  />
                  <button 
                     className={github_username ? 'green': ''}
                  >
                     <AiOutlineArrowRight size={18} color="#FFF"/>
                  </button>
               </div>

               {
                  errorLogin && (<span>Por favor, digite um usuário válido!</span>)
               }
            </div>
         </form>
      </div>
   );
}