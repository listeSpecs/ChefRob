import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MinhasReceitasScreen from "../screens/MinhasReceitasScreen";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MinhasReceitas"
      >
        <Tab.Screen name="MinhasReceitas" component={MinhasReceitasScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabRoutes;
