import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Detail from '~/pages/Detail';
import Profile from '~/pages/Profile';
import Edit from '~/pages/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/detail/:meetupId" component={Detail} isPrivate />
      <Route path="/edit/:meetupId" component={Edit} isPrivate />
      <Route path="/create" component={Edit} isPrivate />
    </Switch>
  );
}
