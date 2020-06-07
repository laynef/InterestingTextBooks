import * as React from 'react';
import { connect } from 'react-redux';
import { getBookTitles, getFullText } from '../redux/actions/books';
import { startCase } from 'lodash';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { dispatch } = this.props;
        getBookTitles(dispatch);
    }

    fetchBookData = (file_name) => {
        const { dispatch } = this.props;
        getFullText(dispatch, file_name);
    }

    render() {
        const { titles } = this.props;
        return (
            <div className="w-100 bg-white h-5">
                {Array.isArray(titles) && titles.map((e, i) => (
                    <div key={i} className="link" onClick={() => this.fetchBookData(e.file_name)}>
                        {startCase(e.title)}
                    </div>
                ))}
            </div>
        )
    }

}

export default connect((state) => ({
    titles: state.titles.data,
}))(Header);