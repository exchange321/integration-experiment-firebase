/**
 * Created by Wayuki on 11-Feb-17.
 */
import React, { PropTypes } from 'react';
import {
    Header,
    Left,
    Button,
    Body,
    Title,
    Right,
    Icon,
} from 'native-base';

const AppHeader = ({ title, openDrawer }) => (
    <Header>
        <Left>
            <Button
                transparent
                onPress={openDrawer}
            >
                <Icon name="menu" />
            </Button>
        </Left>
        <Body>
            <Title>{ title }</Title>
        </Body>
        <Right />
    </Header>
);

AppHeader.propTypes = {
    title: PropTypes.string.isRequired,
    openDrawer: PropTypes.func.isRequired,
};

export default AppHeader;
