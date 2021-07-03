import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function FriendsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
      <Text style={{ fontSize: 22, color: 'black',justifyContent: 'center' }}>Your friend list is empty </Text>
    </View>
  );
}
function CameraScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',color:'blue',backgroundColor:'black' }}>
      <Text style={{ fontSize: 22, color: 'white' }}>Camera screen </Text>
    </View>
  );
}


function LobbyScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'yellow' }}>
      <Text style={{ fontSize: 22, color: 'black',justifyContent: 'center' }}> The Lobby is where you can see all uploads from your friends and upload your images  </Text>
      <Button
        title="Click to see friends list "
        color='blue'
        onPress={() => navigation.navigate('Friends')}
      />
      <Button
      title="Click to open your camera and upload  "
      color='black'
      onPress={() => navigation.navigate('Camera')}
      />
    </View>
  );
}


function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'pink' }}>
      <Text style={{ fontSize: 20, color: 'black',justifyContent: 'center' }}>Please read privacy policy before logging in</Text>
      <Button
        title="Please confirm to enter Shvetan's social media app "
        color='violet'
        onPress={() => navigation.navigate('Lobby')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'cyan' ,marginBottom: 0}}>
      <Text style={{ fontSize: 22, color: 'black',justifyContent: 'center' }}>Once this screen is fully functional , You can access some preferences for this app and change them according to requirements</Text>
      <Button
        title="Go back to lobby"
        color='black'
        onPress={() => navigation.navigate('Lobby')}
        />
        <Button
        title="Log out"
        color='black'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const LoginStack = createStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}
const LobbyStack =createStackNavigator();
function LobbyStackScreen() {
  return (
    <LobbyStack.Navigator>
      <LobbyStack.Screen name="Lobby" component={LobbyScreen} />
      <LobbyStack.Screen name="Friends" component={FriendsScreen} />
    </LobbyStack.Navigator>
  );
}
const CameraStack =createStackNavigator();

function CameraStackScreen() {
  return (
    <CameraStack.Navigator>
       <CameraStack.Screen name="Camera" component={CameraScreen} />
    </CameraStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Log in" component={LoginStackScreen} />
        <Tab.Screen name="Lobby" component={LobbyStackScreen}/>
        <Tab.Screen name="Camera" component={CameraStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 