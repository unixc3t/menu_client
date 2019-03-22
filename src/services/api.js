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

export function fetchRecipe(app, id){
  const recipes = app.service('recipes');
  return recipes.find({
    query:{
      '$limit':1,
      '_id':id
    }
  }).then((data,err)=>data.data)
}

export function signup(app, username, password) {
  const users = app.service('users');
  return users.create({
    username,
    password
  }).then((data, err)=>{
    return data
  });
}