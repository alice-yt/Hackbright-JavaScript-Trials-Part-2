"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
  console.log(items[i], i);
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result;
}

// everyOtherItem(['apple', 'berry', 'cherry', 'mango', 'strawberry']);

// 3. smallestNItems
function smallestNItems(items, n) {
  const sorted = items.sort((a,b) => a - b);
  console.log(sorted.slice(0, n));
}

smallestNItems([1, 50, 21, 100, 33], 3)