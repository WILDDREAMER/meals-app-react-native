import React from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';

import Colors from '../constants/colors'
import DefaultText from '../components/DefaultText'

const SwitchFilter = props => {
    return (
        <View style={styles.filterContainer} >
            <DefaultText>{props.label}</DefaultText>
            <Switch
                value={props.value}
                onValueChange={props.onChange}
                trackColor={{ true: Colors.primary }}
                thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'80%',
        marginVertical: 10
    }
});

export default SwitchFilter;