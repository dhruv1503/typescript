// export const name : string = "Dhruv Aggarwal";
// export const age : number = 28;
// export const isDeveloper : boolean = true
// export const tentativeNoticePeriod : string[] = ["June", "July", "August"];
// export const confidentNoticePeriod : Array<string> = ["Mid June", "July", "August", "Mid September"];
// export const isPlanningNoitce = true

// export const developer = {name, age, isDeveloper, tentativeNoticePeriod, confidentNoticePeriod, isPlanningNoitce}

// We coded a similar type of object in module2 (types) , but what if we want to declare a object type, as we cannot keep on declaring same type of object and ensure type safety, right? For that we use type aliases, look below 

type months  =  "january" | "february" | "march" | "april" | "may" | "june" | "july" | "august" | "september" | "october" | "november" | "december"

export type Employee = {
name : string,
age : number,
isDeveloper: boolean,
tentativeNoticePeriod? : months[] | months,
confidentNoticePeriod? : months[] | months,
isPlanningNotice : boolean
}

// lets use it in index.js main file