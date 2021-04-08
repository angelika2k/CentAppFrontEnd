import { Grid } from '@material-ui/core'
import React from 'react'
import { MyChatRightBar } from '../MyChat/MyChatRightBar'
import TeacherChatRight from './TeacherChatRight'
import TeacherLeftView from './TeacherLeftView'
import TeachingPlace from './TeachingPlace'

export default function TeacherToAdminChat() {

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
        border: " 1px solid rgba(255, 255, 255, 0.18)"
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
        <div style={style}>
            <Grid container style={glassStyle}>
                <Grid item xs={3}>
                    <a href="/">
                        <TeachingPlace />
                    </a>
                </Grid>
                <Grid item xs={4} style={glassStyle1}>
                    <a href="/techview">
                        <h3 style={{textAlign:"center"}}>Tutory Update</h3>
                    </a>
                </Grid>
                <Grid item xs={5} style={glassStyle}>
                    <a href="">
                        <h3 style={{textAlign:"center"}}>Admin</h3>
                    </a>
                </Grid>
            </Grid>
            <Grid container style={glassStyle}>
                <Grid item xs={3} >
                    <TeacherLeftView />
                </Grid>
                <Grid item xs={9}>
                    <MyChatRightBar />
                </Grid>
            </Grid>
        </div>
    )
}
