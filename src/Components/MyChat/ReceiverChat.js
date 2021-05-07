import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid'

export const ReceiverChat = (props) => {
    const styleReceiver = {
        padding: '10px',
        borderRadius: '0px 40px 40px 35px',
        minWidth: '400px',
        float: 'left',
        backgroundColor: '#756d5e',
        color: 'white',
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        border: " 1px solid #ffffff",
        textAlign:'left'
    }
    const threeDots = {
        marginLeft: '-10px'
    }
    return (
        <div>
            <span style={styleReceiver}>
                {props.message}
            </span>
            <IconButton style={threeDots}>
                <FavoriteBorderIcon />
            </IconButton>
        </div>
    )
}
