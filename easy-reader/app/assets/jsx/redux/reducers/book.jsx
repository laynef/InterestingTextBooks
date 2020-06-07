import actionTypes from '../actionTypes/book';


const INITIAL_STATE = {
    data: null,
    pending: null,
    error: null,
}

export default function(state = INITIAL_STATE, action) {
    const type = actionTypes.find(e => e === action.type);
    if (type && action && action.payload) state = action.payload;
    return state;
}
