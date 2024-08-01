// button onclick declared
getRecipeBtn.onclick = onRandomRecipe;

//  declaration
const container = document.querySelector(".recipe-container");
const recipeImage = document.querySelector(".recipe-image");

// api url
const url = "https://www.themealdb.com/api/json/v1/1/random.php";

// function for onclick button to get recipe
async function onRandomRecipe() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    // html styling
    document.body.style.backgroundColor = "black";
    container.style.width = "700px";
    container.style.padding = "10px";
    container.style.minHeight = "500px";

    // display random recipe
    container.innerHTML = ` 
    <h1>${data.meals[0].strMeal}</h1>
    <h3>${data.meals[0].strCategory}</h3>
    <p>${data.meals[0].strInstructions} </p>
    <img style = "width : 200px " src = ${data.meals[0].strMealThumb}>
    `;
  } catch (error) {}
}

onRandomRecipe();
