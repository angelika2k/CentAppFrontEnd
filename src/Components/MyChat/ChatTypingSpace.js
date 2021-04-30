import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-ui/core'

const wrapperDiv = {
    width: '1000px',
    padding: '10px'
}
const styleTypingSpace = {
    backgroundColor: '#ccffbd',
    position: 'fixed',
    bottom: '10px',
    right: '125px',
    height: '50px',
    width: '910px',
    padding: '5px',
    background: "#ccffbd",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: " blur(4px)",
    border: " 1px solid rgba(255, 255, 255, 0.18)"
}
const styleMsgBox = {
    backgroundColor: '#f4eeed',
    height: '40px',
    width: '900px',
    background: "rgba(255, 255, 255, 0.25)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: " blur(4px)",
    border: " 1px solid rgba(255, 255, 255, 0.18)"
}
export class ChatTypingSpace extends Component {

    render() {

        // MessageSend = () => {
        //    Console.log("send msg");
        // };

        return (
            <div style={wrapperDiv}>
                <div style={styleTypingSpace}>
                    <form>
                        <input type='text' placeholder='Enter your message..' style={styleMsgBox} />
                        {/* <Button onClick={this.MessageSend}><i class="fas fa-paper-plane"></i></Button> */}
                    </form>
                </div>
            </div>
        )
    }
}