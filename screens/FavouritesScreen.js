import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MealList from '../components/MealList';
import HeaderButton from '../components/headerButton'
import { MEALS } from '../data/dummyData'

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm3' || meal.id === 'm2')
    return (
        <MealList
            navigation={props.navigation}
            listData={favMeals}
        />
    );
};

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favorite',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Menu'
                    iconName='ios-menu'
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    };
};

export default FavoritesScreen; 