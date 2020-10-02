import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings121505Navigator from '../features/Settings121505/navigator';
import Settings121490Navigator from '../features/Settings121490/navigator';
import NotificationList121489Navigator from '../features/NotificationList121489/navigator';
import Maps121488Navigator from '../features/Maps121488/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
