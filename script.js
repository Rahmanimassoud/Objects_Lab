
// Problem 1

// Declare a JS object called carThree with
// A property called wheels with a number value
// A property called owner with a string value
// A property called isBroken with a boolean value
// A property called color with a string value
// Use dot notation to add a new property called price with a number value
// Use bracket notation to add a new property called year with a number value
// Use dot notation to change the value of the isBroken property
// Use dot notation to read the value of owner
// Create a new variable (not part of the object) called clientIsInterested that has no value.
// Check if car color is blue. If true, set clientIsInterested to true, else false.
// Delete the owner property of carThree.


const carThree = {
    wheels: 4,
    owner: "Massoud",
    isBroken: true,
    color: "green",
};
carThree.price = 4000;
carThree["year"] = 2017;
carThree.isBroken = false;
// console.log(carThree.owner);
let clientIsInterested;

if(carThree.color === "Blue"){
    clientIsInterested = "Blue"
} else {
    clientIsInterested = false;
}

delete carThree.owner;
// console.log(carThree);


// Problem 2

// Declare a JS object called store with
// A property called profit with a number value
// A property called manager with a string value
// A property called isOpenNow with a boolean value
// A property called isVeryExpensive with a boolean value
// Use dot notation to add a new property called location with a string value
// Use bracket notation to add a new property called storeType with a string value
// Use dot notation to change the value of the isOpenNow property
// Use dot notation to read the value of isVeryExpensive 
// Create a new variable (not part of the object) called canShopHere that has no value.
// Check if isOpenNow and NOT isVeryExpensive. If true set canShopHere to true, else false
// Delete the profit property of store.

const store = {
    profit: 10,
    manager: "James",
    isOpenNow: true,
    isVeryExpensive: false,
};
store.location = "Seattle";
store["storeType"] = "grocery";
store.isOpenNow = false;
console.log(store.isVeryExpensive);
let canShopHere;

if(store.isOpenNow && !store.isVeryExpensive){
    canShopHere = true;
} else {
    canShopHere = false;
};

delete store.profit;
// console.log(store);
 

// Problem 3

// Declare a JS object called home with
// A property called rooms with a number value
// A property called bathrooms with a number value
// A property called isForSale with a boolean value
// A property called isInGoodLocation with a boolean 
// Use dot notation to add a new property called price with a number value
// Use bracket notation to add a new property called year with a number value
// Use dot notation to change the value of the isForSale property
// Use dot notation to read the value of bathrooms
// Create a new variable (not part of the object) called buyHouse that has no value.
// Check if isForSale and isInGoodLocation. If true set buyHouse to true, else false
// Delete the isForSale property of home.


const home = {
    rooms: 14,
    bathrooms: 4,
    isForSale: false,
    isInGoodLocation: true,
};
home.price = 500000;
home["year"] = 2022;
console.log(home.bathrooms);
let buyHouse;
if(home.isForSale && home.isInGoodLocation){
    buyHouse = true
} else {
    buyHouse = false
};
delete home.isForSale;
// console.log(home);


// Problem 4, 5

// Declare a JS object with 4 properties (4 keys and 4 values).
// Use dot notation to add a new property.
// Use bracket notation to add a new property.
// Use dot notation to change the value of one of the properties.
// Use dot notation to read the value of one of the properties.
// Create a new variable (not part of the object) that has no value.
// Write some kind of if / else statement to check some information of the object. Based on true / false set the value of the variable you made in number 6 to true or false.
// Delete one of the object properties.


const plane = {
    color: "red",
    company: "boing",
    isRelaiable: true,
    location: "wahsington"
};
plane.owner = "idk";
plane["share"] = 12;
plane.color = "green";
console.log(plane.color);
let buyThePlane;
if(plane.color === "green" || plane.isRelaiable){
    buyThePlane = true;
} else{
    buyThePlane = false
};
// console.log(plane);

// console.log(buyThePlane);