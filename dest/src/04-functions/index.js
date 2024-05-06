// unoion Types 
export function printJobId(jobId) {
    console.log(`Job id is ${jobId}`);
}
export function printUpperCaseJobId(jobId) {
    // Below line will give an error, this issue here is job id param accepts string as well as number, .toUpperCase() is a string method(accepts strings only) and code crashes on runtine in JS, therefore on has to explicity define, if jobid is string, then apply string methods, this concept is called as narrowing, otherwise common methods in both data types can always be used.
    // console.log(`Job id is ${jobId.toUpperCase()}`)
    if (typeof (jobId) === "string") {
        console.log(`Job id is ${jobId.toUpperCase()}`);
    }
    else {
        console.log(`Job id is ${jobId}`);
    }
}
// Another example of narrowing and union
export function introToNewTeam(name, team) {
    if (Array.isArray(team)) {
        return `Hello, ${team.join(", ")} , My name is ${name}`;
    }
    return `Hello ${team}, My name is ${name}. How are you?`;
}
