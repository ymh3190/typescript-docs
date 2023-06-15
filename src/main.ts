type ObjectDescriptor<D, M> = {
  data: D;
  methods: M & ThisType<D & M>;
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: D = desc.data;
  let methods: M = desc.methods;
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx;
      this.y += dy;
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
