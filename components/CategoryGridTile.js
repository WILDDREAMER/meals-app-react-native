import React from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableNativeFeedback
} from 'react-native'

const CategoryGridTile = props => {
    let Touchablecmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21)
        Touchablecmp = TouchableNativeFeedback;
    return (
        <View style={styles.gridItem}>
            <Touchablecmp style={{ flex: 1 }}
                onPress={props.onPress}
            >
                <View
                    style={{ ...styles.container, ...{ backgroundColor: props.color } }}
                >
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </Touchablecmp>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 15,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible' 
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridTile;