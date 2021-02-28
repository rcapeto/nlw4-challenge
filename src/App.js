import './global.css';
import Routes from './routes';

import AppContextProvider from './context';

function App() {
  return(
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
}

export default App;
