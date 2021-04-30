import React from 'react'
import { ClassNames } from '../StudentViewCenter/ClassNames'


let names = ["CSS", "HTML", "React", "Java", "JavaScript", "PHP"]

export default function TeacherLeftView() {

    const style = {
        paddingTop: "50px",
        height: '100vh'
    }

    return (
        <div >
            <a href="/techview">
                <ClassNames name="Common"/>
            </a>
            <a href="/TeachClsWork">
                {names.map((teachname, i) => {
                    return <ClassNames name={teachname}/>
                })}
            </a>
        </div>
    )
}
