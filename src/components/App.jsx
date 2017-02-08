import React, { Component, PropTypes } from 'react';
import toastr from 'toastr';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as notificationActions from '../actions/appAction';

import NavLink from './common/NavLink.jsx';

@connect(
    ({ appPage }) => ({
        ...appPage,
    }),
    dispatch => ({
        actions: bindActionCreators(notificationActions, dispatch),
    }),
)
class App extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        notification: PropTypes.shape({
            hasNotification: PropTypes.bool.isRequired,
            type: PropTypes.string.isRequired,
            msg: PropTypes.string.isRequired,
        }).isRequired,
        redirect: PropTypes.shape({
            hasRedirect: PropTypes.bool.isRequired,
            uri: PropTypes.string.isRequired,
        }).isRequired,
        actions: PropTypes.shape({
            resetNotification: PropTypes.func.isRequired,
            resetRedirect: PropTypes.func.isRequired,
        }).isRequired,
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.notification.hasNotification) {
            const { type, msg } = nextProps.notification;
            switch (type) {
                case 'success': {
                    toastr.success(msg);
                    break;
                }
                case 'error': {
                    toastr.error(msg);
                    break;
                }
                default: {
                    toastr.info(msg);
                    break;
                }
            }
            this.props.actions.resetNotification();
        }
        if (nextProps.redirect.hasRedirect) {
            const { uri } = nextProps.redirect;
            browserHistory.push(uri);
            this.props.actions.resetRedirect();
        }
    }

    render() {
        return (
            <div className="container">
                <header>
                    <span className="icn-logo"><i className="material-icons">code</i></span>
                    <ul className="main-nav">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/teachers">Teachers</NavLink></li>
                        <li><NavLink to="/courses">Courses</NavLink></li>
                    </ul>
                </header>
                { this.props.children }
            </div>
        );
    }
}

export default App;
