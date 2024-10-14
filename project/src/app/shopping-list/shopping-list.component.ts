import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients:Ingredient[]=[
    new Ingredient('Ing1','50gm'),
    new Ingredient('Ingredient2','60gm'),
  ];
  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}
