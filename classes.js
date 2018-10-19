//1.
// * Create a Human class that takes in a name and age.
// * Add the function `ageOneYear` that ages the human.
// * Add the function `eating`, that logs "mmm, mmm, mmm, I'm love'n it".
// * Create an instance of the Human class.
//   * console log your humans age
//   * call ageOneYear on your human
//   * console log their age again.
//   * call eating on your human.

//-------------------------

// class Human {
//   constructor (name, age){
//     this.name = name;
//     this.age = age;
//   }
//
//   ageOneYear(){
//     return this.age++
//   }
//
//   eating(){
//     console.log("mmm, mmm, mmm, I'm love'n it.");
//   }
// }
//
// let emerald = new Human ("Emerald", 25)
//
// console.log(emerald.age);
// emerald.ageOneYear();
// console.log(emerald.age);
// emerald.eating()




//2. ---------------------------------

// Write a class Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which should be saved to properties of the same name.
//
// Give the Vector two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)


class Vector {
  constructor (x,y){
    this.x = x;
    this.y = y;
  }

  plus(anoVec){
    return new Vector (this.x + anoVec.x, this.y + anoVec.y)
  }

  minus(anoVec){
    return new Vector (this.x - anoVec.x, this.y - anoVec.y)
  }

  getLength() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2))
    // return Math.hypot(3,4)
  }
}

let v1 = new Vector(1,2)
let v2 = new Vector(2,3)

console.log(v1.plus(v2));
console.log(v1.minus(v2));

let v3 = new Vector(3,4)

console.log(v3.getLength());

//-------------------------
