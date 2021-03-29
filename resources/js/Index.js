import React from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource } from 'react-admin';
import { createBrowserHistory as createHistory } from 'history';
import spanishMessages from '@blackbox-vision/ra-language-spanish';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import dataProvider from './dataProvider';
import { Login, Layout } from './layout';
// Resources
import dashboard from './dashboard';
import payrolls from './payrolls';
import employees from './employees';
// Utils
const customHistory = createHistory();
import routes from './routes';

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
