import * as React from 'react';
import { connect } from 'react-redux';
import { getBookTitles, getFullText } from '../redux/actions/books';
import { startCase } from 'lodash';


function Application({ dispatch }) {
    let [book, setBook] = React.useState('');
    let [titles, setTitles] = React.useState(false);
    let [effect, setEffect] = React.useState(false);

    async function fetchData() {
        try {
            const { data } = await getBookTitles(dispatch);
            setTitles(data);
        } catch (error) {
            setEffect(!effect);
        }
    }

    async function fetchBookData(file_name) {
        const response = await getFullText(dispatch, file_name);
        setBook(response);
    }

    React.useEffect(() => {
        fetchData();
    }, [effect]);

    return (
        <div className="app bg-light">
            <div className="w-100 bg-white h-5 card shadow pl-3 pr-3">
                <div className="d-flex flex-row align-items-center h-100 w-100">
                    {Array.isArray(titles) && titles.map((e, i) => (
                        <p key={i} className="text-black" onClick={() => fetchBookData(e.file_name)}>
                            {startCase(e.title)}
                        </p>
                    ))}
                </div>
            </div>
            <div className="w-100 bg-light p-5">
                <p style={{ fontSize: '1.5rem' }} className="text-center" dangerouslySetInnerHTML={{ __html: book }} />
            </div>
        </div>
    );
};

export default connect(() => ({
}))(Application)