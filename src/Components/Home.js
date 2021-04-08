import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import { ChatHeadingFromHome } from './Home/ChatHeadingFromHome'

export const Home = () => {
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

    let LearningInstitutes = [
        {
            "name": "UKI Coding School",
            "role": "student"
        },
        {
            "name": "Choir Team",
            "role": "student"
        }]
    let TeachingInstitutes = [
        {
            "name": "IDM Music center",
            "role": "teacher"
        }
    ]

    return (

        <div style={style}>
            <Grid container style={glassStyle}>
                <h1 style={padding}>Hi Dude!</h1>
                <Container>
                    <Grid container>
                        <Grid item sm={6} style={padding}>
                            <a href="/mychat">
                                <ChatHeadingFromHome name="MyChat" />
                            </a>
                        </Grid>
                        <Grid item sm={6} style={padding}>
                            <a href="/progress">
                                <ChatHeadingFromHome name="Progress" />
                            </a>
                        </Grid>
                        <Grid item sm={12}>

                            <h1>Student at  </h1>
                        </Grid>
                        {LearningInstitutes.map((institute, i) => {
                            return (
                                <Grid item sm={6} style={padding}>
                                    <a href="/stuview">
                                        <ChatHeadingFromHome name={institute.name} />
                                    </a>
                                </Grid>
                            )
                        })}
                        <Grid item sm={12}>

                            <h1>Teach in</h1>
                        </Grid>
                        {TeachingInstitutes.map((institute, i) => {
                            return (
                                <Grid item sm={6} style={padding}>
                                    <a href="/techview">
                                        <ChatHeadingFromHome name={institute.name} />
                                    </a>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Grid>
        </div >
    )
}
