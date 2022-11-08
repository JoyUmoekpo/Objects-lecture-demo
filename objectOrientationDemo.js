// 1.
let person = {
    'firstName': 'Joy',
    'lastName': 'Umoekpo',
    age: 24
};

let fName = 'firstName'

// console.log('Dot notation', person.firstName);
// console.log('Bracket notation', person['firstName']);
// console.log('Bracket notation', person[fName]);

// 2.

// let meal = {
//     appetiter: 'bread',
//     entree: 'ribs',
//     dessert: ['cake', 'cookies', 'ice cream'],
//     drink: 'sprite'
// }

// ways to write this out
// let {dessert, entree, drink} = meal;
// let dessert = meal.dessert;
// let entree = meal.entree;
// let drink = meal.drink;

//could use any array method
// console.log(dessert[1]);

// let myDessert = dessert[2];
// console.log(myDessert);

// console.log(dessert.slice());
// console.log(dessert.filter(el => el === 'ice cream'));

// console.log(`This is the dessert: ${dessert}`);
// console.log(`This is the entree: ${entree}`);
// console.log(`This is the drink: ${drink}`);



// let meal2 = {
//     // appetiter: meal['appetiter'],
//     dessert,
//     entree,
//     drink
// }

// console.log(meal);
// console.log(meal2);



// let {dessert: favDessert} = meal;
// console.log(`This is the dessert: ${favDessert}`);

//need to practice array & string methods

// 3. 

for (let attribute in person) {
    console.log(`This is the key: ${attribute}`);
}

console.log('------------------------------')

for (let attribute in person) {
    console.log(`This is the value: ${person[attribute]}`);
}