/**
 * Created by Wayuki on 14-Feb-17.
 */
import React, { PropTypes } from 'react';
import { View } from 'native-base';
import { Image } from 'react-native';
import NavItem from './NavItem';

const Sidebar = ({ closeDrawer }) => (
    <View sidebar>
        <Image style={{ resizeMode: 'cover', height: 150, width: null }} source={require('../../images/reactive-nativingitup-png-800x600_q96.png')} />
        <NavItem to="home" closeDrawer={closeDrawer}>Home</NavItem>
        <NavItem to="about" closeDrawer={closeDrawer}>About</NavItem>
        <NavItem to="teachers" closeDrawer={closeDrawer}>Teacher</NavItem>
        <NavItem to="courses" closeDrawer={closeDrawer}>Courses</NavItem>
    </View>
);

Sidebar.propTypes = {
    closeDrawer: PropTypes.func.isRequired,
};

export default Sidebar;

