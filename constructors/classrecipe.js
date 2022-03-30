export class Recipe {

    constructor(recipe) {
        this.recipe = recipe;
        this._id = recipe.id;
        this._name = recipe.name;
        this._servings = recipe.servings;
        this._ingredients = recipe.ingredients;
        this._time = recipe.time;
        this._description = recipe.description;
        this._appliance = recipe.appliance;
        this._ustensils = recipe.ustensils;
    }

    /*Create recipe in HTML {DOMElement}*/
    createCard() {
        const recipesList = document.getElementById("recettes-section");
        let recipes = ``
        const ingredients = this.recipe.ingredients;
        let ingredientHTML = ``;
        for (const ingredient of ingredients) {
            let ingredientString = ingredient.ingredient
            if (ingredient.quantity) { ingredientString += `: ${ingredient.quantity}` }
            if (ingredient.unit) { ingredientString += ` ${ingredient.unit}` }
            ingredientHTML += `<li class="recette_ingredients_element">${ingredientString}</li>`
        }
        
        recipes += `<article class="bloc_recette">
            <div class="image"></div>
            <div class="recette_text">
                <div class="recette_general">
                    <h1 class="recette_title">${this._name} </h1>
                    <div class="recette_time">
                        <i class="recette_time_icon far fa-clock"></i>
                        <h1 class="recette_time_text">${this._time} min</h1>
                    </div>
                </div>
                <div class="recette_details">
                    <ul class="recette_ingredients">
                        ${ingredientHTML}
                    </ul>
                    <p class="recette_steps">${this._description} </p>
                </div>
                </div>
            </article> `

        recipesList.innerHTML += recipes;
    }

    get createIngredients() {
        //<li><a class="details_list_choice details_list_choice--ingredients" id="XXX" role="option"></a></li>
        const recipeIngredients = [];
        // const ingredientsList = document.getElementById('liste_ingredients')
        for (let i = 0; i < this._ingredients.length; i++) {
            const recipeIngredient = document.createElement("li");
            recipeIngredient.classList.add("details_list_element", "details_list_element--ingredients");
            recipeIngredient.setAttribute("id", `${this._ingredients[i].ingredient}`);
            recipeIngredients.push(recipeIngredient);
            const recipeIngredientLink = document.createElement("a");
            recipeIngredientLink.classList.add("details_list_choice", "details_list_choice--ingredients");
            recipeIngredientLink.setAttribute("role", "option");
            recipeIngredientLink.innerHTML = `${this._ingredients[i].ingredient}`;
            recipeIngredient.appendChild(recipeIngredientLink);
        }

        return recipeIngredients;
    }

    get createApparel()
    {
        //<li><a class="details_list_choice details_list_choice--apparels" id="XXX" role="option"></a></li>

        const recipeApparel = document.createElement("li");
        recipeApparel.classList.add("details_list_element", "details_list_element--apparels");
        recipeApparel.setAttribute("id", `${this._appliance}`);
        const recipeApparelLink = document.createElement("a");
        recipeApparelLink.classList.add("details_list_choice", "details_list_choice--apparels");
        recipeApparelLink.setAttribute("role", "option");
        recipeApparelLink.innerHTML = `${this._appliance}`;
        recipeApparel.appendChild(recipeApparelLink);

        return recipeApparel
    }

    get createUstensils()
    {
        //<li><a class="details_list_choice details_list_choice--utensils" id="XXX" role="option"></a></li>

        const recipeUstensils = [];

        for (let i = 0; i < this._ustensils.length; i++) {
            const recipeUstensil = document.createElement("li");
            recipeUstensil.classList.add("details_list_element", "details_list_element--utensils");
            recipeUstensil.setAttribute("id", `${this._ustensils[i]}`);
            recipeUstensils.push(recipeUstensil);
            const recipeUstensilLink = document.createElement("a");
            recipeUstensilLink.classList.add("details_list_choice", "details_list_choice--utensils");
            recipeUstensilLink.setAttribute("role", "option");
            recipeUstensilLink.innerHTML = `${this._ustensils[i]}`;
            recipeUstensil.appendChild(recipeUstensilLink);
        }

        return recipeUstensils
    }

}
