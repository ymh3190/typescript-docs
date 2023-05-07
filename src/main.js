const [a = 1, b, ...{ pop }] = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

console.log(pop);
