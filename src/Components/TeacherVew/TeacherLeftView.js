import React from 'react'
import { ClassNames } from '../StudentViewCenter/ClassNames'


let names = ["CSS", "HTML", "React", "Java", "JavaScript", "PHP"]

export default function TeacherLeftView() {

    const style = {
        paddingTop: "50px",
        height: '100vh'
    }

    const glassStyle = {
        background: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        borderRadius: "10px",
        border: " 1px solid rgba(255, 255, 255, 0.18)",
        textAlign: "center"
    }

    const glassStyle1 = {
        background: "#f4eeed",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        borderRadius: "10px",
        border: " 1px solid rgba(255, 255, 255, 0.18)",
        textAlign: "center"
    }
    return (
        <div >
            <a href="/techview">
                <ClassNames name="Common" style={glassStyle} />
            </a>
            <a href="/TeachClsWork">
                {names.map((teachname, i) => {
                    return <ClassNames name={teachname} style={glassStyle} />
                })}
            </a>
        </div>
    )
}
