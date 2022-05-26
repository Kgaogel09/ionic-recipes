/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://images.unsplash.com/photo-1599921841143-819065a55cc6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://images.unsplash.com/photo-1612524681749-2f7615663729?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhZ2hldHRpJTIwYm9sb2duZXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',
      ingredients: ['Spaghetti', 'Ground Beef', 'Tomato'],
    },
    {
      id: 'r3',
      title: 'Chicken wings',
      imageUrl:
        'https://images.unsplash.com/photo-1624153064067-566cae78993d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',
      ingredients: ['Chicken', 'Flower', 'Sauce'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => recipe.id === recipeId),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}
