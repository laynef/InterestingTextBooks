import { axiosGet, parseQueryString } from '../utils';


export const getBookTitles = (dispatch) => axiosGet(dispatch, 'GET_ALL_TITLES', '/list-books');

export const getPaginationBook = (dispatch, file_name, page, lines_per_page) => {
    const url = `/books/${file_name}${parseQueryString({ page, lines_per_page })}`;
    return axiosGet(dispatch, 'GET_BOOK_DATA', url);
};

export const getFullText = (dispatch, file_name) => {
    const url = `/full-text/${file_name}`;
    return axiosGet(dispatch, 'GET_BOOK_DATA', url);
};
