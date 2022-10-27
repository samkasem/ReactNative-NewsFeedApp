import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Settings from "../screens/Settings";
import HomeStackScreen from "./HomeStackScreen";
import { colors } from "../config/theme";

const Tab = createBottomTabNavigator();

const RootStack = () => {
  let activeColor = colors;
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Trending") {
              iconName = "trending-up";
            } else if (route.name === "Settings") {
              iconName = "cog";
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: activeColor.accent,
          tabBarInactiveTintColor: activeColor.tertiary,
          tabBarStyle: {
            backgroundColor: activeColor.secondary
          },
          tabBarShowLabel: false,
          headerTitleAlign: "left",
          headerTitleStyle: {
            paddingLeft: 10
          },
          headerStyle: { backgroundColor: activeColor.secondary },
          headerTintColor: activeColor.tint
        })}
      >
        <Tab.Screen
          name="Trending"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
