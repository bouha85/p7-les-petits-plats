import {Recipe} from "././constructors/classrecipe.js"

fetch('././data/recipes.json')
   .then(response => response.json())
   .then(data => {
       console.log(data);
       data.forEach((recipe) => {
        const recipeHTML = new Recipe(recipe)
        recipeHTML.createCard();
    })
   })
   .catch(error => console.log(error));
