import { Divider } from '@material-ui/core';
import React from 'react'

import { AssignmentReceived } from '../Assignment/AssignmentReceived';

export const TutoryRightBar = () => {
    const space = {
        padding: "15px"
    }
    const Marginspace={
        margin:"5px"
    }
    const assignmentsSample = [{
        'name': "Assignment For React",
        'duedate':"tommorow",
        "description": "Every students must make a compleate website in react. The website should be same like I attatched here as attatchment."
    },{
        'name': "Login Validation (Assignment)",
        'duedate':"today",
        "description": "Every students need to creat a login form in react and validate the form correctly. And students should update before today night."
    }]

    return (
        <div style={space}>
            {assignmentsSample.map((assignment,i)=>{
                return <span><AssignmentReceived assignment={assignment}/> <Divider style={Marginspace}/></span>
            })}

        </div>
    )
}