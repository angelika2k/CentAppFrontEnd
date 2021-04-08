import React from 'react'
import { ChatPerson } from '../MyChat/ChatPerson'
import { ClassDeatils, Classes, ClassNames } from './ClassNames'



export const TutoryLeftBar = () => {


    const glassStyle = {
        background: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        borderRadius: "10px",
        border: " 1px solid rgba(255, 255, 255, 0.18)"
    }


    let names = ["CSS", "HTML", "React", "Java", "JavaScript", "PHP"]
    let chat = ["hi dude"]

    return (
        <div>
            <a href="/stuview">
                 <ClassNames name="Common" style={glassStyle} />
            </a>
            <a href="/class">
                {names.map((chatname, i) => {
                    return <ClassNames name={chatname} style={glassStyle} />
                })}
            </a>
        </div>
    )
}
