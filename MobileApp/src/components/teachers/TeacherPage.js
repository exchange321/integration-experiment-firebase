/**
 * Created by Wayuki on 14-Feb-17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DeckSwiper, Text, Container } from 'native-base';
import { View } from 'react-native';

import * as teacherActions from '../../actions/teacherAction';

import TeacherItem from './TeacherItem';

@connect(
    ({ teacherPage }) => ({
        ...teacherPage,
    }),
    dispatch => ({
        actions: bindActionCreators(teacherActions, dispatch),
    }),
)
class TeacherPage extends Component {
    static propTypes = {
        teachers: PropTypes.objectOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            bio: PropTypes.string.isRequired,
            img_src: PropTypes.string.isRequired,
        })).isRequired,
        actions: PropTypes.shape({
            loadTeachers: PropTypes.func.isRequired,
        }).isRequired,
    };

    componentDidMount() {
        this.props.actions.loadTeachers();
    }

    render() {
        const { teachers } = this.props;
        const teacherIds = Object.keys(teachers);
        return (
            <Container teacherPage>
                <View style={{ padding: 30, flex: 1, justifyContent: 'space-between' }}>
                    <View>
                        {
                            teacherIds.length > 0 &&
                            <DeckSwiper
                                dataSource={teacherIds}
                                renderItem={
                                    teacherId => (
                                        <TeacherItem teacher={teachers[teacherId]} />
                                    )
                                }
                            />
                        }
                    </View>
                    <Text>Swipe LEFT and RIGHT for next teacher.</Text>
                </View>
            </Container>
        );
    }
}

export default TeacherPage;
