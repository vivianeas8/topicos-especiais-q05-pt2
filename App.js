import * as React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './src/pages/FirstPage';
import SecondPage from './src/pages/SecondPage';
import ThirdPage from './src/pages/ThirdPage';

import CustomSidebarMenu from './src/components/CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackIconHeaderLeft = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={require('./assets/icon_menu.png')}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'Primeira tela',
          headerLeft: () => (
            <StackIconHeaderLeft navigationProps={navigation} />
          ),
          headerStyle: { backgroundColor: '#E37D00' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => <StackIconHeaderLeft navigationProps={navigation} />,
        headerStyle: { backgroundColor: '#E37D00' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ title: 'Segunda tela' }}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{ title: 'Terceira tela' }}
      />
    </Stack.Navigator>
  );
}

function thirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ThirdPage"
      screenOptions={{
        headerLeft: () => <StackIconHeaderLeft navigationProps={navigation} />,
        headerStyle: { backgroundColor: '#E37D00' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ title: 'Segunda tela' }}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{ title: 'Terceira tela' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#FEF3B4' }}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{ headerShown: false }}
          drawerContentOptions={{
            activeTintColor: '#730000',
            inactiveTintColor: '#730000',
            itemStyle: { marginVertical: 5 },
          }}
          drawerContent={(props) => <CustomSidebarMenu {...props} />}>
          <Drawer.Screen
            name="FirstPage"
            options={{ drawerLabel: 'Primeira tela' }}
            component={firstScreenStack}
          />
          <Drawer.Screen
            name="SecondPage"
            options={{ drawerLabel: 'Segunda tela' }}
            component={secondScreenStack}
          />
          <Drawer.Screen
            name="ThirdPage"
            options={{ drawerLabel: 'Terceira tela' }}
            component={thirdScreenStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
