import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProgressList from './Progress/ProgressList'
import { CentLogo } from './MyChat/CentLogo'

export const Progress = () => {

    const style = {
        height: '85vh',
        margin: "50px",
        width: '185vh',
        backgroundColor: "#F2F2F2"
    }

    const divStyle = {
        height: '71vh',
        width: '175vh',
        backgroundImage: "url(https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa7846593e6ae0c9a0b.png)",
        overflowY: "scroll",
        marginLeft: '5vh',
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
    }

    const cardStyle = {
        padding: '20px',
        marginLeft:'8.5vh',
        marginTop:'4vh'
    }

    return (
        <div style={style}>
            <div>
                <Grid container>
                    <Grid container>
                        <Grid item sm={3} style={{ textAlign: 'center' }}>
                            <a href="/">
                                <CentLogo />
                            </a>
                        </Grid>
                        <Grid item sm={9}>
                            <h2 style={{ textAlign: "center" }}>Progress</h2>
                        </Grid>
                    </Grid>
                    <div style={divStyle}>
                        <Grid container>
                            <Grid style={cardStyle}>
                                <ProgressList />
                            </Grid>

                            <Grid  style={cardStyle}>
                                <ProgressList />
                            </Grid>

                            <Grid style={cardStyle}>
                                <ProgressList />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid style={cardStyle}>
                                <ProgressList />
                            </Grid>

                            <Grid  style={cardStyle}>
                                <ProgressList />
                            </Grid>

                            <Grid style={cardStyle}>
                                <ProgressList />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </div>
        </div>
    )
}
export default Progress;
