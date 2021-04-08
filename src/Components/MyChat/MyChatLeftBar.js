import React from 'react'
import { CentLogo } from './CentLogo'
import { ChatPerson } from './ChatPerson'

export const MyChatLeftBar = () => {


    const glassStyle = {
        background: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        borderRadius: "10px",
        border: " 1px solid rgba(255, 255, 255, 0.18)"
    }


    let names = ["John", "Angelika", "Amali", "Puli", "Booh", "Thanu", "Kitty"]

    return (
        <div>
                {names.map((chatname, i) => {
                    return <ChatPerson name={chatname} chat={'hi'} style={glassStyle} />
                })} 
        </div>
    )
}
