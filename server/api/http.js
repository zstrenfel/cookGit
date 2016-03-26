import * as service from './service/event';

export function getRecipes(req, res) {
  service.getRecipes()
  .then((recipes) => res.json(recipes))
  .catch(err => {
    res.status(400);
    res.json({error: err})
  });
}

export function newRecipe(req, res) {
  service.newRecipe(req.body)
  .then(recipe => res.json(recipe))
  .catch(err => {
    res.status(400);
    res.json({error: err, event: req.body})
  });
}

export function editRecipe(req, res) {
  service.editRecipe(req.params.id, req.body)
  .then(recipe => res.json(recipe))
  .catch(err => {
    res.status(400);
    res.json({error: err, event: req.body})
  });
}

export function deleteRecipe(req, res) {
  service.deleteRecipe(req.params.id)
  .then(recipe => res.json(recipe))
  .catch(err => {
    res.status(400);
    res.json({error: err, event: req.body});
  })
}