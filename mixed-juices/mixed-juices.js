// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 0;

  switch (name) {
    case 'Pure Strawberry Joy':
      time = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      time = 1.5;
      break;
    case 'Tropical Island':
      time = 3;
      break;
    case 'All or Nothing':
      time = 5;
      break;
    default:
      time = 2.5;
  }

  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = limes.map(lime => {
    if (lime === 'small') {
      return 6;
    } else if (lime === 'medium') {
      return 8;
    } else {
      return 10;
    }
  });

  let wedgesCutted = 0;
  let limesCutted = 0;

  for (let i = 0; wedgesCutted < wedgesNeeded && i < limes.length; i++) {
    wedgesCutted += wedges[i];
    limesCutted++;
  }

  return limesCutted;
}
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  /*Passo a Passo

  1) para cada ordem(orders[i]) devo pegar qual o tempo de preparo e adicionar a um contador e retirar o orders[i] do array orders
  2) o contador deve ser sempre menor que o timeLeft
  3) quando o contador for igual ao timeLeft devo parar e retornar o array orders restante
  
  */

  let timePast = 0;

  for (let i = 0; timePast < timeLeft; ) {
    timePast += timeToMixJuice(orders[i]);
    orders.shift();
  }

  return orders;
}
