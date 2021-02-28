import ChallengeContextProvider from './ChallengeContext';
import CountDownContextProvider from './CountDownContext';
import LoginContextProvider from './LoginContext';

export default function AppContextProvider({ children }) {
   return(
      <LoginContextProvider>
         <ChallengeContextProvider>
            <CountDownContextProvider>
               { children }
            </CountDownContextProvider>
         </ChallengeContextProvider>
      </LoginContextProvider>
   );
}