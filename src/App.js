import React from 'react';
import './App.scss';
import Homepage from './pages/homepage/homepage.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div></BrowserRouter>
  );
}

export default App;
