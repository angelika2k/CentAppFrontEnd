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

    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    React Assignment
                        </Paper>
            </div>
        </div>
    )
}
