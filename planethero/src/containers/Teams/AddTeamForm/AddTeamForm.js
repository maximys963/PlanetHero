import React, {useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as eventActions from '../../../actions/events';
import { DarkInput } from '../../../components/DarkInput/DarkInput';
import { NIGHT_BLACK, GREY_SKY }  from '../../../constants/colors';
import { CustomButton } from '../../../components/CustomButton/CustomButton';
import { Button }       from '@material-ui/core';

import styles from './AddTeamForm.module.css';

const INPUT_WIDTH = '300px';

function AddEventForm (props) {
    const [ eventForm, setEventForm ] = useState({});
    const dispatch = useDispatch();


    const onInputChange = useCallback((e, field) => {
        setEventForm({ ...eventForm, [field]: e.target.value});
    }, [eventForm]);

    const onSubmit = useCallback(() => {
        dispatch(eventActions.addEvent(eventForm));
    }, [eventForm]);

    console.log('eventForm', eventForm);

    const { setActiveEventPage } = props;

    return (
        <div className={styles.addEventFormContainer}>
            <div className={styles.addEventForm}>
                <div className={styles.title}>ADD EVENT</div>
                <DarkInput
                    className          = {styles.input}
                    style              = {{width: INPUT_WIDTH}}
                    onChange           = {(e) => onInputChange(e, 'title')}
                    value              = {eventForm.title}
                    label              = 'Title'
                    variant            = 'outlined'
                />
                <DarkInput
                    className          = {styles.input}
                    style              = {{width: INPUT_WIDTH}}
                    onChange           = {(e) => onInputChange(e, 'url')}
                    value              = {eventForm.url}
                    label              = 'Image Url'
                    variant            = 'outlined'
                />
                <DarkInput
                    color              = {NIGHT_BLACK}
                    focusedBorderColor = '#bdc3c7'
                    className          = {styles.input}
                    style              = {{width: INPUT_WIDTH}}
                    onChange           = {(e) => onInputChange(e, 'date')}
                    value              = {eventForm.date}
                    label              = 'Date / Time'
                    variant            = 'outlined'
                />
                <div className={styles.buttonContainer}>
                    <CustomButton
                        style      = {{ marginTop: '20px' }}
                        variant    = 'outlined'
                        color      = {NIGHT_BLACK}
                        hoverColor = {GREY_SKY}
                        onClick={() => setActiveEventPage('event')}
                    >Back</CustomButton>
                    <CustomButton
                        style      = {{ marginTop: '20px' }}
                        variant    = 'outlined'
                        color      = {NIGHT_BLACK}
                        hoverColor = {GREY_SKY}
                        onClick={onSubmit}
                    >Add Event</CustomButton>
                </div>
            </div>
        </div>
    );
}

export default AddEventForm;
