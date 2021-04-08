import { Divider, Grid } from '@material-ui/core'
import React from 'react'
import { AssignmentReceived } from '../Assignment/AssignmentReceived'
import { ChatTypingSpace } from '../MyChat/ChatTypingSpace'
import TeacherLeftView from './TeacherLeftView'
import TeachingPlace from './TeachingPlace'


export default function Teacher2StuPersonal() {
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

    const space = {
        padding: "15px"
    }
    const Marginspace = {
        margin: "5px"
    }
    return (
        <div style={style}>
             <Grid container style={glassStyle}>
                <Grid item sm={3} style={glassStyle}>
                    <a href="/">
                        <TeachingPlace />
                    </a>
                </Grid>
                <Grid item sm={3} style={glassStyle}>
                    <a href="/TeachClsWork">
                        <h3 style={{ textAlign: "center" }}>Class</h3>
                    </a>
                </Grid>
                <Grid item sm={3} style={glassStyle}>
                    <a href="">
                        <h3 style={{ textAlign: "center" }}>Personal</h3>
                    </a>
                </Grid>
                <Grid item sm={3} style={glassStyle}>
                    <a href="">
                        <h3 style={{ textAlign: "center" }}>Group</h3>
                    </a>
                </Grid>
            </Grid>
            <Grid container style={glassStyle}>
                <Grid item sm={3}>
                    <TeacherLeftView />
                </Grid>
                <Grid item sm={9}>
                    <div style={space}>
                       
                        <ChatTypingSpace/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
