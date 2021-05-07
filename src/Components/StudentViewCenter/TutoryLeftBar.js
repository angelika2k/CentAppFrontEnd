import React from 'react'
import { ChatPerson } from '../MyChat/ChatPerson'
import { ClassDeatils, Classes, ClassNames } from './ClassNames'



export const TutoryLeftBar = () => {


    const leftContainer = {
        overflowY: "scroll"
    }

  
    let names = ["CSS", "HTML", "React", "Java", "JavaScript", "PHP"]
    let teachers=["Danu", "Angel" ,"Amali", "Anne", "Rex", "Vino"]

    return (
        <div style={leftContainer}>
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
