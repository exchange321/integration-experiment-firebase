/**
 * Created by Wayuki on 11-Feb-17.
 */
import React, { Component, PropTypes } from 'react';
import { Drawer, Container } from 'native-base';
import { DefaultRenderer } from 'react-native-router-flux';

import AppHeader from './common/AppHeader';
import Sidebar from './common/Sidebar';

class App extends Component {

    static propTypes = {
        navigationState: PropTypes.shape({
            open: PropTypes.bool.isRequired,
            children: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string.isRequired,
            })).isRequired,
        }).isRequired,
        onNavigate: PropTypes.func.isRequired,
    };

    render() {
        const state = this.props.navigationState;
        const activePage = state.children[state.children.length - 1];
        return (
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                open={state.open}
                type="overlay"
                content={<Sidebar closeDrawer={() => this._drawer._root.close()} />}
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
                    <AppHeader title={activePage.title} />
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
