import React from 'react'
import { useParams } from "react-router-dom";
import { ChatTypingSpace } from './ChatTypingSpace'
import { ReceiverChat } from './ReceiverChat'
import { SenderChat } from './SenderChat'

export const MyChatRightBar = (props) => {
    var chat = props.chat
    const space = {
        padding: "15px"
    }

    // let { id } = props.match.params;
    console.log(props)
    return (
            <div style={space}>
                {chat.chats.map((data) => {
                    if (data.sender == "0774766597") {
                        return <SenderChat message={data.message} />
                    }
                    else {
                        return <ReceiverChat message={data.message} />

                    }
                })}
                <ChatTypingSpace />
            </div>
    )
}
