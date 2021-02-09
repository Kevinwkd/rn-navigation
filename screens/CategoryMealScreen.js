import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES } from '../data/mockData'
import CategoriesScreen from './CategoriesScreen';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';


const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );
    if (displayedMeals.length === 0) {
        return (
          <View style={styles.content}>
            <Text>No meals found, maybe check your filters?</Text>
          </View>
        );
      }
    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
}

CategoryMealScreen.navigationOptions = (naviData) => {
    const catId = naviData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: 'blue'
        }
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
});

export default CategoryMealScreen;