import React, { useState } from "react";
import { Image, Pressable, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import BookListScreen from "../screens/BookListScreen";
import BookDetailScreen from "../screens/BookDetailScreen";
import WishListScreen from "../screens/WishListScreen";
import MyBooksScreen from "../screens/MyBooksScreen";
import AccountScreen from "../screens/AccountScreen";
import SettingScreen from "../screens/SettingScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <Tabs /> */}
      <MyDrawer />
    </NavigationContainer>
  );
};


const MyDrawerContent = (props) => {
  return (
    <DrawerContentScrollView>
      <Image
        style={{ width: 48, height: 48, marginTop: 40, marginLeft: 16 }}
        source={require("../img/img_avatar2.png")}
      />
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Roboto",
          fontWeight: "500",
          marginLeft: 16,
          marginVertical: 16,
        }}
      >
        桓醬
      </Text>
      <View
        style={{ width: 300, height: 1, backgroundColor: "#EDEDEF" }}
      ></View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

// MyDrawer (HomeTab + AccountStack + SettingStack)
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        // drawerActiveBackgroundColor:,
        drawerInactiveTintColor: "#666",
        drawerActiveTintColor: "#6200EE",
        drawerLabelStyle: {
          fontSize: 14,
          fontFamily: "Roboto",
          fontWeight: "400",
        },
        drawerStyle: {
          width: 300,
        },
        drawerItemStyle: {
          height: 56,
          // paddingHorizontal: 16,
          justifyContent: "center",
        },
      }}
      useLegacyImplementation={true}
      drawerContent={(props) => <MyDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          headerShown: false,
          drawerLabel: "Home",
          drawerIcon: ({ focused }) => (
            <>
              {focused ? (
                <Image source={require("../icon/icon_home_actived.png")} />
              ) : (
                <Image source={require("../icon/icon_home.png")} />
              )}
            </>
          ),
        }}
      />
      <Drawer.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          headerShown: false,
          drawerLabel: "Account",
          drawerIcon: ({ focused }) => (
            <>
              {focused ? (
                <Image source={require("../icon/icon_head_actived.png")} />
              ) : (
                <Image source={require("../icon/icon_head.png")} />
              )}
            </>
          ),
        }}
      />
      <Drawer.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          headerShown: false,
          drawerLabel: "Setting",
          drawerIcon: ({ focused }) => (
            <>
              {focused ? (
                <Image source={require("../icon/icon_gear_actived.png")} />
              ) : (
                <Image source={require("../icon/icon_gear.png")} />
              )}
            </>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

// HomeTab (HomeStack + WishListStack + MyBooksStack)
const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: "#666",
        tabBarActiveTintColor: "#6200EE",
        headerShown: false,
        tabBarStyle: {
          height: 56,
          paddingVertical: 8,
        },
        tabBarIconStyle: {
          width: 24,
          height: 24,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Roboto",
          fontWeight: "500",
          marginBottom: 8,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <Image source={require("../icon/icon_home_actived.png")} />
              ) : (
                <Image source={require("../icon/icon_home.png")} />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="WishlistStack"
        component={WishListStack}
        options={{
          title: "Wishlist",
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <Image
                  source={require("../icon/icon_wish_actived.png")}
                />
              ) : (
                <Image source={require("../icon/icon_wish.png")} />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="MyBooksStack"
        component={MyBooksStack}
        options={{
          headerShown: false,
          title: "My Books",
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <Image source={require("../icon/icon_book_actived.png")} />
              ) : (
                <Image source={require("../icon/icon_book.png")} />
              )}
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Stack - Home (BookListScreen + BookDetailScreen)
const HomeStack = ({ navigation }) => {
  const [marked, setMarked] = useState(false);
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        title: null,
        // headerStyle: {},
      }}
    >
      <Stack.Screen
        name="Home"
        component={BookListScreen}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image source={require("../icon/icon_menu.png")} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => alert("make you understand")}>
              <Image source={require("../icon/icon_search.png")} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={BookDetailScreen}
        options={({ route }) => ({
          headerBackImageSource: require("../icon/icon_back.png"),
          headerRight: () => (
            <Pressable onPress={() => setMarked(!marked)}>
              {marked ? (
                <Image source={require("../icon/icon_bookmark_actived.png")} />
              ) : (
                <Image source={require("../icon/icon_bookmark.png")} />
              )}
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

// Stack - Wishlist (WishListScreen)
const WishListStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          // headerShown: false,
          headerShadowVisible: false,
          title: null,
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image source={require("../icon/icon_menu.png")} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => alert("Searching for Something")}>
              <Image source={require("../icon/icon_search.png")} />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

// Stack - My Books (MyBooksScreen)
const MyBooksStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyBooks"
        component={MyBooksScreen}
        options={{
          // headerShown: false,
          headerShadowVisible: false,
          title: null,
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image source={require("../icon/icon_menu.png")} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => alert("沒有功能啦哈哈")}>
              <Image source={require("../icon/icon_search.png")} />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

// Stack - Account (AccountScreen)
const AccountStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          // headerShown: false,
          headerShadowVisible: false,
          title: null,
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image source={require("../icon/icon_menu.png")} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => alert("Searching")}>
              <Image source={require("../icon/icon_search.png")} />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

// Stack - Setting (SettingScreen)
const SettingStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          // headerShown: false,
          headerShadowVisible: false,
          title: null,
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image source={require("../icon/icon_menu.png")} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => alert("Searching for Something")}>
              <Image source={require("../icon/icon_search.png")} />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
