import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom'

// <C-w>o to close other windows

// Pages
import Home from './pages/Home'

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/search">
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}


export default App;
