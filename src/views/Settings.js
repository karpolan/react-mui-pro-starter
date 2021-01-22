import React, { useState, useCallback, useEffect } from 'react';
import validate from 'validate.js';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AppButton, AppInput } from '../components';

const useStyles = makeStyles({
  root: {
    padding: '30px',
  },
  heading: {
    color: '#1c313a',
  },
});
const inputText = {
  name: 'Your name',
  surname: 'Your family name',
  email: 'Your email',
  profession: 'Your profession',
  website: 'Your website',
  password: 'Your password',
};

const DEFAULT_FORM_STATE = {
  isValid: false, // True when all Input Values are entered correctly
  values: {}, // List of Input Values as string|boolean
  touched: {}, // List of Inputs have been touched as boolean
  errors: {}, // List of Errors for every field as array[] of strings
};

const SIGNUP_FORM_SCHEMA = {
  nameFirst: {
    length: {
      minimum: 2,
      maximum: 64,
    },
  },
  nameLast: {
    length: {
      minimum: 2,
      maximum: 64,
    },
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
  },
  // password: {
  //   presence: { allowEmpty: false, message: 'is required' },
  //   length: {
  //     minimum: 8,
  //     maximum: 32,
  //     message: 'length between 8 and 32 chars',
  //   },
  // },
  // confirmPassword: {
  //   equality: {
  //     attribute: 'password',
  //     // message: 'not match',
  //   },
  // }
};

const Settings = () => {
  const classes = useStyles();
  const [formState, setFormState] = useState(DEFAULT_FORM_STATE);

  useEffect(() => {
    const errors = validate(formState.values, SIGNUP_FORM_SCHEMA);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
    console.log(errors);
  }, [formState.values]);

  // Verifies does the Field by given Name has the Error
  const hasError = (fieldName) => {
    return Boolean(formState.touched[fieldName] && formState.errors[fieldName]);
  };

  // Returns top most Error for the Field by given Name or null
  const getError = (fieldName) => {
    return hasError(fieldName) ? formState.errors[fieldName][0] : null;
  };

  //onChange function
  const handleChange = useCallback((event) => {
    event.persist();

    const name = event.target?.name;
    const value =
      event.target?.type === 'checkbox'
        ? event.target?.checked // Checkbox Input
        : event.target?.value; // Any other Input

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [name]: value,
      },
      touched: {
        ...formState.touched,
        [name]: true,
      },
    }));
  }, []);

  // Submits the form data to API
  const handleOnConfirm = () => {
    const result = {
      nameFirst: formState.values.nameFirst,
      nameLast: formState.values.nameLast,
      email: formState.values.email,
      profession: formState.values.profession,
      website: formState.values.website,

      // password: formState.values.password,
    };
    console.table(result);
    return result;
  };

  return (
    // <form className={classes.root}>
    <Grid container className={classes.root} spacing={50}>
      <Grid container xs={12} direction="column" alignItems="center">
        <Typography className={classes.heading} variant="h2" children="Your Profile" />
        <Typography className={classes.heading} variant="h6" children="Add information about yourself" />
      </Grid>
      <Grid item xs={12} direction="column" justify="space-between" alignItems="center">
        <AppInput
          name="nameFirst"
          value={formState.values.nameFirst || ''}
          labelText={inputText.name}
          required={true}
          onChange={handleChange}
          error={hasError('nameFirst')}
          inputHelperText={getError('nameFirst')}
        />
        <AppInput
          name="nameLast"
          value={formState.values.nameLast || ''}
          labelText={inputText.surname}
          inputHelperText={getError('nameLast')}
          onChange={handleChange}
          error={hasError('nameLast')}
        />
        <AppInput
          name="email"
          value={formState.values.email || ''}
          labelText={inputText.email}
          onChange={handleChange}
          error={hasError('email')}
          inputHelperText={getError('email')}
        />
        <AppInput
          name="profession"
          value={formState.values.profession || ''}
          labelText={inputText.profession}
          inputHelperText={'Print ' + inputText.profession.toLowerCase()}
          onChange={handleChange}
        />
        <AppInput
          name="website"
          value={formState.values.website || ''}
          labelText={inputText.website}
          inputHelperText={'Print ' + inputText.website.toLowerCase()}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={2}>
        <AppButton onClick={handleOnConfirm} color="primary" disabled={!formState.isValid}>
          Save
        </AppButton>
      </Grid>
    </Grid>
    // </form>
  );
};
export default Settings;
