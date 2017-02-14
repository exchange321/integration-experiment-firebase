/**
 * Created by Wayuki on 11-Feb-17.
 */
import React, { Component, PropTypes } from 'react';
import { Drawer, Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DefaultRenderer } from 'react-native-router-flux';

import * as appActions from '../actions/appAction';

import AppHeader from './common/AppHeader';
import Sidebar from './common/Sidebar';

@connect(
    ({ appPage }) => ({
        ...appPage,
    }),
    dispatch => ({
        actions: bindActionCreators(appActions, dispatch),
    }),
)
class App extends Component {

    static propTypes = {
        drawerOpen: PropTypes.bool.isRequired,
        navigationState: PropTypes.shape({
            children: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string.isRequired,
            })).isRequired,
        }).isRequired,
        onNavigate: PropTypes.func.isRequired,
        actions: PropTypes.shape({
            triggerDrawer: PropTypes.func.isRequired,
        }).isRequired,
    };

    render() {
        const state = this.props.navigationState;
        const activePage = state.children[state.children.length - 1];
        return (
            <Drawer
                open={this.props.drawerOpen}
                type="overlay"
                content={<Sidebar closeDrawer={() => this.props.actions.triggerDrawer(false)} />}
                tapToClose
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                tweenHandler={ratio => ({
                    main: {
                        opacity: (2 - ratio) / 2,
                    },
                })}
            >
                <Container>
                    <AppHeader
                        title={activePage.title}
                        openDrawer={() => this.props.actions.triggerDrawer(true)}
                    />
                    <DefaultRenderer
                        navigationState={activePage}
                        onNavigate={this.props.onNavigate}
                    />
                </Container>
            </Drawer>
        );
    }
}

export default App;
