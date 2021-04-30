import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'

// const useStyles = makeStyles((theme) => ({
//     avatrStyle:{
//         width:theme.spacing(7),
//         height:theme.spacing(7)
//     }
// }))
export const ChatHeadingFromHome = (props) => {
    const style = {
        backgroundColor: "DodgerBlue",
        padding: "15px"
    }

    const padding = {
        padding: "15px"
    }

    return (
        <div style={style.divStyle}>
            <Grid container>
                <Grid item sm={3} style = {padding}>
                    <Avatar alt="Cent" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2EgncLjz34RAF0hJBmctuSybA3luujCggw&usqp=CAU" />
                </Grid>
                <Grid item sm={9}>
                    <h2>{props.name}</h2>
                </Grid>
            </Grid>
        </div>
    )
}

