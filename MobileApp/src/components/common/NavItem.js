/**
 * Created by Wayuki on 14-Feb-17.
 */
import React, { PropTypes } from 'react';
import { ListItem, Text, Body, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

const NavItem = ({ children, to, closeDrawer }) => (
    <ListItem
        onPress={() => {
            closeDrawer();
            Actions[to]();
        }}
    >
        <Body>
            <Text>{ children }</Text>
        </Body>
        <Right>
            <Icon name="arrow-round-forward" />
        </Right>
    </ListItem>
);

NavItem.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    closeDrawer: PropTypes.func.isRequired,
};

export default NavItem;
