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
    const glassStyle = {
        background: "#ccffbd",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        borderRadius: "10px",
        border: " 1px solid rgba(255, 255, 255, 0.18)"
    }
    return (
        <div className={classes.root} >
            <Collapse in={open}>
                <InputCardDesign setOpen={setOpen} style={glassStyle} />
            </Collapse>
            <Collapse in={!open}>
                <Paper className={classes.addCard} elevation={0} onClick={() => setOpen(!open)}
                    style={glassStyle}>
                    <Typography>
                        + Add a Card
                </Typography>
                </Paper>
            </Collapse>
        </div>
    )
}
