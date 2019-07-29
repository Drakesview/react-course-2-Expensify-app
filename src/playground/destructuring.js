//Object destructuring
//

// const person = {
//     age:'28',
//     location: {
//         city:'Torpoint',
//         temp:'18'
//     }
// }

// const { name = 'Annoymous', age } = person

// console.log(`${name} is ${age}.`)

// const {city, temp: temperature} = person.location

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher: {
//     }
// };

// const { name:publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName);

//Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia' , 'Pennsylvania', '19147']

const [, city, state] = address

console.log(`You are in ${city} ${state}`)

const item = ['Coffee(hot)', '$2', '$2.5', '$2.75' ]

const [itemName, , mediumPrice] = item

console.log(`A medium ${itemName} cost ${mediumPrice}`)

