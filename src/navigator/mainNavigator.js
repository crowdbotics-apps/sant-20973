import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile121546Navigator from '../features/UserProfile121546/navigator';
import Maps121527Navigator from '../features/Maps121527/navigator';
import Settings121505Navigator from '../features/Settings121505/navigator';
import Settings121490Navigator from '../features/Settings121490/navigator';
import NotificationList121489Navigator from '../features/NotificationList121489/navigator';
import Maps121488Navigator from '../features/Maps121488/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile121546: { screen: UserProfile121546Navigator },
Maps121527: { screen: Maps121527Navigator },
Settings121505: { screen: Settings121505Navigator },
Settings121490: { screen: Settings121490Navigator },
NotificationList121489: { screen: NotificationList121489Navigator },
Maps121488: { screen: Maps121488Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
