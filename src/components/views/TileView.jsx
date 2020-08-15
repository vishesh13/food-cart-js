import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PlusIcon from '@material-ui/icons/Add';
import MinusIcon from '@material-ui/icons/Remove';
import './stylesheet.css';

const TileView = ({ handleAddToCart, handleDecrement, handleIncrement, cartValue, price }) => {
    return (
        <span>
            <IconButton onClick={handleDecrement}>
                <p style={{ color: 'white' }}>{`₹${price}`}</p>
                <MinusIcon className="white-color" />
            </IconButton>
            <Button variant="outlined" color="inherit" onClick={handleAddToCart}>
                Add to Cart
            </Button>
            <IconButton onClick={handleIncrement}>
                <PlusIcon className="white-color" />
            </IconButton>
            <IconButton style={{ color: 'white' }}>
                {cartValue}
            </IconButton>
        </span>
    )
}

export default TileView;