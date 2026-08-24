console.log("ARRAY METHODS")
var myarray = [1,"Hello",[2,3]];
console.log(myarray.length);
myarray.push("world");
console.log(myarray);
myarray.pop();
console.log(myarray);
myarray.shift();
console.log(myarray);
myarray.unshift("hi");
console.log(myarray);
console.log(myarray.slice(0,4));
myarray.splice(1,2,[2,3]);
console.log(myarray);

// let arr=[1,2,3,4]
// for(let i=arr.length-1;i>=0;i--){
//     console.log( arr[i]*arr[i]);
// }
// arr = [5,4,1,3,2,5,7,9,6,3];
// n=9
// for(i=1;i<=n;i+=2);{
// console.log(arr[i]*arr[i]);
// };
// arr = [1,2,3,4,5];
//   for(i=arr.length-1; i>=0; i--){
//     console.log(arr[i]+1);
// };
// let arr=[1,2,3,4,5];
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]+1);
// }
// let arr=[1,2,3,4,5];
// // let a="*";
// for(let i=0;i<5;i++){
//     console.log("*".repeat(i));
// }
// var myarray=[1,2,"hi","hello",5]
// myarray.forEach(function(element){
//     console.log(element);
// });
// var myarray=[1,2,3,4,5];
// for(var i of myarray){
//     console.log(i);
// }
// function multiple(i){
//     console.log(i);
// }

arr=[1,2,3,4,5]
let arr2=arr.map(function(i){
    return i**2;
})
console.log(arr2,arr);
let arr3=arr.filter(function(i){
    return i%2===0;
})
console.log(arr3);

let sum=arr.reduce(function(a,c){
    return a+c;
},1);
console.log(sum);

let sum2=(a,b)=>{
    return a+b;
}
console.log(arr.reduce(sum2,1));

array=[5,4,7,5,2,3];
n=array.length;
for(i=0;i<=n;i++){
    console.log(array(arr[i]))
}
