import React from 'react'
import Grid from '@material-ui/core/Grid'
import { ClassRightSideClass, TutoryRightBar } from './StudentViewCenter/TutoryRightBar'
import { ClassHeading, TutorialName } from './StudentViewCenter/TutorialName'
import { ClassLeftSide, TutoryLeftBar } from './StudentViewCenter/TutoryLeftBar'


export const TutoryCommonStuAdminView = () => {
    const style = {
        paddingTop: "50px",
        height: '100vh'
    }

    return (
        <div>
            <Grid container >
                <Grid item xs={3}>
                    <TutorialName />
                </Grid>
                <Grid item xs={5}>
                    <h3>Tutory Update</h3>
                </Grid>
                <Grid item xs={4}>
                    <h3>Admin</h3>
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