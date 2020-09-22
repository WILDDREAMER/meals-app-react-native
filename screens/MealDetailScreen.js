import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MEALS } from '../data/dummyData'
import CustomHeaderButton from '../components/headerButton'

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
        </View>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const Meal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: Meal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
            title='Favorite'
            iconName='ios-star'
            onPress={() => {
                console.log('favorite');
            }}/>
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MealDetailScreen; 