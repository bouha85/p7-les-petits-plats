// import {Recipe} from "././constructors/classrecipe.js"

fetch('././data/recipes.json')
   .then(response => response.json())
   .then(data => {
       console.log(data);
       
       const recipesList = document.getElementById("recettes-section");
       
    //    let allRecipes = [];
    //    data.forEach(recipe => {
    //        const recipeInstance = new Recipe (recipe.id, recipe.name, recipe.servings, recipe.ingredients, recipe.time, recipe.description, recipe.appliance, recipe.ustensils);
    //        allRecipes.push(recipeInstance);
    //        console.log(allRecipes);
    //    });
    let recipes = "";
    data.map((values) => {
        recipes += `<article class="bloc_recette">
        <div class="image"></div>
        <div class="recette_text">
            <div class="recette_general">
                <h1 class="recette_title">${values.name} </h1>
                <div class="recette_time">
                    <i class="recette_time_icon far fa-clock"></i>
                    <h1 class="recette_time_text">${values.time} min</h1>
                </div>
            </div>
            <div class="recette_details">
                <ul class="recette_ingredients">
                    <li class="recette_ingredients_element">
                        <b>${values.ingredient}</b>
                        : ${values.quantity} ${values.unit}400 ml
                    </li>
                </ul>
                <p class="recette_steps">${values.description} </p>
            </div>
        </div>
    </article> `
    })
       recipesList.innerHTML = recipes;


   })
   .catch(error => console.log(error));
