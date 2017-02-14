/**
 * Created by Wayuki on 11-Feb-17.
 */
import * as nativeBase from 'native-base';
import platform from './variables/platform';

const defaultTheme = nativeBase.getTheme(platform);

const theme = {
    ...defaultTheme,
    // SIDEBAR - START
    'NativeBase.ViewNB': {
        '.sidebar': {
            flex: 1,
            padding: 15,
            backgroundColor: 'white',
        },
    },
    // SIDEBAR - END

    // GENERAL (HOMEPAGE, ABOUT) - START
    'NativeBase.Content': {
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
    },
    // GENERAL (HOMEPAGE, ABOUT) - END
};

export default theme;
