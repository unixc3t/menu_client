export function getRecentRecipes(app){
  const recipes = app.service('recipes');
  return recipes.find().then(function (data,err) {
    return data.data;
  })
}