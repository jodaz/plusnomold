import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import axios from 'axios';
import {
  Button,
  Card,
  CardActions,
  CircularProgress,
  TextField,
  Typography,
} from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Notification } from 'react-admin';
import theme from './theming';

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

const RecoverPassword = () => {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const handleSubmit = (data) => {
    setLoading(true);
    axios.post(`/api/reset-password`, data)
      .then(res => console.log(res.data));
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Ingrese su correo electrónico";
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
              <div className={classes.content}>
                <div className={classes.avatar}>
                  <img src={`${process.env.PUBLIC_URL}/logo.png`} className={classes.icon}/>
                </div>
                <div className={classes.textMessage}>
                  <Typography variant="h6" gutterBottom>
                    Recuperación de contraseña
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Te enviaremos un enlace con un código de recuperación.
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
                </div>
                <CardActions className={classes.actions}>
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
                  Enviar
                </Button>
              </CardActions>
              </div>
            </Card>
            <Notification />
          </div>
        </form>
      )}
    />
  );
};

RecoverPassword.propTypes = {
  authProvider: PropTypes.func,
  previousRoute: PropTypes.string,
};

const RecoverPasswordWithTheme = props => (
  <ThemeProvider theme={createMuiTheme(theme)}>
    <RecoverPassword {...props} />
  </ThemeProvider>
);

export default RecoverPasswordWithTheme;
