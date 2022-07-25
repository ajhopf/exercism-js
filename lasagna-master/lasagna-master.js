/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeRemaining) {
  if (timeRemaining === 0) {
    return 'Lasagna is done.';
  } else if (timeRemaining > 0) {
    return 'Not done, please wait.';
  } else {
    return 'You forgot to set the timer.';
  }
}

export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

export function quantities(layers) {
  const lasagna = {
    noodles: 0,
    sauce: 0
  };

  layers.forEach(layer => {
    if (layer === 'noodles') {
      lasagna.noodles += 50;
    }
    if (layer === 'sauce') {
      lasagna.sauce += 0.2;
    }
  });

  return lasagna;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(object, portions = 2) {
  const newRecipe = { ...object };

  for (let key in newRecipe) {
    newRecipe[key] = (newRecipe[key] * portions) / 2;
  }
  return newRecipe;
}
