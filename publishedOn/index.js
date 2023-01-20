
let date =  new Date;

// console.log(date)

function insertToObject(object){
    object.published_on = `${date}`
    console.log(object)
}

let myObject ={
                    author:"suzanne Collins",
                    title:"Mockingjay: The final book of The Hunger Games",
                    readingStatus:false
                }

insertToObject(myObject)

