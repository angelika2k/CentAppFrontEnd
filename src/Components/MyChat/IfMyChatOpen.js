import { Grid } from '@material-ui/core'
import React from 'react'
import { CentLogo } from './CentLogo'
import { MyChatLeftBar } from './MyChatLeftBar'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function IfMyChatOpen() {

    var style = {
        paddingTop: "1px",
        height: '85vh',
        margin: "50px",
        backgroundColor: "#F2F2F2"
    }

    return (
        <div>
            <Grid style={style}>
                <Grid container>
                    <Grid item xs={3}>
                        <Link to="/">
                            <CentLogo />
                        </Link>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={3} >
                        <MyChatLeftBar />
                    </Grid>
                    <Grid item xs={9}>
                        <div style={{
                            padding: "15px",
                            height: '72vh',
                            backgroundImage: "url(https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa7846593e6ae0c9a0b.png)",
                        }}></div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
