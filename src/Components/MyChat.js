import React from 'react'
import Grid from '@material-ui/core/Grid'
import { MyChatLeftBar } from './MyChat/MyChatLeftBar'
import { MyChatRightBar } from './MyChat/MyChatRightBar'
import { CentLogo } from './MyChat/CentLogo'
import { ChatHeading } from './MyChat/ChatHeading'
import { BrowserRouter as Router, Link } from 'react-router-dom'


export const MyChat = () => {
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
    return (
        <div style={style}>
            <Grid container style={glassStyle}>
                <Grid item xs={3}>
                    <Link to="/">
                        <CentLogo />
                    </Link>
                </Grid>
                <Grid item xs={9}>
                    <ChatHeading />
                </Grid>
            </Grid>
            <Grid container style={glassStyle}>
                <Grid item xs={3} >
                    <MyChatLeftBar />
                </Grid>
                <Grid item xs={9}>
                    <MyChatRightBar />
                </Grid>
            </Grid>
        </div>
    )
}
