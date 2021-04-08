import React from 'react'
import { ChatTypingSpace } from './ChatTypingSpace'
import { ReceiverChat } from './ReceiverChat'
import { SenderChat } from './SenderChat'

export const MyChatRightBar = () => {

    const space = {
        padding:"15px"
    }

    return (
        <div style = {space}>
            <ReceiverChat/>
            <SenderChat/>
            <ChatTypingSpace/>
        </div>
    )
}
