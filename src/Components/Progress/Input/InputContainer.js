import React, { useState } from 'react'
import { Collapse, Paper, Typography } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles';
import InputCardDesign from './InputCardDesign';


const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    addCard: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        "&:hover": {
            backgroundColor: fade('#000', 0.25),
        }
    }
}))

export default function InputContainer() {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
 
    return (
        <div className={classes.root} >
            <Collapse in={open}>
                <InputCardDesign setOpen={setOpen}/>
            </Collapse>
            <Collapse in={!open}>
                <Paper className={classes.addCard} elevation={0} onClick={() => setOpen(!open)}
                   >
                    <Typography>
                        + Add a Card
                </Typography>
                </Paper>
            </Collapse>
        </div>
    )
}
