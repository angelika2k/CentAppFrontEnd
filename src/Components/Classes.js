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
        <div style = {style}>
            <Grid container style={glassStyle}>
                <Grid item xs={3}>
                    <a href="/">
                        <TutorialName />
                    </a>
                </Grid>
                <Grid item xs={3} style={glassStyle1}>
                    <h3>Class</h3>
                </Grid>
                <Grid item xs={3} style={glassStyle}>
                    <a href="/clspersonal">
                        <h3>Personal</h3>
                    </a>
                </Grid>
                <Grid item xs={3} style={glassStyle}>
                    <h3>Group</h3>
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
