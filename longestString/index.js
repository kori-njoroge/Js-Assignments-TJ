// alert("ssup")

// let myString = window.prompt("Enter your string", "")

let myString = "Web development Tutorial "
let strArray = myString.split(" ")

console.log(strArray)

function findLongest(str){
    let strArray = str.split(" ")
    let longest =strArray[0];
    for(let i = 0;i < strArray.length; i++){
        if(longest.length <strArray[i].length){
            longest= strArray[i]
        }
    }
    return longest;
}


console.log(findLongest(myString))