function mean(a,b,c,d,e){
    console.log((a+b+c+d+e)/5);
}
mean(1,2,3,4,5)

const mean2 = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}

const square =(x)=>{
    return x*x;
}
let a=square(10);
console.log(a);

const square2=x=>x*x;

function outer(){
    console.log("Outer function running...");
    function inner(){
        console.log("Inner function running...");
    }
    inner();
}
outer();


console.log("STRING PROPERTIES");

let str = "  Hello World  ";
console.log(str.length);
console.log(str.indexOf("o"));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.replace("World","siri"));
console.log(str.trim());
console.log(str.split(","));
let str1 = "Sri";
let str2 = "Ram";
console.log(str1.concat(str2));
console.log(str.slice(0,8));

let string = "This is'nt good";
console.log(string);
let string2 = "This is'nt good";
console.log(string2.split(","));

let message = `Hello World!`;
console.log(message);

let d=10;
let b=5;
// let c=15;
c=d+b;
console.log(`The sum of ${d} and ${b} is ${c}.`);

let massage = `This is line 1.
This is line 2.
This is line 3.`;
console.log(massage);

let name = "Abhinav";
let age = 22;

let html = `
 <div>
 <h2>${name}</h2
 <p>Age: ${age}</p>
 </div>
 `;
 console.log(html);  
 var myArray = [1,"Hello",[2,3]];
 myArray.splice(1,1,"Hello world",[4,5]);
 console.log(myArray);