//
// object
//

// const person = {
//     name : "zeyad",
//     age : 16,
//     location : {
//         city : "alexandria",
//         temp : 26
//     }
// }

// const { name: fristName = 'Anonymous' , age } = person
// console.log( `${fristName} is ${age}.`)

// const {city , temp : temprature} = person.location
// if ( city && temprature ){
//     console.log( `it ${temprature}c in ${city}`)
// }


// const book = {
//     title : "Ego is the Enemy", 
//     author : "Ryan holiday",
//     publisher : {
//         name : "penguin"
//     }
// } 

// const { name: publisherName = "Self-Published" } = book.publisher
// console.log(publisherName)

//
// array
//


// const address = [ '299 s junpier Street', 'alexandria', "Egypt", "4546" ]
// const [, city, country] = address
// console.log( `You are in ${city} , ${country}` )

const item = [ "coffe (hot)", "$2.00", "$2.50", "$2.75" ]
const [ coffeHot, , medium,] = item

console.log(`A meduim ${coffeHot} , cost : ${medium}`)