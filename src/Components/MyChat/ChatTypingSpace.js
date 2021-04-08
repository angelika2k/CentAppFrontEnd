import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';

export const ChatTypingSpace = () => {
    const wrapperDiv = {
        width:'1000px',
        padding:'10px'
    }
    const styleTypingSpace = {
        backgroundColor: '#ccffbd',
        position: 'fixed',
        bottom: '0',
        right: '0',
        height:'50px',
        width:'910px',
        padding:'5px',
        borderRadius: "10px",
        background: "#ccffbd",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        border: " 1px solid rgba(255, 255, 255, 0.18)"
    }
    const styleMsgBox = {
        backgroundColor: '#f4eeed',
        height:'40px',
        width:'900px',
        borderRadius: "10px",
        background: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        border: " 1px solid rgba(255, 255, 255, 0.18)"
    }

    return (
        <div style={wrapperDiv}>
            <div style={styleTypingSpace}>
                <form>
                <input type='text' placeholder='Enter your message..' style={styleMsgBox} />
                </form>
            </div>
        </div>
    )
}
