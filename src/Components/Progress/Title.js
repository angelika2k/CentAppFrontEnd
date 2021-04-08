import React, { useState } from 'react'
import { InputBase, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MoreHoriz } from '@material-ui/icons';


const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: 'flex'
    },
    editableTitle: {
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight: "bold"
    },
    input: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        margin: theme.spacing(1),
        "&:focus": {
            background: "#ddd"
        }
    }
}))

export default function Title() {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const glassStyle = {
        background: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        borderRadius: "10px",
        border: " 1px solid rgba(255, 255, 255, 0.18)"
    }
    return (
        <div>
            {open ?
                <div style = {glassStyle}>
                    <InputBase 
                    autoFocus
                    value="ToDo"
                        inputProps={{
                            className: classes.input,
                        }}
                        fullWidth
                        onBlur={() => setOpen(!open)}
                    />
                </div> :
                <div className={classes.editableTitleContainer} style = {glassStyle}>
                    <Typography
                        onClick={() => setOpen(!open)}
                        className={classes.editableTitle} >Todo
                </Typography>
                    <MoreHoriz />
                </div>
            }
        </div>
    )
}
