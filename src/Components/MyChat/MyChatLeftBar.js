import React from 'react'
import { ChatPerson } from './ChatPerson'


export const MyChatLeftBar = (props) => {
    var ChatList = props.chats

    const space = {
        height: '76vh',
        overflowY: "scroll"
    }
    return (
        <div style={space}>
            { ChatList.map((chat, i) => {
                if (chat.members[0] == "0774766597") {
                    var lastMessage = chat.chats[chat.chats.length - 1].message
                    if (lastMessage.length >= 20) {
                        lastMessage = lastMessage.slice(0, 19) + "..."
                    }
                    return <ChatPerson name={chat.members[1]} chat={lastMessage} chatId={chat.id} />
                }
                else {
                    var lastMessage = chat.chats[chat.chats.length - 1].message
                    if (lastMessage.length >= 20) {
                        lastMessage = lastMessage.slice(0, 19) + "..."
                    }
                    return <ChatPerson name={chat.members[0]} chat={lastMessage} chatId={chat.id} />
                }
            })}
        </div>
    )

}
