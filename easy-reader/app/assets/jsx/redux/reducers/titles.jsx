import actionTypes from '../actionTypes/titles';


const INITIAL_STATE = {
    data: null,
    pending: null,
    error: null,
}

export default function(state = INITIAL_STATE, action) {
    const type = actionTypes.find(e => e === action && action.type);
    if (type && action && action.payload) state = action.payload;
    return state;
}
