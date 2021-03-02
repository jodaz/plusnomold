import React from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource } from 'react-admin';
import apiClient from 'ra-laravel-client';
import { createBrowserHistory as createHistory } from 'history';
const customHistory = createHistory();
const dataProvider = apiClient('http://201.249.178.134:8150/api');
import spanishMessages from '@blackbox-vision/ra-language-spanish';
import polyglotI18nProvider from 'ra-i18n-polyglot';

// Resources
import dashboard from './dashboard';
import payrolls from './payrolls';
import employees from './employees';

const i18nProvider = polyglotI18nProvider(() => ({
  ...spanishMessages
}));

export default function App() {
  return (
    <Admin
      i18nProvider={i18nProvider}
      dataProvider={dataProvider}
      history={customHistory}
      dashboard={dashboard}
    >
      <Resource {...payrolls} />
      <Resource {...employees} />
    </Admin>
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
