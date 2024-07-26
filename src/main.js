// recipe data
const recipe = {
  title: "Spaghetti Carbonara",
  instructions:
    "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
  image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
};

// button onclick declared
getRecipeBtn.onclick = onRandomRecipe;

// function for onclick button to get recipe
function onRandomRecipe() {
  // function for style backgroundcolor
  document.body.style.backgroundColor = "lightblue";

  document.querySelector(".container").style.backgroundColor = "lightgrey";

  // function for style image and container
  document.querySelector(".container").style.width = "400px";
  document.querySelector(".recipe-image").src = recipe.image;
  document.querySelector(".recipe-image").style.width = "200px";

  // function for display recipe data
  document.querySelector(".recipe-title").textContent = recipe.title;
  document.querySelector(".recipe-instructions").textContent =
    recipe.instructions;

  // function for hide the button
  document.getElementById("getRecipeBtn").style.display = "none";
}
