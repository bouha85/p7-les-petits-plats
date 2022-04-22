import {Recipe} from "././constructors/classrecipe.js"
import {UtilClass} from "././commun/utilclass.js"

//dom
const details = document.querySelectorAll(".details");
const searchIngredients = document.querySelector(".searchIngredients")
const targetIng = document.querySelector(".target_ing");
const searchGlobal = document.querySelector('.search_global');
const containerIngredients = document.querySelector('.container_ingredients');
const detailsInputs = document.querySelectorAll('.detailsInputs');
let filteredRecipes = [];
let ingredients = [];
let appliances = [];
let ustensils =[];

function showRecipes(recipes) {
    //recipes list
    const recipesList = document.getElementById("recettes-section");
    recipesList.innerHTML = ``;
    recipes.forEach((recipe) => {
        const recipeHTML = new Recipe(recipe)
        recipeHTML.createCard();

        //Ingredients
        recipe.ingredients.forEach((ingredient) => {
            ingredients.push(ingredient.ingredient);
        });

        //Appliance
        appliances.push(recipe.appliance);

        // Ustensils
        recipe.ustensils.forEach((ustensil) => {
            ustensils.push(ustensil);
        })
    })
}

/**
 * Listen to details list elements events, which are recreated at each filter
 */
 function listenToDetailsElementsEvents() {

    const tagList = document.querySelector(".tag_section");
    const detailsListElements = document.querySelectorAll(".details_list");

    detailsListElements.forEach(function(detailsListElement) {
        detailsListElement.addEventListener("click", function() {

            // Tag creation
            let tagName = detailsListElement.getAttribute("id");
            let tagModel = new Tag(tagName);
            let tag;
            if (detailsListElement.classList.contains("details_list--ingredients")) {
                tag = tagModel.createIngredientTag;
               
            }
            else if (detailsListElement.classList.contains("details_list--apparels")) {
                tag = tagModel.createApparelTag;
            }
            else if (detailsListElement.classList.contains("details_list--utensils")) {
                tag = tagModel.createUtensilTag;
            }
            tagList.appendChild(tag);
            console.log(tag);

            // Filter recipes with tag
            filteredRecipes = filterRecipesByTags(recipes, filteredRecipes, false);
            // Empty and recreate only filtered recipes, ingredients, apparels and utensils
            displayRecipesAndDetails(filteredRecipes);

            // Empty input values at each choice's click
            detailsInputs.forEach(function(detailsInput) {
                detailsInput.value = "";
            })
        })
    })
}


fetch('././data/recipes.json')
    .then(response => response.json())
    .then(data => {
        showRecipes(data);

        //filteredIngredients
        const filteredIngredients = Array.from(new Set(ingredients));
        Recipe.createIngredientsList(filteredIngredients);

        // Ingredient Tag
        filteredIngredients.forEach(ingredient => {
            const item = document.getElementById(ingredient);
            item.addEventListener('click', function() {
                document.getElementsByClassName('container_ingredients')[0].style.display = 'none'
                const foundRecipes = data.filter(item => item.name.toLowerCase().includes(ingredient.toLowerCase()));
                const foundIngredients = data.filter(item => item.ingredients.find(el => el.ingredient.toLowerCase().includes(ingredient.toLowerCase())));
                const foundDescription = data.filter(item => item.description.toLowerCase().includes(ingredient.toLowerCase()));
                const results = [...new Set([...foundRecipes, ...foundIngredients, ...foundDescription])]
                showRecipes(results)
                
                
            })
        });
        


        targetIng.addEventListener('click', function() {
            searchGlobal.style.display = 'block';
            searchIngredients.style.display = 'block';
            containerIngredients.style.display = 'block';
        })

        //filteredAppliances
        const filteredAppliances = Array.from(new Set(appliances));
        console.log(filteredAppliances);
        Recipe.createApplianceList(filteredAppliances)

        //filteredUstensils
        const filteredUstensils = Array.from(new Set(ustensils));
        Recipe.createUstensilsList(filteredUstensils);
    })
    .catch(error => console.log(error));