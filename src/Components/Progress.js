import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProgressList from './Progress/ProgressList'
import { CentLogo } from './MyChat/CentLogo'

export const Progress = () => {

    const style = {
        paddingTop: "50px",
        height: '100vh'
        // backgroundColor: "red"
    }

    const padding = {
        padding: "20px"
    }

    const margin = {
        margin: "20px"
    }
    return (
        <div style={style}>
            <div>
                <Grid container>
                    <Grid container>
                        <Grid item sm={3} style={{ textAlign: 'center' }}>
                            <a href="/">
                                <CentLogo />
                            </a>
                        </Grid>
                        <Grid item sm={9}>
                            <h2 style={{textAlign:"center"}}>Progress</h2>
                        </Grid>
                    </Grid>
                    <Grid item sm={4} style={margin}>
                        <ProgressList />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Progress;
