import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a test','https://cdn.mos.cms.futurecdn.net/oiZUiUox97CfPBekGREWqY-768-80.jpg'),
    new Recipe('A Test Recipe','This is a test','https://cdn.mos.cms.futurecdn.net/oiZUiUox97CfPBekGREWqY-768-80.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
