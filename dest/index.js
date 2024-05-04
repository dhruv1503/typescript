import { basic, message } from "./src/01-basics/index.js";
// import { name, age, isDeveloper, tentativeNoticePeriod, confidentNoticePeriod } from "./src/02-types/index.js"
import { developer, greet } from "./src/02-types/index.js";
import { printName } from "./src/03-objects/index.js";
console.log("Hello");
console.log(`${basic} connected`);
console.log(message.toLowerCase());
// console.log({name, age, isDeveloper, tentativeNoticePeriod, confidentNoticePeriod})
console.log(developer);
console.log(developer.name);
console.log(developer.age);
console.log(developer.confidentNoticePeriod);
console.log(developer.tentativeNoticePeriod);
console.log(developer.isDeveloper);
// this will throw an error as developer does not have "experctedNotice" key while defining it
// console.log(developer.experctedNotice)
// This will throw an error as function returns string even if return annotation is defined or not
// const greeting : number = greet(developer.name, new Date())
const greeting = greet(developer.name, new Date());
console.log(greeting);
const myName = printName({ firstName: "Dhruv" });
const myFullName = printName({ firstName: "Dhruv", lastName: "Aggarwal" });
console.log(myName);
console.log(myFullName);
