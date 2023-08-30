/*🌟 Exercise 1 : Location

Instructions

Analyze the code below. 
What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// The Output will be the following : I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
 */



                               //----------------------------------------------------



/* Exercise 2: Display Student Info

Instructions

function displayStudentInfo(objUser){
    //destructuring
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik' */

function displayStudentInfo(objUser) {
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}

const result = displayStudentInfo({ first: 'Elie', last: 'Schoppik' });
console.log(result); 

/*🌟 Exercise 3: User & Id

Instructions

Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

Using methods taught in class, turn the users object into an array: 
Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
FYI : The number is their ID number.

Modify the outcome of part 1, by multipling the user’s ID by 2.
Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
 */

const users = { user1: 18273, user2: 92833, user3: 90315 }
const Array = Object.entries(users)

console.log(Array)

const newArray = Array.map(([user,ID])=> [user,ID*2]

)

console.log(newArray)

/* Exercise 4 : Person Class

Instructions

Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// the Output will be : object 

 */

/*🌟 Exercise 5 : Dog Class

Instructions

Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};
 
Answer :

The second :

// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  constructor will successfully extend the Dog class !!
 */


/*Exercise 6 : Challenges

Evaluate these (ie True or False)

[2] === [2] 
{} === {}


What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) 
console.log(object3.number)
console.log(object4.number)


Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes. 

Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
For example: Moooo I'm a cow, named Lily and I'm brown and white
 */

/*[2] === [2] : == > This statement will evaluate to false.
because they are separate instances in memory,
  so they are not considered equal when compared using the strict equality operator ===.
{} === {}  : same !
*/

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // Output :4
console.log(object3.number) // Output :4
console.log(object4.number) // Output :5
/*hen you assign object1 to object2 and object2 to object3, you are essentially creating references to the same object in memory. 
So, when you change the number property of object1 to 4,
 the same change is reflected in object2 and object3. This is why both object2.number and object3.number will be 4.
On the other hand, object4 is a separate object with its own number property set to 5. It is not affected by the change you made to object1, so object4.number remains 5. */

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    sound(sound) {
        return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. ${sound}`;
    }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");
const soundInfo = farmerCow.sound("moos");
console.log(soundInfo);

