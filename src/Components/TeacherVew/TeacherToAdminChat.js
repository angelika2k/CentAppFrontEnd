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



    return (
        <div style={style}>
            <Grid container>
                <Grid item xs={3}>
                    <a href="/">
                        <TeachingPlace />
                    </a>
                </Grid>
                <Grid item xs={4}>
                    <a href="/techview">
                        <h3 style={{textAlign:"center"}}>Tutory Update</h3>
                    </a>
                </Grid>
                <Grid item xs={5}>
                    <a href="">
                        <h3 style={{textAlign:"center"}}>Admin</h3>
                    </a>
                </Grid>
            </Grid>
            <Grid container>
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
