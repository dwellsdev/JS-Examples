function factorialize(num) {
  var facRes = 1;
  for(i = 1;i <= num; i++) {
    facRes *= i;
  }
  num = facRes;
  return num;
}

console.log(factorialize(5));
