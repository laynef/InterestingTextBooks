import * as React from 'react';
import { connect } from 'react-redux';
import { getBookTitles, getFullText } from '../redux/actions/books';
import { startCase } from 'lodash';


function Header({ dispatch }) {
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

    React.useEffect(() => {
        fetchData();
    }, [effect]);

    return (
        <div className="w-100 bg-white h-5">
            {Array.isArray(titles) && titles.map((e, i) => (
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