import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './client/header/components/Header'
import ContactsPage from './pages/ContactsPage'
import AuthorizationPage from './pages/AuthorizationPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/contacts' component={ContactsPage} />
        <Route exact path='/authorization' component={AuthorizationPage} />
        <Route exact path='/tasks' component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
