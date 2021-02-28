import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Configuration from './pages/Configuration';

export default function Routes() {
   return(
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/config" component={Configuration} />
         </Switch>
      </BrowserRouter>
   );
}