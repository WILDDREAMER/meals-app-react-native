import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoriteScreen from '../screens/FavouritesScreen'
import Colors from '../constants/colors'
import FavouritesScreen from '../screens/FavouritesScreen';

const defaultStackNavOptions = {
    mode: 'card',

    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
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
    Favorites: FavouritesScreen,
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
            tabBarColor: Colors.primary
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            //color of tabbar
            tabBarColor: Colors.accent
        }
    }
};

const MealsFavTabNavigator =
    Platform.OS === 'android' ? createMaterialBottomTabNavigator(
        tabScreenConfig, {
        activeColor: 'white',
        shifting: true
        //if shifting is odd barStyle: {backgroundcolor : ...}
    }
    ) :
        createBottomTabNavigator(
            tabScreenConfig, {
            tabBarOptions: {
                activeTintColor: Colors.accent
            },
        });



export default createAppContainer(MealsFavTabNavigator);