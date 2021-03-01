import React from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource } from 'react-admin';
import apiClient from 'ra-laravel-client';
import { createBrowserHistory as createHistory } from 'history';

const customHistory = createHistory();
const dataProvider = apiClient('http://201.249.178.134:8150/api');
// Resources
import payrolls from './payrolls';
import employees from './employees';

export default function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      history={customHistory}
    >
      <Resource {...payrolls} />
      <Resource {...employees} />
    </Admin>
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
