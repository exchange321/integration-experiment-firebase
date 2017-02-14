/**
 * Created by Wayuki on 14-Feb-17.
 */
import React, { PropTypes } from 'react';
import { View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import NavItem from './NavItem';

const Sidebar = ({ closeDrawer }) => (
    <View sidebar>
        <NavItem to={Actions.home} closeDrawer={closeDrawer}>Home</NavItem>
        <NavItem to={Actions.about} closeDrawer={closeDrawer}>About</NavItem>
    </View>
);

Sidebar.propTypes = {
    closeDrawer: PropTypes.func.isRequired,
};

export default Sidebar;

