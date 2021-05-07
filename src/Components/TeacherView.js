import { Grid } from '@material-ui/core'
import React from 'react'
import { ChatTypingSpace } from './MyChat/ChatTypingSpace'
import { TutoryRightBar } from './StudentViewCenter/TutoryRightBar'
import TeacherLeftView from './TeacherVew/TeacherLeftView'
import TeachingPlace from './TeacherVew/TeachingPlace'

export default function TeacherView() {
    const style = {
        paddingTop: "1px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        height: '85vh',
        margin: "50px",
        width: '185vh',
        backgroundColor: '#F2F2F2'
    }

    return (
        <div style={style}>
            <Grid container>
                <Grid item xs={3}>
                    <a href="/">
                        <TeachingPlace />
                    </a>
                </Grid>
                <Grid item xs={5}>
                    <a href="/techview">
                        <h3>Tutory Update</h3>
                    </a>
                </Grid>
                <Grid item xs={4}>
                    <a href="/TeachToAdminChat">
                        <h3>Admin</h3>
                    </a>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sm={3} >
                    <TeacherLeftView />
                </Grid>
                <Grid item sm={9}>
                    <Grid container>
                        <TutoryRightBar />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
