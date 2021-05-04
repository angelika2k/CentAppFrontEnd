import React from 'react'
import { useParams } from "react-router-dom";
import { ChatTypingSpace } from './ChatTypingSpace'
import { ReceiverChat } from './ReceiverChat'
import { SenderChat } from './SenderChat'
import { TabScrollButton } from '@material-ui/core';

export const MyChatRightBar = (props) => {
    var chat = props.chat
    const space = {
        padding: "15px"
    }

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

    let id = window.location.href.split("/");
    id = id[id.length - 1];

    console.log(id)
    console.log(chat)
    return (

        <div style={space}>
            {chat.map((data) => {
                data.chats.map(
                    (chat) => {
                        console.log(chat)
                        if (chat.sender == "0774766597") {
                            console.log(chat.message)
                            return <span style={styleSender}>{chat.message}</span>   
                        }
                        else {
                            return <ReceiverChat message={chat.message} />
                        }
                    }
                )
            })}
            <ChatTypingSpace />
        </div>

        // <div style={space}>
        //     {chat.chats.map((data) => {
        //         if (data.sender == "0774766597") {
        //             console.log(chat)
        //             return <SenderChat message={data.message} />
        //         }
        //         else {
        //             return <ReceiverChat message={data.message} />

        //         }
        //     })}
        //     <ChatTypingSpace />
        // </div>
    )
}
