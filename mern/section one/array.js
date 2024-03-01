let fruit = ["Apple","Banana","orange","mango"];
console.log(fruit);


console.log(fruit[0]);
console.log(fruit[3]);
console.log(fruit.slice(1,3));
console.log(fruit.slice(2));

console.log("----------------------");

// push() - add element at the end of the array
// pop() - remove element from the end of the array
// shift() - remove element from the start of the array
// unshift() - add element at the start of the array
// indexOf() - find the index of the element
// concat() - merge two arrays
// forEach() - iterate through the array
// map() - iterate through the array and return new array
// filter() - filter the array based on condition

fruit.push("grapes");
fruit.pop();
fruit.shift();
fruit.unshift("Grapes")
console.log(fruit);

let fruits=["Watermelon","Papaya","Guava"];
newArray=fruit.concat(fruits);
console.log(newArray);

let num = [1,2,3,4,5,6,7,8,9,10];
num.forEach(function(num){
    console.log(num*2);
})

console.log("a------------------------------")
num.forEach((num) => {
           console.log(num**2)
})

console.log("b-------------USIN LOOP-----------------")

number = [1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<number.length; i++){
    console.log(number[i]**3)
}

console.log("c--------------USING FOREACH FUNCTION--------------------")

number.forEach((x) =>{
    console.log(x**3);
})

console.log("d-----------USING MAP FUNCTION------------------")

let newNumber = number.map((x) => x**3);
console.log(newNumber);

a = [1,2,3,4,5,6,7,8,9,10];
b = [];
for(let i = 0; i < a.length; i++){
    b.push(a[i]**3);
}
console.log(a);
console.log(b);

console.log("-------------USING FILTER FUNCTION-------------------")

let array = [1,2,3,4,5,6,7,8,9,10];
let evenNum = [];
for(let i = 0; i < array.length;i++){
    if(array[i] % 2==0){
        evenNum.push(array[i]);
    }
}
console.log(evenNum);

let eveNum = array.Filter((num) => num % 2 ==0);
console.log(eveNum);

console.log("----------------color----------");

let color = [Red, yellow, blue, green, violet, black];
let color2 = color.filter((clr) => clr.length>4);
console.log(color2);
