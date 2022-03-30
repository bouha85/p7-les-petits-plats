import {Recipe} from "././constructors/classrecipe.js"
const recipesList = document.querySelector(".recipes_section");

fetch('././data/recipes.json')
   .then(response => response.json())
   .then(data => {
       console.log(data);

       //recipes list
       data.forEach((recipe) => {
        const recipeHTML = new Recipe(recipe)
        recipeHTML.createCard();

        //ingrediants
        let recipeIngredients = recipeHTML.createIngredients;
        console.log(recipeIngredients);
        

        // Apparels
        let recipeApparel = recipeHTML.createApparel;
        console.log(recipeApparel);
        

        // Ustensils
        let recipeUstensils = recipeHTML.createUstensils
        console.log(recipeUstensils);
        
    })
   })
   .catch(error => console.log(error));



