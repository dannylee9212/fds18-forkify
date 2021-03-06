import icons from '../../img/icons.svg';
import Bookmark from '../models/Bookmark';
// variable

let recipe; 

const markup = ({publisher, ingredients, source_url, image_url, title, cooking_time, servings}) => `<figure class="recipe__fig">
      <img src=${image_url} alt=${title} class="recipe__img" />
      <h1 class="recipe__title">
        <span>${title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${cooking_time}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--decrease-servings">
          <svg>
            <use href="${icons}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${icons}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${icons}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="${icons}#icon-bookmark${Bookmark.isRecipeStored(recipe) ? '-fill' : ''}"></use>
      </svg>
    </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${ingredients.map(ingredient => {
          return` <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ingredient ? (ingredient.quantity ? ingredient.quantity : '') : ''}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${ingredient ? ingredient.unit : ''}</span>
              ${ingredient ? ingredient.description : ''}
            </div>
          </li>`
        }).join('')}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href=${source_url}
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`;

export const showDetailedRecipeInfo = targetRecipe => {
  console.log(targetRecipe);
  recipe = targetRecipe;
  document.querySelector('.recipe').innerHTML = markup(recipe);
}
