import React from 'react'
import { ChatPerson } from '../MyChat/ChatPerson'
import { ClassDeatils, Classes, ClassNames } from './ClassNames'



export const TutoryLeftBar = () => {


  
    let names = ["CSS", "HTML", "React", "Java", "JavaScript", "PHP"]
    let chat = ["hi dude"]

    return (
        <div>
            <a href="/stuview">
                 <ClassNames name="Common"  />
            </a>
            <a href="/class">
                {names.map((chatname, i) => {
                    return <ClassNames name={chatname}/>
                })}
            </a>
        </div>
    )
}
