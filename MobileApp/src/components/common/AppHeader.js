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
import { Actions } from 'react-native-router-flux';

const AppHeader = ({ title }) => (
    <Header>
        <Left>
            <Button
                transparent
                onPress={() => Actions.refresh({
                    key: 'root',
                    open: true,
                })}
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
};

export default AppHeader;
