import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTitle = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android'  && Platform.Verison >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
                <View style={{
                    ...styles.container, 
                    ...{backgroundColor: props.color}
                }}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,

    },
    title: {
        fontFamily: 'SourceSansProRegular',
        fontSize: 22,
        textAlign:'right'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 22 ? 'hidden' : 'visible',
        elevation: 5,
    }
});

export default CategoryGridTitle