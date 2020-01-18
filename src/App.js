import React from 'react';
import './App.scss';
import Homepage from './pages/homepage/homepage.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Hats = () => (
  <h1>Hats Page</h1>
);


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop/hats" component={Hats} />
        </Switch>


      </div></BrowserRouter>
  );
}

export default App;
