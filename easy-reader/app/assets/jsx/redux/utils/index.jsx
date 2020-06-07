import axios from "axios";


export const getCSRFToken = () => typeof document !== 'undefined' && document.querySelector('meta[name="csrf-token"]').getAttribute('content');

export const axiosGet = async (dispatch, actionName, url) => {
    let payload = { data: null, error: null, pending: true };
    const headers = { 'X-CSRF-Token': getCSRFToken() };
    dispatch({ type: actionName + '_PENDING', payload: payload });
    try {
        const { data } = await axios.get('/api/v1' + url);
        payload.pending = null;
        payload.data = data;
        dispatch({ type: actionName + '_SUCCESS', payload: payload });
        return data;
    } catch (error) {
        payload.pending = null;
        payload.error = error;
        dispatch({ type: actionName + '_ERROR', payload: payload });
        return error;
    }
};

export const parseQueryString = (object = {}) => {
    let queryParser = '';

    for (let key in object) {
        queryParser += (key + '=' + object[key]);
    }

    return queryParser.length > 0 ? '?' + queryParser : queryParser;
};

export const createActionTypes = (array) => array.reduce((arr, name) => {
    arr.push(name + '_ERROR', name + '_PENDING', name + '_SUCCESS');
    return arr;
}, []);