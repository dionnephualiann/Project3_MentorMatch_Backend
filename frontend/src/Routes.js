import React, {PropTypes} from 'react';
import {Switch, Route} from 'react-router-dom';
import EventPage from './components/events/eventPage';
import ProfilePage from './components/profile/profile';





const Main = () => (
  // switch is a component from react-router
  <Switch>
    <Route path = '/events' component = {EventPage}></Route>
    <Route path = '/profile' component = {ProfilePage}></Route>
  </Switch>


)

export default Main;
