import React from 'react';
import TileView from '../views/TileView';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as foodCartActions from '../../actions/foodCartAction';

class TileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.state = {
            cartValue: 0
        }
    }

    handleIncrement(event) {
        if (event) {
            this.setState((state) => {
                return {
                    cartValue: state.cartValue + 1,
                }
            })
        }
    }

    handleDecrement(event) {
        if (event) {
            if (this.state.cartValue > 0) {
                this.setState((state) => {
                    return {
                        cartValue: state.cartValue - 1,
                    }
                })
            }
        }
    }

    handleAddToCart(event) {
        if (event) {
            this.props.foodCartActions.updateCartValue(this.state.cartValue);
        }
    }

    render() {
        const { cartValue } = this.state;
        return (
            <TileView handleAddToCart={this.handleAddToCart} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement}
                cartValue={cartValue} {...this.props}/>
        );
    }
}

const mapStateToProps = state => ({
    displayListView: state.displayListView,
});

const mapDispatchToProps = dispatch => ({
    foodCartActions: bindActionCreators(foodCartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TileContainer);