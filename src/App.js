import React from 'react';
import { Nav } from './Components/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { About} from './Pages/About';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';

import { Alert } from './Components/Alert';

import { AlertState } from './Context/Alert/AlertState';
import { GithubState } from './Context/github/githubState';

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Nav />
          <div className="container pt-4">
            <Alert alert={{ text: 'Test alert' }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
