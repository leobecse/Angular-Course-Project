import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
            'This is a test',
            'https://cdn.mos.cms.futurecdn.net/oiZUiUox97CfPBekGREWqY-768-80.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Another Test Recipe',
            'This is a test',
            'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2020-12-Dinner-For-Two%2F2020-12-Recipe-3-Balsamic-and-Citrus-Braised-Lamb-Shanks-with-Whipped-Parsnip-Puree%2FBalsamic_Braised_Lamb_Shanks2_CB',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Chicken', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}