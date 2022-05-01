//var setting - var/ let/ const
// const cannot be used 
// let have a block level scope. let lives only within the scope it is (for loop for instance)
// we can use the same name twice with let.


// Data types : strings, numbers, booleann, null, undefined, symbol


const name = "Mr.Hello";
const age = 30;
const rating = 7.8
const isCool = true
const x = null
const y = undefined
let z


console.log(typeof isCool)
let list
list = ['a', 'b', 'c']
// ways to print:
console.log('My name is ' + name + ' and I am ' + age)
console.log(`My name is  ${name} + and I am ${age}`)

// how to add and remove from a list

list.push('something') // puts in the last place
list.unshift('something') // puts in the first place
list.pop()  // takes the last place out

list.isArray('something') // is something inside the list


// if else
x = 7
const color = x > 10 ? 'red' : 'blue' // if x > 10 then red else blue

// class

class Person {
    constructor(firstname, lastName){
    this.firstname = firstname;
    this.lastName = lastName;}
}

const person1 = new Person('John', 'The man')



// multy element select 

document.querySelectorAll('.item')
document.getElementsByClassName('item')

// interactive style

elemnt.addEventListener('click', (e) => {
    e.preventDefault // cancel default settings for click
    console.log('click');
})