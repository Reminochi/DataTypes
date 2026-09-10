'use strict';

const countTypesInArray = (arr) => {
  const counters = {};

  for (const item of arr) {
    const type = typeof item;
    counters[type] = (counters[type] || 0) + 1;
  }

  return counters;
};

module.exports = { countTypesInArray };
