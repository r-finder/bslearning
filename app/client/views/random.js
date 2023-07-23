// class Random {
//     static getInt(max) {
//         return this.getArbitraryInt(0, max);
//     }
//
//     static getArbitraryInt(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }
//
//     static getBoolean() {
//         return Math.random() > 0.5;
//     }
//
//     static getItem(array) {
//         const max = array.length - 1;
//         return array[this.getInt(max)];
//     }
// }

export const getInt = (max) => {
  return getArbitraryInt(0, max);
};

export const getArbitraryInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getBoolean = () => {
  return Math.random() > 0.5;
};

export const getItem = (array) => {
  const max = array.length - 1;
  return array[getInt(max)];
};

// CommonJS
// module.exports = {
//     Random,
//     randomString
// }

// ESModule
// export {
//   Random,
//   randomString,
// };

// when only one item is exported;
//export default Random;
