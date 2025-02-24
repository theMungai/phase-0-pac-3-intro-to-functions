// Follow along with the examples here
function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}
  
sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1); 

function say(greeting, firstName) {
console.log("firstName: ", firstName);
console.log("greeting: ", greeting);
console.log(`${greeting}, ${firstName}!`);
}

say("Julio", "hello");

function add(x, y) {
    return x + y;
}
console.log(add(1, 2));