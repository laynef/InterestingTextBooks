import * as React from 'react';
import { connect } from 'react-redux';
import { getBookTitles, getFullText } from '../redux/actions/books';
import { startCase } from 'lodash';
import Loading from 'react-md-spinner';


function Application({ dispatch }) {
    let [book, setBook] = React.useState('');
    let [loading, setLoading] = React.useState(false);
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
        setLoading(true);
        try {
            const response = await getFullText(dispatch, file_name);
            setBook(response);
        } catch (error) {
            setBook(`<br><br>Please try again, your book could not downloaded.`);
        }
        setLoading(false);
    }

    React.useEffect(() => {
        fetchData();
    }, [effect]);

    return (
        <div className="app bg-light">
            <div className="w-100 bg-white h-5 card shadow pl-3 pr-3 header">
                <div className="d-flex flex-row align-items-center h-100 w-100">
                    {Array.isArray(titles) && titles.map((e, i) => (
                        <a key={i} href="javascript:void(0);" className="text-black d-flex flex-column justify-content-center h-100" onClick={() => fetchBookData(e.file_name)}>
                            {startCase(e.title)}
                        </a>
                    ))}
                </div>
            </div>
            <div className="w-100 bg-light p-5 scroll-container">
                {loading && <div className="w-100 h-50 p-5 d-flex flex-row justify-content-center"><Loading /></div>}
                {!loading && <p style={{ fontSize: '1.5rem' }} className="text-center" dangerouslySetInnerHTML={{ __html: book }} />}
            </div>
        </div>
    );
};

export default connect(() => ({
}))(Application)