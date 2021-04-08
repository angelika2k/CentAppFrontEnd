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

    const glassStyle = {
        background: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        borderRadius: "10px",
        border: " 1px solid rgba(255, 255, 255, 0.18)",
        textAlign: "center"
    }

    const glassStyle1 = {
        background: "#f4eeed",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        borderRadius: "10px",
        border: " 1px solid rgba(255, 255, 255, 0.18)",
        textAlign: "center"
    }
    return (
        <div>
            <Grid container style={glassStyle}>
                <Grid item xs={3}>
                    <TutorialName />
                </Grid>
                <Grid item xs={5} style={glassStyle1}>
                    <h3>Tutory Update</h3>
                </Grid>
                <Grid item xs={4} style={glassStyle}>
                    <h3>Admin</h3>
                </Grid>
            </Grid>
            <Grid container style={glassStyle}>
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