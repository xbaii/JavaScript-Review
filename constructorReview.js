//Create a Animal Constructor that has the following parameters. species, name, legs, color, food 
//(which is an array of foods they can eat).

var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}



//Now create a person function that creates an object and returns it (not in constructor form) that 
//has the following parameters. name, age, height, gender

var person = function(name, age, height, gender) {
  var personObj = {
    name: name,
    age: age,
    height: height,
    gender: gender,
  };
  return obj;
}



//Create a animal array and a person array.

var animalArr = [];
var personArr = [];


//Create two instances of Animal and push those into your animal array

var firstAnimal = new Animal('Dog', 'Dog', '4', 'brown', ['meat', 'kibble']);
var secondAnimal = new Animal('Cat', 'Cat', '4', 'black', ['fish', 'milk']);

animalArr.push(firstAnimal, secondAnimal);

//Create two instances of person and push those into your person array.

var bailey = ('Bailey', 23, '5\'9', 'female');
var ryan = ('Ryan', 28, '5\'11', 'male');

personArr.push(bailey, ryan);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in 
//that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function() {
  var item = this.food[Math.floor(Math.random()*this.food.length)];
  alert(this.name + ' ate ' + item);
};


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

no, you would have to go back and change the whole function to add a method. and then you would 
have to re-create the instances. 


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/

it creates 'this' object, returns this object, and sets the prototype object
it refers to an object; that is, the subject in context, or the subject of the executing code.(left of the dot)
the function is undefined, and sets this to the global scope because we called an ordinary function. 





