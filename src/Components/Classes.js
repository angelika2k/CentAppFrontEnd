import React from 'react'
import Grid from '@material-ui/core/Grid'
import { TutorialName } from './StudentViewCenter/TutorialName'
import { TutoryLeftBar } from './StudentViewCenter/TutoryLeftBar'
import { TutoryRightBar } from './StudentViewCenter/TutoryRightBar'

export const Classes = () => {
    const style = {
        paddingTop: "50px",
        height: '100vh'
    }

    return (
        <div style = {style}>
            <Grid container>
                <Grid item xs={3}>
                    <a href="/">
                        <TutorialName />
                    </a>
                </Grid>
                <Grid item xs={3}>
                    <h3>Class</h3>
                </Grid>
                <Grid item xs={3}>
                    <a href="/clspersonal">
                        <h3>Personal</h3>
                    </a>
                </Grid>
                <Grid item xs={3}>
                    <h3>Group</h3>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3} >
                    <TutoryLeftBar />
                </Grid>
                <Grid item xs={9}>
                    <TutoryRightBar />
                </Grid>
            </Grid>
        </div>
    )
}
