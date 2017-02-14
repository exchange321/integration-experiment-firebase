/**
 * Created by Wayuki on 14-Feb-17.
 */
import React, { PropTypes } from 'react';
import { ListItem, Text, Body, Right, Icon } from 'native-base';

const NavItem = ({ children, to, closeDrawer }) => (
    <ListItem
        onPress={() => {
            closeDrawer();
            to();
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
    to: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
};

export default NavItem;
