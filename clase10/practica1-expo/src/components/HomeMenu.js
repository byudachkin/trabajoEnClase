import React, {Component} from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Usuarios from "../screens/Usuarios";
import Nuevopost from "../screens/Nuevopost";
import AntDesign from '@expo/vector-icons/AntDesign';


const Tab = createBottomTabNavigator();

function HomeMenu() {
    return(
            <Tab.Navigator screenOptions={ { tabBarShowLabel: false } }>
                <Tab.Screen name="Home" component={ Home } options={
                    {tabBarIcon: () => <Entypo name="home" size={24} color="black" />}
                }/>
                <Tab.Screen name="Profile" component={ Profile }  options={
                    {tabBarIcon: () => <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" /> }
                    }/>
                <Tab.Screen name="Usuarios" component={ Usuarios }  options={
                    {tabBarIcon: () => <AntDesign name="user" size={24} color="black" /> }
                    }/>
                    <Tab.Screen name="Nuevopost" component={ Nuevopost }  options={
                    {tabBarIcon: () => <Entypo name="image" size={24} color="black" /> }
                    }/>
            </Tab.Navigator>
    )
}

export default HomeMenu;