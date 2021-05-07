import React from 'react'
import Grid from '@material-ui/core/Grid'

export const SenderChat = (props) => {
    const styleSender = {
        padding: '10px',
        borderRadius: '40px 0px 40px 35px',
        minWidth: '500px',
        float: 'right',
        margin: '3px',
        backgroundColor: '#f2f2f2',
        color:'black',
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        border: " 1px solid #756D5E"
    }
    console.log("hi")
    return (
                <span style={styleSender}>{props.message}</span>
    )
}
