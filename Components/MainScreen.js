import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';
// import { Icon } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation';

import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

class MainScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return <AppTabNavigator />;
  }
}
export default MainScreen;

const AppTabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
    },
    SearchTab: {
      screen: SearchTab,
    },
    AddMediaTab: {
      screen: AddMediaTab,
    },
    LikesTab: {
      screen: LikesTab,
    },
    ProfileTab: {
      screen: ProfileTab,
    },
  },
  {
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
          },
        }),
      },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true,
    },
  },
);
