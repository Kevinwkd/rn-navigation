import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';


const FavoriteScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}><Text>No favorite meals found</Text></View>
        );
    }
    return (
        <MealList navigation={props.navigation} listData={favMeals} />
    );
}

FavoriteScreen.navigationOptions = navData => {
    return {
        headerTitle: "Your Favorites",
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => {
                navData.navigation.openDrawer()
            }} /></HeaderButtons>,
        headerStyle: {
            backgroundColor: 'grey',
        },
        headerTintColor: "#fff"
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoriteScreen;