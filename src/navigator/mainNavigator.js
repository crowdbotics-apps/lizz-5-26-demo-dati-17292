import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen52164Navigator from '../features/BlankScreen52164/navigator';
import Settings52122Navigator from '../features/Settings52122/navigator';
import UserProfile52115Navigator from '../features/UserProfile52115/navigator';
import Settings52114Navigator from '../features/Settings52114/navigator';
import Settings52112Navigator from '../features/Settings52112/navigator';
import SignIn252110Navigator from '../features/SignIn252110/navigator';
import Settings50556Navigator from '../features/Settings50556/navigator';
import Settings50548Navigator from '../features/Settings50548/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen52164: { screen: BlankScreen52164Navigator },
Settings52122: { screen: Settings52122Navigator },
UserProfile52115: { screen: UserProfile52115Navigator },
Settings52114: { screen: Settings52114Navigator },
Settings52112: { screen: Settings52112Navigator },
SignIn252110: { screen: SignIn252110Navigator },
Settings50556: { screen: Settings50556Navigator },
Settings50548: { screen: Settings50548Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
