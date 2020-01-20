import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from "../src/firebase/firebase.utils";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      else {
        this.setState({ currentUser: userAuth });
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInSignUpPage} />
          </Switch>
        </div>
      </BrowserRouter >
    )
  }
}