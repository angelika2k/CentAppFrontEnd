import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export const ReceiverChat = () => {
    const styleReceiver = {
        padding: '10px',
        // border: '1px outset #1C6EA4',
        borderRadius: '0px 40px 40px 35px',
        minWidth: '400px',
        float: 'left',
        textAlign:'right',
        backgroundColor:'powderblue',
        background: "#efd9d1",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        border: " 1px solid rgba(255, 255, 255, 0.18)"
    }
    const threeDots={
        marginLeft:'-10px'
    }
    return (
        <div>
            <span style={styleReceiver}>
                hello
            </span>
            <IconButton style={threeDots}>
                <FavoriteBorderIcon/>
            </IconButton>
        </div>
    )
}
