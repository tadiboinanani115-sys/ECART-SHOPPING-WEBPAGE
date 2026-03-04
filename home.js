let recipe=[];

function fetchRecipes(){
    fetch("https://dummyjson.com/recipes").
    then(res=>res.json()).
    then(data=>{
        console.log(data.recipes);
        recipe=data.recipes;
        localStorage.setItem("allRecipes",JSON.stringify(recipe));
        displayRecipes(recipe);
    }) 
}

function displayRecipes(recp){
    let output="";
    recp.map((val)=>{
        output +=`
            <main>
                <div id="image">
                    <img src="${val.image}"/>
                </div>
                <h3>${val.name}</h3>
                <div id="description1">
                    <h4>Special: ${val.cuisine}</h4>
                    <h4>Rating⭐: ${val.rating}</h4>
                </div>
                <div id="description2">
                    <h4>Reviews: ${val.reviewCount}</h4>
                    <button onclick="details(${val.id})">Details</button>
                </div>
            </main>
        `
    })
    document.getElementById("recipeContainer").innerHTML = output;
}
fetchRecipes();

document.getElementById("searchbar").addEventListener("input",function searchItem(event){
    let searchTerm= event.target.value.toLowerCase();
    let filteredRecipe  = recipe.filter((v)=>{
        return(
            v.name.toLowerCase().includes(searchTerm) || v.cuisine.toLowerCase().includes(searchTerm)
        );
    });
    displayRecipes(filteredRecipe);
});
function details(recipeId){
    console.log(recipeId);
    localStorage.setItem("recipeId",recipeId);
    window.location.href="../viewd1/view.html";
}