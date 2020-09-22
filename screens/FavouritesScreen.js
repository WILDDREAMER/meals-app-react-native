import React from 'react';
import MealList from '../components/MealList';

import MealLst from '../components/MealList'
import { MEALS } from '../data/dummyData'

const FavouritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm3' || meal.id === 'm2')
    return (
        <MealList
            navigation={props.navigation}
            listData={favMeals}
        />
    );
};

FavouritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
};

export default FavouritesScreen; 