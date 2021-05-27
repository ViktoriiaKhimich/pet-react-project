import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from './client/header/components/Header'
import ContactsPage from './pages/ContactsPage'
import AuthorizationPage from './pages/AuthorizationPage'
import TasksPage from './pages/TasksPage'
import HomePage from './pages/HomePage'

import PrivateRoute from './client/authorization/PrivateRoute'
import PublicRoute from './client/authorization/PublicRoute'

import { getCurrentUser } from './redux/authorization/operations'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  return (
    <>
      <Header />
      <Switch>
        <PublicRoute exact path='/contacts' component={ContactsPage} />
        <PublicRoute exact path='/authorization' component={AuthorizationPage} />
        <Route exact path='/' component={HomePage} />
        <PrivateRoute exact path='/tasks' redirectTo='/authorization' restricted component={TasksPage} />
      </Switch>
    </>
  );
}

export default App;
