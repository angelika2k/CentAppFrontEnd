import { Grid } from '@material-ui/core'
import React from 'react'
import { ChatTypingSpace } from './ChatTypingSpace'
import { ReceiverChat } from './ReceiverChat'
import { SenderChat } from './SenderChat'

export const MyChatRightBar = (props) => {
    var chat = props.chat
    const space = {
        padding: "15px",
        height: '72vh',
        backgroundImage: "url(https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa7846593e6ae0c9a0b.png)",
        overflowY: "scroll"
    }

    let id = window.location.href.split("/");
    id = id[id.length - 1];

    let filteredChat = chat.find(item => {
        if (item.id == id) {
            return item
        }
    })
    return (
        <div style={space}>
            {filteredChat.chats.map((data) => {
                if (data.sender == "0774766597") {
                    console.log(chat)
                    return (
                        <Grid container>
                            <Grid item sm={6} />
                            <Grid item sm={6}>
                                <SenderChat message={data.message} />
                            </Grid>
                        </Grid>
                    )
                }
                else {
                    return (
                        <Grid container>
                            <Grid item sm={6}>
                                <ReceiverChat message={data.message} />
                            </Grid>
                        </Grid>
                    )
                }
            })}
            <ChatTypingSpace />
        </div>
    )
}
