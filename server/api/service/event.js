import r from 'rethinkdb';
import xss from 'xss'
//xss prevents XSS attacks; usage --> xss(text_to_be_checked);

function connect() {
  return r.connect();
}

export function getRecipes() {
  return connect()
    .then(conn => {
      return r
        .table('recipes')
        .orderBy(r.desc('created')).run(conn)
        .then(cursor => cursor.toArray());
    });
}

export function newRecipe(recipe) {
  return connect()
    .then(conn => {
      recipe.created = new Date();
      recipe.title = xss(recipe.title);
      recipe.body = xss(recipe.body);
      return r
        .table('recipes')
        .insert(recipe).run(conn)
        .then(response => {
          return Object.assign({}, {id: response.generated_keys[0]});
        });
    });
}

export function editRecipe(id, recipe) {
  recipe.updated = new Date();
  recipe.title = xss(recipe.title);
  recipe.body = xss(recipe.body);
  return connect()
    .then(conn => {
      return r
        .table('recipes')
        .get(id).update(recipe).run(conn)
        .then(() => recipe);
    });
}

export function deleteRecipe(id) {
  return connect()
    .then(conn => {
      return r
      .table('recipes')
      .get(id).delete().run(conn)
      .then(() => ({id: id, deleted: true}));
    });
}