import {Recipe} from "././constructors/classrecipe.js"
import {UtilClass} from "././commun/utilclass.js"

//dom
const details = document.querySelectorAll(".details");
const searchIngredients = document.querySelector(".searchIngredients")
const targetIng = document.querySelector(".target_ing");
const searchGlobal = document.querySelector('.search_global');
const containerIngredients = document.querySelector('.container_ingredients')

fetch('././data/recipes.json')
   .then(response => response.json())
   .then(data => {
       console.log(data);
       let ingredients = [];
       let appliances = [];
       let ustensils =[];
       

       //recipes list
       data.forEach((recipe) => {
        const recipeHTML = new Recipe(recipe)
        recipeHTML.createCard();

        //Ingredients
        recipe.ingredients.forEach((ingredient) => {
            ingredients.push(ingredient.ingredient);
        });

        //Appliance
        appliances.push(recipe.appliance);
        console.log(appliances);

        // Ustensils
        recipe.ustensils.forEach((ustensil) => {
            ustensils.push(ustensil.ustensils)
        })
        console.log(ustensils);
        
    })
    
    //filteredIngredients
    const filteredIngredients = Array.from(new Set(ingredients));
    Recipe.createIngredientsList(filteredIngredients);
    console.log(filteredIngredients);
    targetIng.addEventListener('click', function() {
        searchGlobal.style.display = 'block';
        searchIngredients.style.display = 'block';
        containerIngredients.style.display = 'block';
    })

    

    //filteredAppliances
    const filteredAppliances = Array.from(new Set (appliances));
    console.log(filteredAppliances);
    Recipe.createApplianceList(filteredAppliances)

    //filteredUstensils
    const filteredUstensils = Array.from(new Set (ustensils));
    console.log(filteredUstensils);
    Recipe. createUstensilsList(filteredUstensils);
    
    
   })
   .catch(error => console.log(error));

   