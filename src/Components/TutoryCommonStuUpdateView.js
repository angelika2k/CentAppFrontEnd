import React from 'react'
import Grid from '@material-ui/core/Grid'
import { TutoryRightBar } from './StudentViewCenter/TutoryRightBar'
import { TutorialName } from './StudentViewCenter/TutorialName'
import { TutoryLeftBar } from './StudentViewCenter/TutoryLeftBar'

export const TutoryCommonStuUpdateView = () => {
    const style = {
        paddingTop: "1px",
        height: '85vh',
        margin: "50px",
        width: '185vh',
        backgroundColor: '#F2F2F2',
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
    }

    return (
        <div style={style}>
            <Grid container>
                <Grid item xs={3}>
                    <a href="/">
                        <TutorialName />
                    </a>
                </Grid>
                <Grid item xs={4}>
                    <h3>Tutory Update</h3>
                </Grid>
                <Grid item xs={4}>
                    <a href="adminmsg">
                        <h3>Admin</h3>
                    </a>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={3}>
                    <TutoryLeftBar />
                </Grid>
                    <Grid item xs={9}>
                        <TutoryRightBar />
                    </Grid>
            </Grid>
        </div>
    )
}
