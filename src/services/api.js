export function getRecentRecipes(app){
  const recipes = app.service('recipes');
  return recipes.find({
    query:{
      "$sort": { "createdAt": "-1" }
    }
  }).then(function (data,err) {
    return data.data;
  })
}

export function createRecipe(app, name, description, ingredients, imageURL){
  const recipes = app.service('recipes');
  return recipes.create({
    name,
    description,
    ingredients,
    imageURL
  }).then((data, err)=>data);
}