import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';
import './stylesheet.css';

const ListOptionsView = ({ displayListView }) => {
    return (
        <Fade in={displayListView} timeout="auto" unmountOnExit>
            <div className="list-view">
                <List component="nav">
                    <ListItem button>
                        <ListItemText primary="Restaurants" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Cuisines" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </div>
        </Fade>
    )
}

export default ListOptionsView;