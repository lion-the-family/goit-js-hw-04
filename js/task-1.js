function isEnoughCapacity(products, containerSize) {
  // Изначальное значение чтобы положить результат
  let allProduct = 0;
  // Тут проходим по обьектом и берем значени (Object.values)
  for (const item of Object.values(products)) {
    allProduct += item;
  }
  //   Тут проверка
  return allProduct <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
// Все комментария это я для себе чтобы потом легче понять
