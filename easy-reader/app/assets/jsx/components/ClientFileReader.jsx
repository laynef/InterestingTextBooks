import * as React from 'react';
import { connect } from 'react-redux';


function ClientFileReader({ htmlText }) {
    return (
        <div className="w-100">
            <div dangerouslySetInnerHTML={{ __html: htmlText }} />
        </div>
    )
}

export default connect(() => ({}))(ClientFileReader);