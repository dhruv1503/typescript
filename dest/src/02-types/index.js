export const name = "Dhruv Aggarwal";
export const age = 28;
export const isDeveloper = true;
export const tentativeNoticePeriod = ["June", "July", "August"];
export const confidentNoticePeriod = ["Mid June", "July", "August", "Mid September"];
export const isPlanningNoitce = true;
export const developer = { name, age, isDeveloper, tentativeNoticePeriod, confidentNoticePeriod, isPlanningNoitce };
// parameters are valid only if they have types defind, even any
// export function greet(name : string, date : Date){
//     return `Hello ${name}, right now time is ${date.toLocaleTimeString()}`
// }
// function that explicity defined return type
export function greet(name, date) {
    return `Hello ${name}, right now time is ${date.toLocaleTimeString()}`;
}
// Promise 
