import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Grid } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PublishIcon from '@material-ui/icons/Publish';
import AlarmIcon from '@material-ui/icons/Alarm';

export const Class = (props) => {


    const styleReceiver = {
        padding: '10px',
        // border: '1px outset #1C6EA4',
        borderRadius: '0px 40px 40px 35px',
        minWidth: '400px',
        float: 'left',
        textAlign: 'right',
        backgroundColor: 'powderblue',
        background: "#efd9d1",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: " blur(4px)",
        border: " 1px solid rgba(255, 255, 255, 0.18)",
        textAlign: "center"
    }
    const threeDots = {
        // width:'30px',
        // backgroundColor:'pink',
        // borderRadius:'30px 30px',
        // border:'1px solid red'
        marginLeft: '-14px'
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const textStyle = {
        textAlign: "center"
    }
    return (
        <div>
            <Grid container>
                <Grid item sm={11}>
                    <span style={styleReceiver}>
                        <p>{props.classUpdate.type}</p>
                    </span>
                </Grid>
                <Grid item sm={1}>
                    <IconButton style={threeDots} onClick={handleClick}>
                        <MoreHorizIcon />
                    </IconButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    > 
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <ListItemIcon>
                                    <PublishIcon />
                                </ListItemIcon>
                                <ListItemText primary="Upload my Assignment" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <AlarmIcon />
                                </ListItemIcon>
                                <ListItemText primary="Remind me within 1 hour" />
                            </ListItem>
                        </List>

                    </Popover>
                </Grid>
            </Grid>
        </div>
    )
}
