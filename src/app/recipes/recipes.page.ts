import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    console.log(`ngOnInit`);
    console.log(`Loaded Recipes`);
  }

  ionViewWillEnter() {
    console.log(`ionViewWillEnter`);
    this.recipes = this.recipeService.getAllRecipes();
  }

  ionViewDidEnter() {
    console.log(`ionViewDidEnter`);
  }

  ionViewWillLeave() {
    console.log(`ionViewWillLeave`);
  }

  ionViewDidLeave() {
    console.log(`ionViewDidLeave`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy`);
  }
}
