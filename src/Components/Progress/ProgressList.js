import React from 'react'
import { Card, CssBaseline, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Activities from './Activities';
import InputContainer from './Input/InputContainer';



const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "39vh",
        backgroundColor: "#f2f2f2",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
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
