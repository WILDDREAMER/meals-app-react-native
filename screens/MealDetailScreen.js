import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'

import DefaultText from '../components/DefaultText'
import CustomHeaderButton from '../components/headerButton'
import { toggleFavorite } from '../store/actions/meals'

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText >{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals)
    const mealId = props.navigation.getParam('mealId');
    const currentMealIsFavorite = useSelector(state => state.meals.favouriteMeals.some(meal => meal.id === mealId));
    
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
    }, [toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({ isFavorite: currentMealIsFavorite });
    }, [currentMealIsFavorite])

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity}</DefaultText>
                <DefaultText>{selectedMeal.affordability}</DefaultText>
            </View>
            <Text style={styles.title}>ingredients</Text>
            {selectedMeal.ingredients.map(ing => <ListItem key={ing} >{ing}</ListItem>)}
            <Text style={styles.title}>steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={step} >{step}</ListItem>)}
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = navigationData => {

    const MealTitle = navigationData.navigation.getParam('mealTitle')
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFav = navigationData.navigation.getParam('isFavorite')
    return {
        headerTitle: MealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Favorite'
                iconName={isFav ? 'ios-star' : 'ios-star-outline'}
                onPress={toggleFavorite}
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10
    }
})

export default MealDetailScreen; 