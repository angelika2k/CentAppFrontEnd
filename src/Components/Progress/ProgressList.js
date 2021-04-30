import React from 'react'
import { Card, CssBaseline, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Activities from './Activities';
import InputContainer from './Input/InputContainer';



const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "75%",
        backgroundColor: "red",
        marginLeft: theme.spacing(1),
        overflowY: "auto"
    }
}))

export default function ProgressList() {
    const classes = useStyle();

    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                <Typography>
                    <Title />
                    <Activities />
                    <Activities />
                    <Activities />
                    <InputContainer />
                </Typography>
            </Paper>
        </div>
    )
}
