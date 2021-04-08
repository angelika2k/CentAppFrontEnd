import { Button, fade, IconButton, InputBase, Paper } from '@material-ui/core'
import { Clear } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

import React from 'react'

const useStyle = makeStyles((theme) => ({
    card: {
        width: "280px",
        paddingBottom: theme.spacing(4),
        margin: theme.spacing(0, 1, 1, 1)
    },
    input: {
        margin: theme.spacing(1)
    },
    btnconfirm: {
        backgroundColor: "#7eca9c",
        color: "#40394a",
        "$:hover": {
            backgroundColor: fade("#7eca9c", 0.75)
        }
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1)
    }
}))

export default function InputCardDesign({ setOpen }) {
    const classes = useStyle();
    const glassStyle = {
        background: "#ccffbd",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        borderRadius: "10px",
        border: " 1px solid rgba(255, 255, 255, 0.18)"
    }
    return (

        <div>
            <div>
                <Paper className={classes.card} style={glassStyle}>
                    <InputBase multiline
                        fullWidth
                        inputProps={{
                            className: classes.input,
                        }}
                        placeholder="Enter a Title of this card"
                    />
                </Paper>
                <div className={classes.confirm}>
                    <Button className={classes.btnconfirm} onClick={() => setOpen(false)}>
                        Add Card</Button>
                    <IconButton onClick={() => setOpen(false)}>
                        <Clear />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}