/**
 * Created by Wayuki on 15-Feb-17.
 */
import React, { Component, PropTypes } from 'react';
import { Content, View, Text, Footer, FooterTab, Button } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as topicActions from '../../actions/topicAction';

import CoursePage from './course/CoursePage';

@connect(
    ({ coursesPage }) => ({
        ...coursesPage,
    }),
    dispatch => ({
        actions: bindActionCreators(topicActions, dispatch),
    }),
)
class CoursesPage extends Component {
    static propTypes = {
        topics: PropTypes.objectOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
        })).isRequired,
        activeTopic: PropTypes.string.isRequired,
        actions: PropTypes.shape({
            loadTopics: PropTypes.func.isRequired,
        }).isRequired,
    };

    componentDidMount() {
        this.props.actions.loadTopics();
    }

    render() {
        const { topics, activeTopic, actions } = this.props;
        const { filterTopic } = actions;
        const topicIds = Object.keys(topics);
        return (
            <View>
                <CoursePage topic={activeTopic} />
                <Footer>
                    {
                        topicIds.length > 0 &&
                        topicIds.map(topicId => (
                            <FooterTab key={topicId}>
                                <Button active={activeTopic === topicId} onPress={() => filterTopic(topicId)}>
                                    <Text>{ topics[topicId].name }</Text>
                                </Button>
                            </FooterTab>
                        ))
                    }
                </Footer>
            </View>
        );
    }
}

export default CoursesPage;
