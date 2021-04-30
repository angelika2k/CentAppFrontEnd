import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'

// const useStyles = makeStyles((theme) => ({
//     avatrStyle:{
//         width:theme.spacing(7),
//         height:theme.spacing(7)
//     }
// }))
export const ChatHeading = () => {
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
                <Grid item sm={6} style = {padding}>
                    <Avatar alt="Cent" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2EgncLjz34RAF0hJBmctuSybA3luujCggw&usqp=CAU" />
                </Grid>
                <Grid style={{textAlign:'center'}}>
                    <h3>My Chat</h3>
                </Grid>
            </Grid>
        </div>
    )
}
