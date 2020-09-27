import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'
    

import MealList from '../components/MealList';
import HeaderButton from '../components/headerButton'
import DefaultText from '../components/DefaultText'


const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favouriteMeals);
    
    if (favMeals.length === 0 || !favMeals) {
        return <View style={styles.content}>
            <DefaultText>No favorite meals found. Start adding some!</DefaultText>
        </View>
    }

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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});

export default FavoritesScreen; 