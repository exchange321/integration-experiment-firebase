/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
export default {
    teacherPage: {
        editing: false,
        modal: {
            modalTitle: 'New Teacher',
            saveButtonText: 'Add Teacher',
            teacher: {
                name: '',
                bio: '',
                img_src: '',
            },
            errors: {},
            isSavingTeacher: false,
            isDeletingTeacher: false,
        },
        editingTeacherId: '',
    },
    notification: {
        hasNotification: false,
        type: '',
        msg: '',
    },
    topicPage: {},
    courses: [],
};
