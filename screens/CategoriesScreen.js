import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/mockData';
import CategoryGridTitle from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';


const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        return (
            <CategoryGridTitle 
                title={itemData.item.title}
                color= {itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({ 
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        } 
                    })
                }} 
            />
        )
    } 

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} 
        />
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});



// CategoriesScreen["navigationOptions"] = () => {
//     return {
//       title: "Meal Categories",
//       headerStyle: {
//         backgroundColor: 'grey',
//       },
//       headerTintColor: "#fff",
//     };
//   };

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
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

export default CategoriesScreen;