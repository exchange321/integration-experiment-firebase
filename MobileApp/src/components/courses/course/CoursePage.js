/**
 * Created by Wayuki on 15-Feb-17.
 */
import React, { Component, PropTypes } from 'react';
import { Content, View, Text, Card, CardItem, Thumbnail, Left, Body, H3 } from 'native-base';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../../actions/courseAction';

@connect(
    ({ coursePage }) => ({
        ...coursePage,
    }),
    dispatch => ({
        actions: bindActionCreators(courseActions, dispatch),
    }),
)
class CoursePage extends Component {
    static propTypes = {
        courses: PropTypes.objectOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            img_src: PropTypes.string.isRequired,
            topic: PropTypes.string.isRequired,
        })).isRequired,
        topic: PropTypes.string.isRequired,
        actions: PropTypes.shape({
            loadCourses: PropTypes.func.isRequired,
        }).isRequired,
    };

    componentDidMount() {
        const dataEvent = this.props.actions.loadCourses();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.topic !== this.props.topic) {
            this.props.actions.loadCourses(nextProps.topic);
        }
    }

    render() {
        const { courses } = this.props;
        const courseIds = Object.keys(courses);
        return (
            <Content general>
                <View>
                    {
                        courseIds.length > 0 &&
                        courseIds.map(courseId => {
                            const course = courses[courseId];
                            return (
                                <Card key={courseId}>
                                    <CardItem>
                                        <Left>
                                            <Image style={{ resizeMode: 'cover', width: 50, height: 55 }} source={{ uri: course.img_src }}/>
                                            <Body>
                                                <H3>{ course.title }</H3>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem content>
                                        <Text>{ course.description }</Text>
                                    </CardItem>
                                </Card>
                            );
                        }) ||
                        <Text>No available course in this category.</Text>
                    }
                </View>
            </Content>
        );
    }
}

export default CoursePage;
