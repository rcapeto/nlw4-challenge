import Routes from './routes';
import './global.css';

import AppContextProvider from './context';

function App() {
  return(
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
}

export default App;
