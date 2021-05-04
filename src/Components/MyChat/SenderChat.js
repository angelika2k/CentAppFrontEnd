import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const SenderChat = (props) => {
    const styleSender = {
        padding: '10px',
        // border: '1px outset #1C6EA4',
        borderRadius: '40px 0px 40px 35px',
        minWidth: '500px',
        float: 'right',
        margin:'3px',
        backgroundColor:'#ccffbd',
        background: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        border: " 1px solid rgba(255, 255, 255, 0.18)"
    }
    console.log("hi")
    return (
        <div>
            <span style={styleSender}>{props.message}</span>
        </div>
    )
}
