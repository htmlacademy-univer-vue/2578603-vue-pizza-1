<<<<<<< Updated upstream
export const getPositiveIntFromValue = (value) => {
  const number = parseInt(value, 10);
  const notPositive = isNaN(number) || number < 0;
  return notPositive ? 0 : number;
};

export const findItemById = (list, id) => {
  return list.find((item) => item.id === id);
};

export const spacifyNumber = (number, delimiter = "\u00A0") => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
};

export const capitalize = (str) =>
  `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;

export const wait = (ms = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms));
=======
export function getPositiveIntFromValue(value) {
  const number = parseInt(value, 10);
  const notPositive = isNaN(number) || number < 0;
  return notPositive ? 0 : number;
}

export function findItemByAlias(list, checkableAlias) {
  return list.find(({ alias }) => alias === checkableAlias);
}

export function accumulateSumByKey(arr, key, getMultiplier = () => 1) {
  return arr.reduce((sum, item) => {
    return sum + item[key] * getMultiplier(item);
  }, 0);
}
>>>>>>> Stashed changes
