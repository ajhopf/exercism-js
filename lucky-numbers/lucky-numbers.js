// @ts-check

import { stringify } from 'querystring';

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join(''));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  //transforma o value em uma string
  let string = String(value);

  //quantos numeros até a metade
  //detalhe: se for string.length for impar deve considerar o valor central em ambas partes

  let half;

  if (string.length % 2 === 0) {
    half = string.length / 2;
  } else {
    half = string.length / 2 + 0.5;
  }

  //pegar metade da string

  let firstHalf = string.substring(0, half);

  //pegar a outra metade, tranformar em uma array, inverter e transformar em uma string

  let secondHalf = '';

  if (string.length % 2 === 0) {
    secondHalf = string.substring(half);
  } else {
    secondHalf = string.substring(half - 1);
  }

  let reversedSecondHalf = secondHalf.split('').reverse().join('');

  //comparar a primeira metade com a segunda metade

  if (string.length === 1) {
    return true;
  } else {
    return firstHalf === reversedSecondHalf;
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === undefined || input === null || input === '') {
    return 'Required field';
  }
  if (!Number(input)) {
    return 'Must be a number besides 0';
  } else {
    return '';
  }
}
