import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import NewTool from './pages/NewTool';
import UpdateTool from './pages/UpdateTool';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/tools" component={NewTool} />
      <Route exact path="/tool/:id" component={UpdateTool} />
    </Switch>
  );
}
