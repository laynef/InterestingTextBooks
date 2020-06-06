import * as React from 'react';
import { connect } from 'react-redux';


class ClientFileReader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { htmlText } = this.props;
        return (
            <div className="w-100">
                <div dangerouslySetInnerHTML={{ __html: htmlText }} />
            </div>
        )
    }
}

export default connect(() => ({}))(ClientFileReader);