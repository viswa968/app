import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is simply to test', 'https://www.cookipedia.co.uk/wiki/images/d/d6/General_Tso%27s_chicken_recipe.jpg' ),
    new Recipe('A Test Recipe', 'This is simply to test', 'https://www.cookipedia.co.uk/wiki/images/d/d6/General_Tso%27s_chicken_recipe.jpg' )  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
