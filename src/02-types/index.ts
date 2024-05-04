export const name : string = "Dhruv Aggarwal";
export const age : number = 28;
export const isDeveloper : boolean = true
export const tentativeNoticePeriod : string[] = ["June", "July", "August"];
export const confidentNoticePeriod : Array<string> = ["Mid June", "July", "August", "Mid September"];
export const isPlanningNoitce = true

export const developer = {name, age, isDeveloper, tentativeNoticePeriod, confidentNoticePeriod, isPlanningNoitce}

// parameters are valid only if they have types defind, even any
// export function greet(name : string, date : Date){
//     return `Hello ${name}, right now time is ${date.toLocaleTimeString()}`
// }

// function that explicity defined return type
export function greet(name : string, date : Date): string{
    return `Hello ${name}, right now time is ${date.toLocaleTimeString()}`
}

// Promise 

