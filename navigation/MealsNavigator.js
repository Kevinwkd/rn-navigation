import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';
import FiltersScreen from '../screens/FiltersScreen';
import React from 'react';
import { Platform } from 'react-native';

const MealsNavigator = createStackNavigator({
        Categories: CategoriesScreen,
        CategoryMeals: { 
            screen: CategoryMealScreen,
            // Just for this navigation
            // navigationOptions: {
            //     headerTitle: 'Meal Categories',
            //     headerStyle: {
            //         backgroundColor: 'grey',
            //     },
            //     headerTintColor: "#fff",
            // } 
        },
        MealDetail: MealDetailScreen,
    },
    // global configuration
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const tabConfig = {
    Meals: { 
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: '#4a148c'
        }
    },
    Favorites: { 
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: '#ff6f00' 
        }
    },
}

const defaultStackNavOptions = {
    // headerTitle: 'Meal Categories',
    headerTitleStyle: {
        fontFamily: 'SourceSansProRegular'
    },
    headerbackTitleStyle: {
        fontFamily: 'SourceSansProLight'
    },
    headerStyle: {
        backgroundColor: 'grey',
    },
    headerTintColor: "#fff",
}

const MealsFavTabNavigator =
    Platform.OS === 'android' ?
        createMaterialBottomTabNavigator(tabConfig, {
            activeColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: '#4a148c'
            }
        }) :
        createBottomTabNavigator(
            tabConfig, {
            tabBarOptions: {
                activeTintColor: '#ff6f00',
                labelStyle: {
                    fontFamily: 'SourceSansProRegular'
                }
            }
        })

const FilterNavigator = createStackNavigator({
    Filters: FiltersScreen
}, { defaultNavigationOptions: defaultStackNavOptions })

const MainNavigator = createDrawerNavigator({
    mealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Mealssss'
        }
    },
    Filters: FilterNavigator
}, {
    contentOptions: {
        activeColor: '#4a148c',
        labelStyle: {
            fontFamily: 'SourceSansProRegular'
        }
    }
})

export default createAppContainer(MainNavigator);