import {myBioData} from "./export.js"
let myname = myBioData.name
let myAge = myBioData.Age
let Qualification = myBioData.HighestLevelofEducation

if(myAge < 21) {
    console.log(`Dear User, your previous input was ${myAge}, do you wish to change it?`)
}

if (myname) {
    console.log(`your inputted name is ${myname}, is this correct?`)
}

if (Qualification) {
    console.log(`kindly note, we only accept ${Qualification} as the minimum entry requirement`)
}

