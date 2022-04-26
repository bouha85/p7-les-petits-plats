import {Recipe} from "././constructors/classrecipe.js"


//dom
const details = document.querySelectorAll(".details");
const searchIngredients = document.querySelector(".searchIngredients");
const searchAppliances = document.querySelector('.searchAppareil');
const searchUstensiles = document.querySelector('.searchUstensiles');
const targetIng = document.querySelector(".target_ing");
const targetApp = document.querySelector('.target_app');
const targetUst = document.querySelector('.target_ust');
const searchGlobal = document.querySelector('.search_global');
const containerIngredients = document.querySelector('.container_ingredients');
const containerAppliances = document.querySelector('.container_appliances');
const containerAstensils = document.querySelector('.container_ustensiles');
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

         //Appliances Tag
         filteredAppliances.forEach(appliance => {
            const item = document.getElementById(appliance);
            item.addEventListener('click', function() {
                document.getElementsByClassName('container_appliances')[0].style.display = 'none'
                const foundRecipes = data.filter(item => item.name.toLowerCase().includes(appliance.toLowerCase()));
                const foundAppliances = data.filter(item => item.appliance.toLowerCase().includes(appliance.toLowerCase()));
                const foundDescription = data.filter(item => item.description.toLowerCase().includes(appliance.toLowerCase()));
                const results = [...new Set([...foundRecipes, ...foundAppliances, ...foundDescription])]
                showRecipes(results)  
            })
        });
        targetApp.addEventListener('click', function() {
            searchGlobal.style.display = 'block';
            searchAppliances.style.display = 'block';
            containerAppliances.style.display = 'block';
        })

        //filteredUstensils
        const filteredUstensils = Array.from(new Set(ustensils));
        Recipe.createUstensilsList(filteredUstensils);

        //Ustansils Tag
        filteredUstensils.forEach(ustensil => {
            const item = document.getElementById(ustensil);
            item.addEventListener('click', function() {
                document.getElementsByClassName('container_ustensiles')[0].style.display = 'none'
                const foundRecipes = data.filter(item => item.name.toLowerCase().includes(ustensils.toLowerCase()));
                const foundAstensils = data.filter(item => item.ustensils.find(el => el.ustensil.toLowerCase().includes(ustensils.toLowerCase())));
                const foundDescription = data.filter(item => item.description.toLowerCase().includes(ustensils.toLowerCase()));
                const results = [...new Set([...foundRecipes, ...foundAstensils, ...foundDescription])]
                showRecipes(results)
            })
        });
        targetUst.addEventListener('click', function() {
            searchGlobal.style.display = 'block';
            searchUstensiles.style.display = 'block';
            containerAstensils.style.display = 'block';
        })
        

    })
    .catch(error => console.log(error));