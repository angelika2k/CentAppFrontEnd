import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import { ChatHeadingFromHome } from './Home/ChatHeadingFromHome'

export const Home = () => {

    const divStyle = {
        backgroundColor: 'white',
        width: '185vh',
        height: '90vh',
        marginTop: '40px',
        marginLeft: '53px'
    }
    const style = {
        padding: "20px",
        height: '77.5vh',
        margin: "50px",
        overflowY:'scroll',
        width: '172vh',
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backgroundImage: "url(https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa7846593e6ae0c9a0b.png)",
    }
    const padding = {
        padding: "10px",
        marginTop: '1px',
        border: " 1px solid #F2F2F2"
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
        <Grid container style={divStyle}>
            <Grid container style={style}>
                <h1 style={{ padding: "10px", marginTop: '1px' }}>Hi Dude!</h1>
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
            </Grid>
        </Grid>
    )
}
