import React, { Component } from 'react';
import { connect } from 'react-redux';


class Application extends Component {
    render() {
        return (
            <div className="app bg-light">

            </div>
        );
    }
};

export default connect(() => ({}))(Application)