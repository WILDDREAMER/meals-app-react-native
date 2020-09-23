import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoriteScreen from '../screens/FavouritesScreen'
import Colors from '../constants/colors'
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
    mode: 'card',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerBackTitleStyle:{
            fontFamily: 'open-sans'
        },
        headerTintColor:
            Platform.OS === 'android' ? 'white' : Colors.primary,
    }
};

const MealsNavigator = createStackNavigator({
    Categories:
    {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
}, defaultStackNavOptions);

const FavNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    mealDetail: MealDetailScreen
}, defaultStackNavOptions);


const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            //color of tabbar
            tabBarColor: Colors.primary,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}} >Meals</Text> : 'Meals'
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            //color of tabbar
            tabBarColor: Colors.accent,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}} >Favorites</Text> : 'Favorites'
        }
    }
};

const MealsFavTabNavigator =
    Platform.OS === 'android' ? createMaterialBottomTabNavigator(
        tabScreenConfig, {
        activeColor: 'white',
        shifting: true
        //if shifting is off barStyle: {backgroundcolor : ...}
    }
    ) : createBottomTabNavigator(
        tabScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans-bold'
            },
            activeTintColor: Colors.accent
        },
    });

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen,
}, defaultStackNavOptions
);

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
},{
    contentOptions: {
        activeTintColor: Colors.accent,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);