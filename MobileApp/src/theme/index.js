/**
 * Created by Wayuki on 11-Feb-17.
 */
import * as nativeBase from 'native-base';
import platform from './variables/platform';

const defaultTheme = nativeBase.getTheme(platform);
const theme = {
    ...defaultTheme,
    'NativeBase.ViewNB': {
        ...defaultTheme['NativeBase.ViewNB'],
        // SIDEBAR - START
        '.sidebar': {
            flex: 1,
            padding: 15,
            backgroundColor: 'white',
        },
        // SIDEBAR - END
    },

    'NativeBase.Content': {
        ...defaultTheme['NativeBase.Content'],

        // GENERAL (HOMEPAGE, ABOUT) - START
        '.general': {
            'NativeBase.ViewNB': {
                padding: 15,
                'NativeBase.H1': {
                    marginBottom: 15,
                },
                'NativeBase.H2': {
                    marginBottom: 15,
                },
                'NativeBase.Text': {
                    marginBottom: 15,
                },
            },
        },
        // GENERAL (HOMEPAGE, ABOUT) - END
    },

    'NativeBase.Card': {
        ...defaultTheme['NativeBase.Card'],

        // TEACHER ITEM - START
        '.teacherItem': {
            marginTop: 15,
            marginBottom: 15,
            borderRadius: 10,
            'NativeBase.CardItem': {
                '.content': {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                },
                '.cardBody': {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                },
                'NativeBase.Body': {
                    'NativeBase.H2': {
                        marginBottom: 10,
                    },
                    'NativeBase.Text': {
                        textAlign: 'justify',
                    },
                },
            },
        },
        // TEACHER ITEM - END
    },

    'NativeBase.Container': {
        ...defaultTheme['NativeBase.Container'],

        // TEACHER PAGE - START
        '.teacherPage': {
            'NativeBase.Text': {
                fontSize: 12,
                textAlign: 'center',
                color: '#aaa',
            },
        },
        // TEACHER PAGE - END
    },
};

export default theme;
