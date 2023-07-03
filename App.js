import 'react-native-gesture-handler';
import * as React from 'react';
import { View,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './Pages/HomeScreen';
import ExploreScreen from './Pages/ExploreScreen';
// import SettingScreen from './Pages/SettingScreen';
import SearchScreen from './Pages/SearchScreen';
import ProfileScreen from './Pages/ProfileScreen';
import LoginScreenStack from './Pages/LoginScreenStack';
import DeliveryScreen from './Pages/DeliveryScreen';
import PaymentScreen from './Pages/PaymentScreen';
import SummaryScreen from './Pages/SummaryScreen';
import BackScreen from './Pages/BackScreen';
import CartScreen from './Pages/CartScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          borderRadius: 10,
        },
        }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
        tabBarLabel: 'Home',
        tabBarIcon: tabInfo => {
          return (
            <Image
              source={require('./assets/home1.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: tabInfo.focused ? '#f2760a' : 'black',
              }}
            />
          );
        },
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
        tabBarLabel: 'Search',
        tabBarIcon: tabInfo => {
          return (
            <Image
              source={require('./assets/search.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: tabInfo.focused ? '#f2760a' : 'black',
              }}
            />
          );
        },
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
        tabBarLabel: 'Cart',
        tabBarIcon: tabInfo => {
          return (
            <Image
              source={require('./assets/cart2.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: tabInfo.focused ? '#f2760a' : 'black',
              }}
            />
          );
        }, 
        }}
      />
       <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
        tabBarLabel: 'Profile',
        tabBarIcon: tabInfo => {
          return (
            <Image
              source={require('./assets/profile5.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: tabInfo.focused ? '#f2760a' : 'black',
              }}
            />
          );
        },
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
      <Stack.Screen name="LoginScreenStack" component={LoginScreenStack} />
      <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
      <Stack.Screen name="BackScreen" component={BackScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

// const SettingScreenStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="SecondPage"
//       screenOptions={{headerShown: false}}>
//       <Stack.Screen name="SettingScreen" component={SettingScreen} />
//     </Stack.Navigator>
//   );
// };


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign:'center',
        
          headerStyle: {
            backgroundColor: '#fff',
          
            //Set Header color
          },
          headerTintColor: '#000', //Set Header text color
        }}>
 
        <Drawer.Screen
          name="HomeScreenStack"
          options={{
            drawerLabel: 'Home Screen Option',
            title: 'Basket',
            // headerShown: false,
          }}
          component={HomeScreenStack}
        />
        {/* <Drawer.Screen
          name="SettingScreenStack"
          options={{
            drawerLabel: 'Setting Screen Option',
            title: 'Setting Screen',
          }}
          component={SettingScreenStack}
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

