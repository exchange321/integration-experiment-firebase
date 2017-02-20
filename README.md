# Integration Experiment (Firebase)
An experiment of integrating React, Redux, React Router, React Native, and Firebase.

## Current Status:
* React Native Integration Completed (Content Modification not included)
* Project on-hold until better Google Firebase library available for React Native
* Moving on to next experiment -> [Integration Experiment (Meteor)](https://github.com/exchange321/integration-experiment-meteor)

## Finished:
- [x] ~~Initialization~~
- [x] ~~Reformating Code~~
- [x] ~~Redux Integration (React Web)~~
- [x] ~~Google Firebase Integration (React Web)~~
- [x] ~~User Authentication (Firebase + React Web)~~
- [x] ~~React Native Integration (Content Modification not included)~~
    
## Todos:
* Core: 
    
* Optional:
    - [ ] Content Modification in Native App
    - [ ] Sharing Code between Web and Native Apps
    
## Records:
* As react-redux-firebase is not compatible with React Native and I could not make react-native-firestack work, raw Firebase is used.
* As raw Firebase's authentication does not support React Native, content modification in mobile version is postponed.
* As the ways used to access Google Firebase in web and mobile versions are different, sharing the same store/reducers/actions seem not to be practical anymore. Therefore, this is postponed till react-redux-firebase supports React Native.

## Firebase Database Format & Rules
```
{
  "rules": {
    "teachers": {
      "$key": {
        ".write": "auth.uid !== null",
        ".validate": "newData.hasChildren(['name', 'bio', 'img_src'])",
        "name": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "bio": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "img_src": {
          ".validate": "newData.isString() && newData.val().length > 0"
        }
      }
    },
    "topics": {
      "$key": {
        ".write": "auth.uid !== null",
        ".validate": "newData.hasChildren(['name'])",
        "name": {
        	".validate": "newData.isString() && newData.val().length > 0"
        },
      },
    },
    "courses": {
      "$key": {
        ".write": "auth.uid !== null",
        ".validate": "newData.hasChildren(['title', 'description', 'img_src', 'topic'])",
        "title": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "description": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "img_src": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "topic": {
          ".validate": "newData.isString() && newData.val().length > 0"
        }
      }
    },
    ".read": "true"
  }
}
```
