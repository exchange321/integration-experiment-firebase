/**
 * Created by Wayuki on 14-Feb-17.
 */
import React, { PropTypes } from 'react';
import { Card, CardItem, Body, Text, H2 } from 'native-base';
import { Image } from 'react-native';

const TeacherItem = ({ teacher: { name, bio, img_src } }) => (
    <Card teacherItem>
        <CardItem cardBody>
            <Image style={{ resizeMode: 'cover', width: null, flex: 1, height: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: img_src }} />
        </CardItem>
        <CardItem content>
            <Body>
                <H2>{ name }</H2>
                <Text>{ bio }</Text>
            </Body>
        </CardItem>
    </Card>
);

TeacherItem.propTypes = {
    teacher: PropTypes.shape({
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        img_src: PropTypes.string.isRequired,
    }).isRequired,
};

export default TeacherItem;
