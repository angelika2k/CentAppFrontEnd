import React from 'react'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

export const ChatPerson = (props) => {

    const spacing = {
        padding: "15px"
    }
    const card = {
        padding: '2px',
        backgroundColor: '#ccffbd',
        margin: '2px',
        background: "#ccffbd",
        boxShadow: "0 8px 15px 0 rgba(31, 38, 135, 0.37)",
    }


    return (
        <div>
            <Link to={"/mychat/"+props.chatId}>
                <Grid container style={card}>
                    <Grid item sm={3} style={spacing}>
                        <Avatar alt="Name" src="https://www.attitudestatus.org/wp-content/uploads/2020/07/dp-whatsapp-9-300x300.jpg" />
                    </Grid>
                    <Grid item sm={6}>
                        <h4>{props.name}<br />
                            <small>{props.chat}</small>
                        </h4>
                    </Grid>
                </Grid>
            </Link>
        </div>
    )
}
