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
//Brack notation evaluates to a string

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

// for (let attribute in person) {
//     console.log(`This is the key: ${attribute}`);
// }

// console.log('------------------------------')

// for (let attribute in person) {
//     console.log(`This is the value: ${person[attribute]}`);
// }

// 4. job title

// person.job = 'Engineer';
// person['pets'] = ['dog', 'dragon'];

// console.log(person);

// 5. delete

// let teams = {
//     teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
//     teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
//     teamThree: ['porter', 'blake', 'june', 'owen'],
//     teamFour: ['brian', 'riley', 'ezra', 'jordan'],
//     teamFive: ['grey', 'milo', 'mckay', 'leo']
// }

// console.log(teams);
// delete teams.teamFour;
// console.log(teams);

// 6. Classes

// Classes are uppercase and singular
class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }

    drive(miles) {
        this.miles += miles
        console.log(`${this.make} increased miles by ${miles} \n Current miles: ${this.miles}`)
    }
}

// let myCar = new Car('Tesla', 'Model Y', 'black');
// let yourCar = new Car('Toyota', 'Highlander', 'blue');

// // console.log(myCar.make);
// // console.log(myCar['make']);

// console.log(myCar);
// console.log(yourCar);

// myCar.drive(30);
// yourCar.drive(50);
// myCar.drive(10);

// console.log(myCar);
// console.log(yourCar);

// 7. Extending Classes
class Truck extends Car {
    // constructor needed for instantiation

    constructor(make, model, color, payload) {
        super(make, model, color) // all the properties from the Parent class - Car

        this.payload = payload;
    }
    tow(weight) {
        if(weight > this.payload) {
            console.log('Max payload exceeded');
        } else {
        console.log('Towing successful');
        }
    }
}

let truck = new Truck('Ford', 'F450', 'black', 100);
console.log(truck);
truck.drive(15);
truck.tow(99);
truck.tow(101);