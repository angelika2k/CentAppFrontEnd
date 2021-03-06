import { Divider } from '@material-ui/core';
import React from 'react'


import { StudyMaterial } from '../Assignment/StudyMaterial';
import { AssignmentReceived } from '../Assignment/AssignmentReceived'
import { Class } from '../Assignment/Class';

export const TutoryRightBar = () => {
    // const space = {
    //     padding: "30px"
    // }
    const Marginspace = {
        margin: "5px"
    }

    const rightContainer = {
        height: '76vh',
        paddingLeft: "30px",
        paddingTop:'10px',
        // transform: 'rotateY(180deg)',
        direction:'ltr',
        overflowY: "auto",
        width: '135vh',
        backgroundColor: 'white',
        backgroundImage: "url(https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa7846593e6ae0c9a0b.png)",
    }

    const classUpdateCollection = {
        "id": "classUpdate001",
        "classUpdate": [

            {
                "id": "update002",
                "type": "assignment",
                "assignmentHead": "JS",
                "assignmentMessage": "assignment",
                "dueDate": "2021.04.30"
            },
            {
                "id": "update003",
                "type": "assignment",
                "assignmentHead": "ReactMeterial",
                "assignmentMessage": "assignment",
                "dueDate": "2021.04.30"
            },
            {
                "id": "update004",
                "type": "class",
                "classMessage": "Message",
                "classDate&Time": "2021.04.26 7pm",
                "place": "zoom link"
            },
            {
                "id": "update005",
                "type": "class",
                "classMessage": "Message",
                "classDate&Time": "2021.04.26 7pm",
                "place": "zoom link"
            },
            {
                "id": "update006",
                "type": "studyMaterial",
                "StudyMetrial": "React tutorial",
                "Link": ""

            },
            {
                "id": "StudyMetrial002",
                "type": "studyMaterial",
                "StudyMetrial": "jpg"
            },
            {
                "id": "ClassTym003",
                "type": "studyMaterial",
                "StudyMetrial": "video"
            },

            {
                "id": "StudyMetrial003",
                "type": "studyMaterial",
                "StudyMetrial": "video"
            }
        ],

    }


    return (
        <div style={rightContainer}>
                {classUpdateCollection.classUpdate.map((classUpdate, i) => {
                    if (classUpdate.type == "assignment") {
                        return <span><AssignmentReceived classUpdate={classUpdate} /> <Divider style={Marginspace} /></span>
                    }
                    else if (classUpdate.type == "studyMaterial") {
                        return <span><StudyMaterial classUpdate={classUpdate} /> <Divider style={Marginspace} /></span>
                    }
                    else if (classUpdate.type == "class") {
                        return <span><Class classUpdate={classUpdate} /><Divider style={Marginspace} /></span>
                    }
                })}
        </div>
    )
}