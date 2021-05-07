import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-ui/core'
import { IconButton } from '@material-ui/core';
const wrapperDiv = {
    width: '1000px',
    padding: '10px',
}
const styleTypingSpace = {
    backgroundColor: '#F2F2F2',
    position: 'fixed',
    bottom: '10px',
    right: '125px',
    height: '50px',
    width: '135.5vh',
    padding: '5px',
    marginBottom:'54px',
    marginRight:'-52px',
    border: " 1px solid rgba(255, 255, 255, 0.18)"
}
const styleMsgBox = {
    backgroundColor: '#D8D1C9',
    height: '40px',
    width: '135vh',
    WebkitBackdropFilter: " blur(4px)",
    border: " 1px solid rgba(255, 255, 255, 0.18)",
    margin:'1px'
}
export class ChatTypingSpace extends Component {

    render() {

        // MessageSend = () => {
        //    Console.log("send msg");
        // };

        return (
                <div style={styleTypingSpace}>
                    <form>
                        <input type='text' placeholder='Enter your message..' style={styleMsgBox} />
                        {/* <Button onClick={this.MessageSend}><i class="fas fa-paper-plane"></i></Button> */}
                    </form>
                </div>
        )
    }
}