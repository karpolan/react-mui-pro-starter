import React from 'react';
import PropTypes from 'prop-types';
import {FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {}
});

const AppInput = ({labelText, inputHelperText, ...props}) => {
    const classes = useStyles();

    return (
        <FormControl 
        className={classes.root} 
        error={false} 
        disabled={false} 
        fullWidth={true}
        required={false} 
        size='medium' 
        variant='filled'
        color='primary'
        margin='dense'>
            <InputLabel>{labelText}</InputLabel>
            <Input name='' 
            {...props}/>
            <FormHelperText>{inputHelperText}</FormHelperText>
        </FormControl>
    )
};

AppInput.propTypes = {
    labelText: PropTypes.string,
    inputHelperText: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
};
export default AppInput;