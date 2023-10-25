import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MinhasReceitasScreen from "../screens/MinhasReceitasScreen";
import Onboarding from "../screens/Onboarding"
import SignIn from "../screens/Sign_in_Screen";
import LoginScreen from "../screens/LoginScreean";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Onboarding">
        <Tab.Screen name="Onboarding" component={Onboarding} options={{ title: '' }}/>
        <Tab.Screen name="SignIn" component={SignIn} options={{ title: '' }}/>
        <Tab.Screen name="LoginScreen" component={LoginScreen} options={{ title: '' }}/>

        <Tab.Screen name="MinhasReceitas" component={MinhasReceitasScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabRoutes;
