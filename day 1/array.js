// let firstName = 'Asabeneh'
// firstName = 'Eyob'

// const PI = 3.14 // Not allowed to reassign PI to a new value
// // PI = 3.

// // syntax
// const arr = Array()
// // or
// // let arr = new Array()
// console.log(arr) // []

// // syntax
// // This the most recommended way to create an empty list
// const arr = []
// console.log(arr)


// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// // Print the array and its length

// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)

// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// console.log('Vegetables:', vegetables)
// console.log('Number of vegetables:', vegetables.length)

// console.log('Animal products:', animalProducts)
// console.log('Number of animal products:', animalProducts.length)

// console.log('Web technologies:', webTechs)
// console.log('Number of web technologies:', webTechs.length)

// console.log('Countries:', countries)
// console.log('Number of countries:', countries.length)


// Numbers: [0, 3.14, 9.81, 37, 98.6, 100]
// Number of numbers: 6
// Fruits: ['banana', 'orange', 'mango', 'lemon']
// Number of fruits: 4
// Vegetables: ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
// Number of vegetables: 5
// Animal products: ['milk', 'meat', 'butter', 'yoghurt']
// Number of animal products: 4
// Web technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
// Number of web technologies: 7
// Countries: ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway']
// Number of countries: 5



// const arr = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
//   ] // arr containing different data types
//   console.log(arr)


//   let js = 'JavaScript'
// const charsInJavaScript = js.split('')

// console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const companies = companiesString.split(',')

// console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = txt.split(' ')

// console.log(words)
// // the text has special characters think how you can just get only the words
// // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]



// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let firstFruit = fruits[0] // we are accessing the first item using its index

// console.log(firstFruit) // banana

// secondFruit = fruits[1]
// console.log(secondFruit) // orange

// let lastFruit = fruits[3]
// console.log(lastFruit) // lemon
// // Last index can be calculated as follows

// let lastIndex = fruits.length - 1
// lastFruit = fruits[lastIndex]

// console.log(lastFruit) // lemon


// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // set of numbers

// console.log(numbers.length) // => to know the size of the array, which is 6
// console.log(numbers) // -> [0, 3.14, 9.81, 37, 98.6, 100]
// console.log(numbers[0]) //  -> 0
// console.log(numbers[5]) //  -> 100

// let lastIndex = numbers.length - 1
// console.log(numbers[lastIndex]) // -> 100


// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//   ] // List of web technologies
  
//   console.log(webTechs) // all the array items
//   console.log(webTechs.length) // => to know the size of the array, which is 7
//   console.log(webTechs[0]) //  -> HTML
//   console.log(webTechs[6]) //  -> MongoDB
  
//   let lastIndex = webTechs.length - 1
//   console.log(webTechs[lastIndex]) // -> MongoDB


//   const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ] // List of countries
  
//   console.log(countries) // -> all countries in array
//   console.log(countries[0]) //  -> Albania
//   console.log(countries[10]) //  -> Kenya
  
//   let lastIndex = countries.length - 1
//   console.log(countries[lastIndex]) //  -> Kenya
  
  
//   const shoppingCart = [
//     'Milk',
//     'Mango',
//     'Tomato',
//     'Potato',
//     'Avocado',
//     'Meat',
//     'Eggs',
//     'Sugar',
//   ] // List of food products
  
//   console.log(shoppingCart) // -> all shoppingCart in array
//   console.log(shoppingCart[0]) //  -> Milk
//   console.log(shoppingCart[7]) //  -> Sugar
  
//   let lastIndex = shoppingCart.length - 1
//   console.log(shoppingCart[lastIndex]) //  -> Sugar



//   const numbers = [1, 2, 3, 4, 5]
//   numbers[0] = 10 // changing 1 at index 0 to 10
//   numbers[1] = 20 // changing  2 at index 1 to 20
  
//   console.log(numbers) // [10, 20, 3, 4, 5]
  
//   const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ]
  
//   countries[0] = 'Afghanistan' // Replacing Albania by Afghanistan
//   let lastIndex = countries.length - 1
//   countries[lastIndex] = 'Korea' // Replacing Kenya by Korea
  
//   console.log(countries)



//   const arr = Array() // creates an an empty array
// console.log(arr)

// const eightEmptyValues = Array(8) // it creates eight empty values
// console.log(eightEmptyValues) // [empty x 8]


// const arr = Array() // creates an an empty array
// console.log(arr)

// const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
// console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

// const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
// console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

// const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
// console.log(four4values) // [4, 4, 4, 4]


// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList = firstList.concat(secondList)

// console.log(thirdList) // [1, 2, 3, 4, 5, 6]


// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
// const fruitsAndVegetables = fruits.concat(vegetables) // concatenate the two arrays

// console.log(fruitsAndVegetables)

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.length) // -> 5 is the size of the array


// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.indexOf(5)) // -> 4
// console.log(numbers.indexOf(0)) // -> -1
// console.log(numbers.indexOf(1)) // -> 0
// console.log(numbers.indexOf(6)) // -> -1


// // let us check if a banana exist in the array

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('banana') // 0

// if (index != -1) {
//   console.log('This fruit does exist in the array')
// } else {
//   console.log('This fruit does not exist in the array')
// }
// // This fruit does exist in the array

// // we can use also ternary here
// index != -1
//   ? console.log('This fruit does exist in the array')
//   : console.log('This fruit does not exist in the array')

// // let us check if a avocado exist in the array
// let indexOfAvocado = fruits.indexOf('avocado') // -1, if the element not found index is -1
// if (indexOfAvocado != -1) {
//   console.log('This fruit does exist in the array')
// } else {
//   console.log('This fruit does not exist in the array')
// }
// // This fruit does not exist in the array


// const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

// console.log(numbers.lastIndexOf(2)) // 7
// console.log(numbers.lastIndexOf(0)) // -1
// console.log(numbers.lastIndexOf(1)) //  6
// console.log(numbers.lastIndexOf(4)) //  3
// console.log(numbers.lastIndexOf(6)) // -1

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.includes(5)) // true
// console.log(numbers.includes(0)) // false
// console.log(numbers.includes(1)) // true
// console.log(numbers.includes(6)) // false

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ] // List of web technologies

// console.log(webTechs.includes('Node')) // true
// console.log(webTechs.includes('C')) // false


// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers)) // true

// const number = 100
// console.log(Array.isArray(number)) // false


// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
// console.log(names.join('')) //AsabenehMathiasEliasBrook
// console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
// console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
// console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ] // List of web technologies

// console.log(webTechs.join()) // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
// console.log(webTechs.join(' # ')) // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"


// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.slice()) // -> it copies all  item
// console.log(numbers.slice(0)) // -> it copies all  item
// console.log(numbers.slice(0, numbers.length)) // it copies all  item
// console.log(numbers.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position


// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.splice()) // -> remove all items

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.splice(0, 1)) // remove the first item

// const numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// // syntax
// const arr = ['item1', 'item2', 'item3']
// arr.push('new item')

// console.log(arr)
// // ['item1', 'item2','item3','new item']

// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6)

// console.log(numbers) // -> [1,2,3,4,5,6]

// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4,5]


// let fruits = ['banana', 'orange', 'mango', 'lemon']
// fruits.push('apple')

// console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple']

// fruits.push('lime')
// console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']

// syntax
// const arr = ['item1', 'item2', 'item3']
// arr.push('new item')

// console.log(arr)
// ['item1', 'item2','item3','new item']

// let fruits = ['banana', 'orange', 'mango', 'lemon']
// fruits.push('apple')

// console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple']

// fruits.push('lime')

// console.log(fruits)

// const numbers = [1, 2, 3, 4, 5]
// numbers.pop() // -> remove one item from the end

// console.log(numbers) // -> [1,2,3,4]

// const numbers = [1, 2, 3, 4, 5]
// numbers.shift() // -> remove one item from the beginning

// console.log(numbers) // -> [2,3,4,5]

// const numbers = [1, 2, 3, 4, 5]
// numbers.unshift(0) // -> add one item from the beginning

// console.log(numbers) // -> [0,1,2,3,4,5]

// const numbers = [1, 2, 3, 4, 5]
// numbers.reverse() // -> reverse array order

// console.log(numbers) // [5, 4, 3, 2, 1]

// numbers.reverse()
// console.log(numbers) // [1, 2, 3, 4, 5]

// sorting an array

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//   ]
  
//   webTechs.sort()
//   console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
  
//   webTechs.reverse() // after sorting we can reverse it
//   console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// const firstNums = [1, 2, 3]
// const secondNums = [1, 4, 9]

// const arrayOfArray = [
//   [1, 2, 3],
//   [4, 2, 3],
// ]
// console.log(arrayOfArray[1]) // [1, 2, 3]

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// const fullStack = [frontEnd, backEnd]
// console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
// console.log(fullStack.length) // 2
// console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]
// console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ]
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//   ]

// a = [];

// b = ['Emmanuel', 'Omar', 'David', 'Foofoocuddlypoops', 'Hondo', 'Legwork', 'Ephraim']

// console.log(b.length)

// console.log(b[0])

// lastE = b.slice(-1)
// console.log(lastE)

// midE = b[(b.length + 1)/ 2 ]
// console.log(midE)

mixedDataTypes = [1 , 'Adesanya', null, true, 6.8, 'Maiduguri']

companies = ['Facebook', "Google", "Microsoft", 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(companies)

// console.log(companies.length)

// console.log(companies[0])
// console.log(companies[companies.length -1])
// console.log(companies[(companies.length -1)/3])

// middle = companies[Math.round((companies.length - 1)/ 2)]
// console.log(middle)

// middle1 = Math.floor(companies.length / 2)
// console.log(companies[middle1])
// for (i = 0; i < companies.length; i++){
//     console.log(companies[i])
// }

// for (i = 0; i < companies.length; i++){
//     console.log(companies[i].toUpperCase())
// }

// verify = companies.includes('Microsoft')
// console.log(verify)

// for (i = 0; i < companies.length; i++){
//     console.log(companies[i].includes('o'))
// }

// console.log(companies.sort().reverse())

// console.log(companies.reverse())

// console.log(companies.slice(4))

console.log(companies.splice((companies.length -1)/2))








