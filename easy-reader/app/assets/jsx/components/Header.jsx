import * as React from 'react';
import { connect } from 'react-redux';
import { getBookTitles, getFullText } from '../redux/actions/books';
import { startCase } from 'lodash';


function Header({ dispatch, titles }) {
    React.useCallback(() => {
        getBookTitles(dispatch);
    }, [dispatch, titles]);

    return (
        <div className="w-100 bg-white h-5">
            {!!titles && Array.isArray(titles.data) && titles.data.map((e, i) => (
                <p key={i} className="text-black" onClick={() => getFullText(dispatch, e.file_name)}>
                    {startCase(e.title)}
                </p>
            ))}
        </div>
    )
}

export default connect((state) => ({
    titles: state.titles.data,
}))(Header);