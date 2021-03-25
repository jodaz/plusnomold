import * as React from 'react';
import { Route } from 'react-router-dom';
import { RecoverPassword } from './layout';

export default [
  //@ts-ignore
  <Route exact path="/recover-password" render={() => <RecoverPassword />} noLayout />,
  //@ts-ignore
];