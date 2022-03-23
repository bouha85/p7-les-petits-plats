export class Recipe {

    constructor(recipe) {
        this._id = recipe.id;
        this._name = recipe.name;
        this._servings = recipe.servings;
        this._ingredients = recipe.ingredients;
        this._time = recipe.time;
        this._description = recipe.description;
        this._appliance = recipe.appliance;
        this._utensils = recipe.utensils;
    }

    /*Create recipe in HTML {DOMElement}*/
    get createCard() {
        /* <article class="bloc_recette">
         <div class="image"></div>
         <div class="recette_text">
             <div class="recette_general">
                 <h1 class="recette_title">Limonade de coco</h1>
                 <div class="recette_time">
                     <i class="recette_time_icon far fa-clock"></i>
                     <h1 class="recette_time_text">10 min</h1>
                 </div>
             </div>
             <div class="recette_details">
                 <ul class="recette_ingredients">
                     <li class="recette_ingredients_element">
                         <b>Lait de coco</b>
                         : 400 ml
                     </li>
                     <li class="recette_ingredients_element">
                         <b>Jus de citron</b>
                     </li>
                     <li class="recette_ingredients_element">
                         <b>Crème de coco</b>
                         : 2 cuillères à soupe
                     </li>
                     <li class="recette_ingredients_element">
                         <b>Sucre</b>
                         : 30 grammes
                     </li>
                 </ul>
                 <p class="recette_steps">Découper le thon en dés, mettre dans un
                      plat et recouvrir de jus de citron vert (mieux vaut prendre un
                       plat large et peu profond). Laisser reposer au réfrigérateur
                       au moins 2 heures (si possible faites-le le soir pour le lendemain). Après avoir laissé mariner le poisson, couper le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poisson avec le citron cette fois-ci dans un saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur, vous pouvez ajouter 1 à 2 cuillères à soupe de crème de coco.</p>
             </div>
         </div>
         </article>*/
        //Bloc Recette
        const recipe = document.createElement("article");
        recipe.classList.add("bloc_recette");
        recipe.setAttribute("id", `${this._name}`);

        //Image 
        const recipePicture = document.createElement("div");
        recipePicture.classList.add("image");
        recipe.appendChild(recipePicture);

        // Text legend
        const recipeText = document.createElement("div");
        recipeText.classList.add("recette_text");
        recipeText.appendChild(recipe);

        // Text legend first section (title and time)
        const recipeGeneral = document.createElement("div");
        recipeGeneral.classList.add("recette_general");
        recipeText.appendChild(recipeGeneral);

        // Title
        const recipeTitle = document.createElement("h1");
        recipeTitle.classList.add("recette_title");
        recipeTitle.innerHTML = `${this._name}`;
        recipeGeneral.appendChild(recipeTitle);

        // Time
        const recipeTime = document.createElement("div");
        recipeTime.classList.add("recette_time");
        recipeGeneral.appendChild(recipeTime);
        const recipeTimeIcon = document.createElement("i");
        recipeTimeIcon.classList.add("recette_time_icon", "far", "fa-clock");
        recipeTime.appendChild(recipeTimeIcon);
        const recipeTimeText = document.createElement("h1");
        recipeTimeText.classList.add("recette_time_text");
        recipeTimeText.innerHTML = `${this._time} min`;
        recipeTime.appendChild(recipeTimeText);

        // Text legend second section (details)
        const recipeDetails = document.createElement("div");
        recipeDetails.classList.add("recette_details");
        recipeText.appendChild(recipeDetails);

        const recipeIngredients = document.createElement("ul");
        recipeIngredients.classList.add("recette_ingredients");
        for (let i = 0; i < this._ingredients.length; i++) {
            const recipeIngredientsElement = document.createElement("li");
            recipeIngredientsElement.classList.add("recette_ingredients_element");
            if (this._ingredients[i].unit && this._ingredients[i].quantity) {
                recipeIngredientsElement.innerHTML = `<b>${this._ingredients[i].ingredient}</b> : ${this._ingredients[i].quantity} ${this._ingredients[i].unit}`;
            }
            else if (!this._ingredients.unit && this._ingredients.quantity) {
                recipeIngredientsElement.innerHTML = `<b>${this._ingredients[i].ingredient}</b> : ${this._ingredients[i].quantity}`;
            }
            else {
                recipeIngredientsElement.innerHTML = `<b>${this._ingredients[i].ingredient}</b>`;
            }
            recipeIngredients.appendChild(recipeIngredientsElement);
        }
        recipeDetails.appendChild(recipeIngredients);


        // Steps
        const recipeSteps = document.createElement("p");
        recipeSteps.classList.add("recette_steps");
        recipeSteps.innerHTML = `${this._description}`;
        recipeDetails.appendChild(recipeSteps);

        return recipe;
    }

    get createIngredients() {
        //<li><a class="details_list_choice details_list_choice--ingredients" id="XXX" role="option"></a></li>
        const recipeIngredients = [];

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



}
