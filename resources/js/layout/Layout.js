import * as React from 'react';
import { Layout, AppBar, Menu } from 'react-admin';
import theme from './theming';
// import AppBar from './AppBar';
// import Menu from './Menu';
import { createMuiTheme } from '@material-ui/core/styles';

export default (props) => {
  return (
    <Layout
      {...props}
      appBar={AppBar}
      menu={Menu}
      theme={createMuiTheme(theme)}
    />
  );
};