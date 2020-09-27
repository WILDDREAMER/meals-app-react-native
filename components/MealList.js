import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'


import MealItem from './MealItem'

const MealList = props => {
    const favMeals = useSelector(state => state.meals.favouriteMeals);

    const renderMealItem = itemData => {
        const isFav = favMeals.some(meal => meal.id === itemData.item.id)
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity.toUpperCase()}
                affordability={itemData.item.affordability.toUpperCase()}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFavorite: isFav
                        }
                    });
                }}
            />
        );
    }
    return (
        <View style={styles.screen}>
            <FlatList
                data={props.listData}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default MealList;