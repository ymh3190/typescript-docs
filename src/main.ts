function* foo(index: number) {
  while (index < 2) {
    yield index;
    index++;
  }
}

const iter = foo(0);
console.log(iter.next().value);
console.log(iter.next().value);
