import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from './client/header/components/Header'
import ContactsPage from './pages/ContactsPage'
import AuthorizationPage from './pages/AuthorizationPage'
import TasksPage from './pages/TasksPage'
import RewardsPage from './pages/RewardsPage'
// import HomePage from './pages/HomePage'


import { getCurrentUser } from './redux/authorization/operations'
import PlanningPage from './pages/PlanningPage/PlanningPage';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/contacts' component={ContactsPage} />
        <Route exact path='/authorization' component={AuthorizationPage} />
        {/* <Route exact path='/' component={HomePage} /> */}
        <Route exact path='/' component={TasksPage} />
        <Route exact path='/planning' component={PlanningPage} />
        <Route exact path='/rewards' component={RewardsPage} />
      </Switch>
    </>
  );
}

export default App;
