/* 1.
* var hello;
* console.log(hello); //undefined
* hello = 'world';
*/

console.log(hello); // undefined                                  
var hello = 'world';   

/* 2.
* var needle; //global variable
* needle = 'haystack';  
* test(); // output: magnet
* function test(){
    * var needle; //local variable
    * needle = 'magnet';
    * console.log(needle);
} */

var needle = 'haystack';
test(); // magnet
function test(){
    var needle = 'magnet';
    console.log(needle);
}

/* 3.
* var brendan;
* brendan = 'super cool'; 
* function print(){
    * brendan = 'only okay';
    * console.log(brendan); //we did not call the function yet.
*}
* cinsole.log(brendan); // output: super cool
*/

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // super cool

/* 4.
* var food; 
* food = 'chicken';
* console.log(food); // output: chicken
* eat(); // function called and food re-asigned so output: half-chicken
* function eat(){
    * food = 'half-chicken';
    * console.log(food);
    * var food;
    * food = 'gone';
}*/

var food = 'chicken';
console.log(food); // chicken
eat(); // half-chicken
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


/* 5.
* mean(); // it runs type error => mean is not a function
* console.log(food); // it will run an error food is not defined
 */

mean(); // it runs type error => mean is not a function
console.log(food); // it will run an error food is not defined
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);




/* 6. 
* var genre;
* console.log(genre); // output: undefined
* genre = "disco";
* rewind(); //the function called and this function will display two things : rock , r&b
* function rewind() {
   * genre = "rock";
   * console.log(genre); // rock
   * var genre;
   * genre = "r&b";
   * console.log(genre); // r&b
* } 
* console.log(genre); //disco
*/

console.log(genre); // undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);  // rock
    var genre = "r&b";
    console.log(genre); // r&b
}
console.log(genre); //disco

/* 7. 
* dojo = "san jose";
* console.log(dojo); // output will be san jose
* learn(); the function called and will display two output: seattle , burbank
* console.log(dojo); // output will be san jose
*/

dojo = "san jose";
console.log(dojo); // san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); // seattle
    var dojo = "burbank";
    console.log(dojo); // burbank
}
console.log(dojo); // san jose

/* 8. 
* console.log(makeDojo("Chicago", 65)); // call the fuction and print : 
* { name : "Chicago",
*   students : 65,
*   hiring : true }
* console.log(makeDojo("Berkeley", 0)); // call the function again and print type error:  Assignment to constant variable.
**/

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}










