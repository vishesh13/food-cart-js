import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import './stylesheet.css';

/**
 * React component containing header view elements
 */
const MenuItemsView = ({ handleListView, mainCartValue }) => {
    return (
        <div>
            <AppBar position="static" color="white" className="app-bar" style={{ width: "98%" }}>
                <Toolbar>
                    <IconButton edge="start" className="menu-view" color="inherit" aria-label="menu" onClick={handleListView}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className="title" variant="h6" className="title">
                        Food Cart
                    </Typography>
                    <IconButton id="CART_BUTTON" edge="end" className="menu-view" color="inherit" aria-label="menu" style={{ fontSize: '50px' }}>
                        <Badge badgeContent={mainCartValue} color="primary" showZero>
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div >
    )
}

export default MenuItemsView;