let data = [
  {
    field: "name",
    value: "Dang Minh Duc",
  },
  {
    field: "age",
    value: "23",
  },
];

let result = data.reduce(function (acc, value) {
  acc[value.field] = value.value;
  return acc;
}, {});

console.log(result);
