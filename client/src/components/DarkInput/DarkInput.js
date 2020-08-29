import React           from 'react';
import { TextField }   from '@material-ui/core';
import {
    withStyles,
}                      from '@material-ui/core/styles';
import { NIGHT_BLACK } from '../../constants/colors';

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: NIGHT_BLACK,
        },
        '& label': {
            color: NIGHT_BLACK,
            fontFamily: 'Alata',
        },
        '& input:valid + fieldset': {
            borderColor: NIGHT_BLACK,
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
            color: NIGHT_BLACK,
            fontFamily: 'Alata',
            '& fieldset': {
                borderColor: 'red',
                color: NIGHT_BLACK
            },
            '&:hover fieldset': {
                borderColor: NIGHT_BLACK,
            },
            '&.Mui-focused fieldset': {
                borderColor:NIGHT_BLACK,
            },
        },
    },
})(TextField);


export function DarkInput (props) {
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
