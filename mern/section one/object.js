let student={
    name : "raj",
    age : "23",
    email : "rajyadav2356@gmail.com",
    password :"raj36475836",
    mobile : "364528198472",

}
console.log(student);

// Accessing the object properties
console.log(student.age);
console.log(student["age"]);
console.log(student.name);

// replacing the value
student.password="abrakadabra";
console.log(student);

//adding new properties
student.address = "New york";
console.log(student);

console.log("-------------------------");

const smartphone ={
    "brand" : "Samsung",
    "model" : "Galaxy",
    "color" : ["Black", "white", "Blue", "Red", "green"],
    "price" : 200000,
    "camera" : "48mp",
    "battery" : "50000mAh",

}
console.log(smartphone);
console.log(smartphone.color[2]);
smartphone.color[2] = "skyBlue";
console.log(smartphone);

const phone = [
    {brand : "samsung", model : "galaxy", color : ["red","blue","white"], price: 20000, camera:"48MP", battery : "500000mAH"},
    {brand : "apple", model : "galaxy", color : ["red","blue","white"], price: 20000, camera:"48MP", battery : "500000mAH"},
    {brand : "onelpuse", model : "galaxy", color : ["red","blue","white"], price: 20000, camera:"48MP", battery : "500000mAH"}
];
console.log(phone[1].color[2]);