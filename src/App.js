import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop-component';
import Header from './components/header/header-component';
import LoginLogoutPage from './pages/login-logout/login-logout-component';
import CheckoutPage from './pages/checkout/checkout-component';

import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user-selectors';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){ 
  
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => { 
    //   if (userAuth){
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //           id: snapshot.id,
    //           ...snapshot.data()
    //         })
    //     });
    //   }
      
    //   setCurrentUser(userAuth );
      
      //addCollectionAndDocuments('collections', collectionArr.map(({ title, items }) => ({ title, items})));
    
   // });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route exact path='/checkout' component={ CheckoutPage }/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : <LoginLogoutPage/> }/>
        </Switch>
      </div>
    ); 
  }

  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(App);
