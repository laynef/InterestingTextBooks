import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';


class Application extends Component {
    render() {
        if (typeof window === 'undefined') return null;
        
        return (
            <div className="app bg-light">
                <Header />
            </div>
        );
    }
};

export default connect(() => ({}))(Application)