function fa() {}
const a = new fa();
a.f = () => {
  console.log(this);
};

console.log(a.f());
