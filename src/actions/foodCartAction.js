import * as actionTypes from './actionTypes';

export function changeDisplay() {
    return {
        type: actionTypes.LOAD_ONE_SUCCEEDED,
    };
}

export function updateCartValue(value) {
    return {
        type: actionTypes.ADD_CART_VALUE,
        data: value,
    }
}

export function displayListView() {
    return {
        type: actionTypes.SHOW_DISPLAY_LIST,
    }
}

export function hideListView() {
    return {
        type: actionTypes.HIDE_DISPLAY_LIST,
    }
}