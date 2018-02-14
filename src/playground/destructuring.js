// const person = {
//     name: 'Jag',
//     age: '35',
//     location: {
//         city: 'bedford',
//         temp: 72
//     }
// }

// const {name = 'Anon', age} = person

// console.log(`${name} is ${age} years old`);

// const {city, temp} = person.location


// if (city && temp) {
//     console.log(`its ${temp} in ${city}`)
// }


const address = ['1299 S Street', 'Phili', 'Pennsylvania', '19875'];

const [, city, state] = address; 


console.log(`You are in ${city} ${state}`)