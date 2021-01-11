import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Homepage, Auth, NotesApi, CoinsApi, Nav } from '../imports';

const AppRoutes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/auth" component={Auth} />
        <Route path="/api/notes" component={NotesApi} />
        <Route path="/api/coins" component={CoinsApi} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
