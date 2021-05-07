import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';



const useStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1)
    },
    cardContainer: {
        marginTop: theme.spacing(4)
    }
}))

export default function Activities(Card) {
    const classes = useStyle();

    const styleSender = {
        padding: '3px',
        color: 'black',
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
    }

    return (
        <div>
            <div style={styleSender}>
                <Paper className={classes.card} style={{ backgroundColor: '#c7c1c1', color: 'black' }}>
                    React Assignment
                </Paper>
            </div>
        </div>
    )
}
