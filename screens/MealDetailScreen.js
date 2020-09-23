import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import DefaultText from '../components/DefaultText'
import { MEALS } from '../data/dummyData'
import CustomHeaderButton from '../components/headerButton'

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText >{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

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
                }} />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    details: {
        flexDirection: 'row',
        padding:15,
        justifyContent: 'space-around'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        textAlign:'center'
    },
    listItem:{
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical:10,
        marginHorizontal:20,
        padding:10
    }
})

export default MealDetailScreen; 