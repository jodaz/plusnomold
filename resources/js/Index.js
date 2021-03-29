import React from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource } from 'react-admin';
import apiClient from 'ra-laravel-client';
import { createBrowserHistory as createHistory } from 'history';
import spanishMessages from '@blackbox-vision/ra-language-spanish';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { Login, Layout } from './layout';
// Resources
import dashboard from './dashboard';
import payrolls from './payrolls';
import employees from './employees';
// Utils
const customHistory = createHistory();
import routes from './routes';
const dataProvider = apiClient('http://localhost:8150/api');

const i18nProvider = polyglotI18nProvider(() => ({
  ...spanishMessages
}));

export default function App() {
  console.log(process.env);
  return (
    <Admin
      i18nProvider={i18nProvider}
      dataProvider={dataProvider}
      history={customHistory}
      dashboard={dashboard}
      loginPage={Login}
      layout={Layout}
      customRoutes={routes}
    >
      <Resource {...payrolls} />
      <Resource {...employees} />
    </Admin>
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
