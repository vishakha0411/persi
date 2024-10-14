import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('A','description1','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('B','description2','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  ];
  onRecipeSelected(r:Recipe){
    this.recipeWasSelected.emit(r);
  }
}
