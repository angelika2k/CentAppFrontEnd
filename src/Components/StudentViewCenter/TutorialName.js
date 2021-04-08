import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'

export const TutorialName = () => {
    const style = {
        backgroundColor: "DodgerBlue",
        padding: "15px"
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
        padding: "15px"
    }

    return (
        <div style={style.divStyle}>
            <Grid container style = {glassStyle}>
                <Grid item sm={3} style = {padding}>
                    <Avatar alt="Cent" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2EgncLjz34RAF0hJBmctuSybA3luujCggw&usqp=CAU" />
                </Grid>
                <Grid item sm={9}>
                    <h2>UKI</h2>
                </Grid>
            </Grid>
        </div>
    )
}