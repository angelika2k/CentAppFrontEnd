import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProgressList from './Progress/ProgressList'
import { CentLogo } from './MyChat/CentLogo'

export const Progress = () => {

    const style = {
        paddingTop: "50px",
        height: '100vh'
        // backgroundColor: "red"
    }

    const glassStyle = {
        background: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        borderRadius: "10px",
        border: " 1px solid rgba(255, 255, 255, 0.18)"
    }

    const padding = {
        padding: "20px"
    }

    const margin = {
        margin: "20px"
    }
    return (
        <div style={style}>
            <div>
                <Grid container style={glassStyle}>
                    <Grid container style={glassStyle}>
                        <Grid item sm={3} style={{ textAlign: 'center' }}>
                            <a href="/">
                                <CentLogo />
                            </a>
                        </Grid>
                        <Grid item sm={9} style={glassStyle}>
                            <h2 style={{textAlign:"center"}}>Progress</h2>
                        </Grid>
                    </Grid>
                    <Grid item sm={4} style={glassStyle, margin}>
                        <ProgressList />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Progress;
