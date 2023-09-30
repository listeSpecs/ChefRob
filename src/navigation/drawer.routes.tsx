import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MinhasReceitasScreen from "../screens/MinhasReceitasScreen";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: "right",
          headerShown: false,
          drawerStyle: {
            width: "100%",
          },
        }}
        initialRouteName="MinhasReceitas"
      >
        <Drawer.Screen name="MinhasReceitas" component={MinhasReceitasScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerRoutes;
