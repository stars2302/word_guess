let arr = ['a','b','c'];

let list = arr.map((item)=>{
  return `<li>${item}</li>`;
});

console.log(list);


//배열에 값 추가하기
let arr1 = [1,2];

arr1.push(3);
let arr1es6 = [...arr1, 3];
// [대상, 추가할 값];

let arr2 = [4,5];

let arrnew1 = [arr1[0],arr1[1],arr2[0],arr2[1]];
let arrnew2 = arr1.concat(arr2);
let arrnew3 = [].concat(arr1,arr2);
