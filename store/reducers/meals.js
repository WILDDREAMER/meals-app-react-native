import { MEALS } from '../../data/dummyData'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals'

const initialState = {
    meals: MEALS,
    filtredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favouriteMeals.findIndex(
                meal => meal.id === action.mealId
            );
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favouriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return { ...state, favouriteMeals: updatedFavMeals };
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedFiltredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree)
                    return false;
                if (appliedFilters.lactoseFree && !meal.isLactoseFree)
                    return false;
                if (appliedFilters.vegetarian && !meal.isVegetarian)
                    return false;
                if (appliedFilters.vegan && !meal.isVegan)
                    return false;
                return true;
            }
            )
            return {...state, filtredMeals: updatedFiltredMeals}
        default:
            return state;
    }
}

export default mealsReducer;