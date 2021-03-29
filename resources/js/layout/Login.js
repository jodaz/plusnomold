import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CircularProgress,
  TextField,
} from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Notification, useRedirect } from 'react-admin';
import theme from './theming';
import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0296B0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  card: {
    minWidth: 500,
    height: 700,
    borderRadius: '0'
  },
  avatar: {
    margin: '1em',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    width: theme.spacing(32),
    height: theme.spacing(32),
    backgroundColor: 'transparent',
  },
  hint: {
    marginTop: '1em',
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.grey[500],
  },
  form: {
    padding: '0 1em 1em 1em',
  },
  input: {
    marginTop: '1em',
  },
  actions: {
    padding: '0 1em 1em 1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textMessage: {
    textAlign: 'center'
  },
  button: {
    borderRadius: '0',
    padding: '0.5em 2em',
    margin: '1em',
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.main
  },
  content: {
    height: '300',
    maxWidth: '300'
  }
}));

const renderInput = ({
  meta: { touched, error } = { touched: false, error: undefined },
  input: { ...inputProps },
  ...props
}) => (
  <TextField
    error={!!(touched && error)}
    helperText={touched && error}
    {...inputProps}
    {...props}
    fullWidth
  />
);

const Login = () => {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const redirect = useRedirect();

  const handleSubmit = (data) => {
    setLoading(true);
    axios.get('/sanctum/csrf-cookie').then(res => {
      axios.post('/api/login', data).then(res => {
        redirect('/dashboard');
      })
    })
    setLoading(false);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Ingrese su correo electrónico";
    }
    if (!values.password) {
      errors.password = "Ingrese su contraseña";
    }
    return errors;
  };

  return (
    <Form
      onSubmit={handleSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <div className={classes.main}>
            <Card className={classes.card}>
              <div className={classes.avatar}>
                <img src={`${process.env.PUBLIC_URL}/logo.png`} className={classes.icon}/>
              </div>
              <div className={classes.textMessage}>
                <Typography variant="h5" gutterBottom>
                  Inicio de sesión
                </Typography>
              </div>
              <div className={classes.form}>
                <div className={classes.input}>
                  <Field
                    autoFocus
                    name="email"
                    // @ts-ignore
                    component={renderInput}
                    label="Correo electrónico"
                    disabled={loading}
                  />
                </div>
                <div className={classes.input}>
                  <Field
                    name="password"
                    // @ts-ignore
                    component={renderInput}
                    label="Contraseña"
                    type="password"
                    disabled={loading}
                  />
                </div>
              </div>
              <CardActions className={classes.actions}>
                {/* @ts-ignore */}
                <Link to="/recover-password" variant="body2" style={{ textDecoration: 'none' }}>
                  {"¿Olvidaste tu contraseña?"}
                </Link>

                <Button
                  variant="contained"
                  type="submit"
                  color="secondary"
                  disabled={loading}
                  className={classes.button}
                >
                  {loading && (
                    <CircularProgress
                      size={25}
                      thickness={2}
                    />
                  )}
                  Ingresar
                </Button>
              </CardActions>
            </Card>
            <Notification />
          </div>
        </form>
      )}
    />
  );
};

Login.propTypes = {
  authProvider: PropTypes.func,
  previousRoute: PropTypes.string,
};

const LoginWithTheme = props => (
  <ThemeProvider theme={createMuiTheme(theme)}>
    <Login {...props} />
  </ThemeProvider>
);

export default Login;