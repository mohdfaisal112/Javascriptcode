const arr = [1,2,3,4,5,6];

arr.sort(function(a, b) {
  return a - b; 
});
arr.reverse(); 
console.log(arr);