import { createContext, useState, useEffect } from 'react';

export const LoginContext = createContext({});

export default function LoginContextProvider({ children }) {
   const [currentUser, setCurrentUser] = useState(null);
   const [errorLogin, setErrorLogin] = useState(false);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const user = getUser();

      if(user) {
         setCurrentUser(user);
      }
   }, []);

   async function getUserInfo(username) {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if(data.message) {
         setErrorLogin(true);
         setLoading(false);
         return;
      }

      const user = { 
         image: data.avatar_url,
         name: data.name,
         username: data.login,
      }

      localStorage.setItem(':move.it:user', JSON.stringify(user));
      setLoading(false);
      setCurrentUser(user);
      setErrorLogin(false);
   }

   function getUser() {
      return JSON.parse(localStorage.getItem(':move.it:user'));
   }

   return(
      <LoginContext.Provider value={{ currentUser, getUserInfo, getUser, errorLogin, loading }}>
         { children }
      </LoginContext.Provider>
   );
}