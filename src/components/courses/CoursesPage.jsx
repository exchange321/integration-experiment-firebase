/**
 * Created by Wayuki on 08-Feb-17 0008.
 */
import React, { Component, PropTypes } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import { connect } from 'react-redux';

import { firebaseConnect, helpers } from 'react-redux-firebase';

import NavLink from '../common/NavLink.jsx';
import ModalContainer from '../common/ModalContainer.jsx';

const { isLoaded, isEmpty, dataToJS } = helpers;

@firebaseConnect([
    'topics',
])
@connect(
    ({ firebase }) => ({
        topics: dataToJS(firebase, 'topics'),
    }),
)
class CoursesPage extends Component {

    static propTypes = {
        children: PropTypes.element,
        topics: PropTypes.objectOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
        })),
    };

    static defaultProps = {
        children: (
            <div />
        ),
        topics: {},
    };

    showForm = (e) => {
        e.preventDefault();
        console.log('Showing Form...');
    };

    render() {
        const { topics, children } = this.props;
        return (
            <div className="main-content courses">
                <div className="course-header clearfix">
                    <h2>Courses</h2>
                    <ul className="course-nav">
                        {
                            isLoaded(topics) &&
                            !isEmpty(topics) &&
                            Object.keys(topics).map(topicId => (
                                <li key={topicId}>
                                    <NavLink to={`/courses/${topicId}`}>{ topics[topicId].name }</NavLink>
                                </li>
                            ))
                        }
                        <li className="add-topic"><a href="/" onClick={e => this.showForm(e)}>+ Add Topic</a></li>
                    </ul>
                </div>
                { children }
                <ModalContainer
                    isOpen={false}
                    toggle={() => {}}
                    handleFormSubmit={() => {}}
                    title="My Title"
                    bodyContent={<div>This is Body.</div>}
                    footerContent={<div>This is Footer.</div>}
                />
            </div>
        );
    }

}

export default CoursesPage;
