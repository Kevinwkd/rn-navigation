import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View style={{...styles.mealRow, ... styles.mealHeader}}>
                    <ImageBackground source={{uri: props.image}} style={styles.bgImg}>
                        <Text style={styles.title}>{props.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <Text>{props.duration}m</Text>
                    <Text>{props.complexity.toUpperCase()}</Text>
                    <Text>{props.affordability.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginVertical: 10,
        overflow: 'hidden',
    },
    mealHeader: {
        height: '85%'
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        height: '15%'
    },
    bgImg: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 22,
        fontFamily: 'SourceSansProLight',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',

    }
});

export default MealItem;