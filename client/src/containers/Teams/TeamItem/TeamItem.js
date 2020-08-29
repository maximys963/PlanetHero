import React            from 'react';
import { makeStyles }   from '@material-ui/core/styles';
import Card             from '@material-ui/core/Card';
import CardActionArea   from '@material-ui/core/CardActionArea';
import CardActions      from '@material-ui/core/CardActions';
import CardContent      from '@material-ui/core/CardContent';
import CardMedia        from '@material-ui/core/CardMedia';
import Button           from '@material-ui/core/Button';
import Typography       from '@material-ui/core/Typography';

import { DARK_MOUNTAIN_MELLOW } from '../../../constants/colors';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        width: 250,
        minHeight: 270,
        marginRight: 20,
        marginTop: 20
    },
    media: {
        height: 140,
        fontFamily: 'Alata'
    },
    typography : {
        fontFamily: 'Alata'
    },
    button : {
        color : DARK_MOUNTAIN_MELLOW
    }
});


export default function TeamItem(props) {



    const classes = useStyles();

    const {
        title,
        description,
        imageURL
    } = props;

    console.log('description', description);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className = {classes.media}
                    image     = {imageURL}
                    title     = {title}
                />
                <CardContent>
                    <Typography
                        className={classes.typography}
                        gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography
                        className = {classes.typography}
                        variant   = "body2"
                        color     = "textSecondary"
                        component = "p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    className = {classes.button}
                    size="small"
                    color="primary">
                    Participate
                </Button>
            </CardActions>
        </Card>
    );
}
