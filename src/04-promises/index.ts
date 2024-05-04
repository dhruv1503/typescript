// export const isPlanningResignition = (lowJobSatisfaction : boolean) : Promise<string>  => {
//     return new Promise<string>((resolve : Function , reject : Function) => {
//         if(lowJobSatisfaction){
//             resolve("yes")
//         }
//         else{
//             reject("no")
//         }
//     })
//     }




// const planningToResignPromise : Promise<string> = isPlanningResignition(developer.isPlanningNoitce);
// async function areYouResigning(developerReply : boolean) : <Promise>string{
//     try{
//        const planningToResign : string = await isPlanningResignition(developerReply);
//        console.log(planningToResign)
//        return planningToResign; 
//     }
//     catch(error){
//         return error as string
//     }
// } 
// const planningToResign : string = areYouResigning(developer.isPlanningNoitce).then((response) => )
// console.log(planningToResignPromise)
// console.log(planningToResign)

// promises to be done later