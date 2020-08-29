import React         from 'react';
import { TextField } from '@material-ui/core';
import {
    withStyles,
}                   from '@material-ui/core/styles';

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
            fontFamily: 'Alata',
        },
        '& input:valid + fieldset': {
            borderColor: 'white',
            borderWidth: 2,
        },
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderColor: '#bdc3c7',
            padding: '4px !important', // override inline-style
        },
        '& .MuiOutlinedInput-root': {
            color: 'white',
            fontFamily: 'Alata',
            '& fieldset': {
                borderColor: 'red',
                color: 'white'
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor:'white',
            },
        },
    },
})(TextField);


export function WhiteInput (props) {
    const {
        label,
        variant,
        defaultValue,
        type,
        style,
        className,
        value,
        onChange,
    } = props;

    return(
        <div className = {className}>
            <InputField
                style        = {{ color: 'white', ...style}}
                label        = {label}
                variant      = {variant}
                defaultValue = {defaultValue}
                type         = {type}
                value        = {value}
                onChange     = {onChange}
            />
        </div>
    )
}
