import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

const foodCartReducer = (state = initialState.cartDetailsState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_DISPLAY_LIST:
            return { ...state, displayListView: true };

        case actionTypes.HIDE_DISPLAY_LIST:
            return { ...state, displayListView: false };

        case actionTypes.ADD_CART_VALUE:
            return {
                ...state,
                mainCartValue: state.mainCartValue + action.data,
            }

        default:
            return state;
    }
};

export default foodCartReducer;