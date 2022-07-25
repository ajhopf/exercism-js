// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck';
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  //Acabei criando um loop para percorrer cada letra das opções, para depois perceber
  //que não era necessário criar o loop. Mas fica aqui registrado.
  //
  // let contador = 0;
  // let i = 0;
  // let escolha = ''
  // while (contador === 0) {
  //   if (option1[i] < option2[i]) {
  //     escolha = option1;
  //     contador++;
  //   } else if (option1[i] > option2[i]) {
  //     escolha = option2;
  //     contador++;
  //   } else {
  //     i++;
  //   }
  // }

  let escolha = '';

  if (option1 < option2) {
    escolha = option1;
  } else {
    escolha = option2;
  }

  return escolha + ' is clearly the better choice.';
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age > 10) {
    return originalPrice * 0.5;
  } else {
    return originalPrice * 0.7;
  }
}
