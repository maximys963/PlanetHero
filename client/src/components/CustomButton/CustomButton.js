import React          from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Button         from '@material-ui/core/Button';

export function CustomButton(props) {
    const {
        children,
        variant,
        color,
        style,
        onClick,
        hoverColor
    } = props;

    const CustomButton = withStyles({
        root: {
            color : color,
            borderColor: color,
            borderWidth: '2px',
            fontFamily: 'Alata',
            '&:hover' : {
                color : hoverColor,
                borderColor: hoverColor,
                borderWidth: '2px',
            }
        },
    })(Button);
    return(
        <CustomButton
            style   = {{...style}}
            onClick = {onClick}
            variant = {variant}
            color   = {color}>
            {children}
        </CustomButton>
    )
}
