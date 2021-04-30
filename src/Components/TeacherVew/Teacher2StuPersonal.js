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

    const space = {
        padding: "15px"
    }
    const Marginspace = {
        margin: "5px"
    }
    return (
        <div style={style}>
             <Grid container>
                <Grid item sm={3}>
                    <a href="/">
                        <TeachingPlace />
                    </a>
                </Grid>
                <Grid item sm={3}>
                    <a href="/TeachClsWork">
                        <h3 style={{ textAlign: "center" }}>Class</h3>
                    </a>
                </Grid>
                <Grid item sm={3}>
                    <a href="">
                        <h3 style={{ textAlign: "center" }}>Personal</h3>
                    </a>
                </Grid>
                <Grid item sm={3}>
                    <a href="">
                        <h3 style={{ textAlign: "center" }}>Group</h3>
                    </a>
                </Grid>
            </Grid>
            <Grid container>
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
