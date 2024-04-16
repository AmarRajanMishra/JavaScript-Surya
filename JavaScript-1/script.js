// console.log('Hello world')
// console.warn('Hello world')
// console.error('Hello world')

// alert('Hello world')

// var a = 20

// var a = 50
// a = 60

// console.log(a)

// let b = 30

// b = 60

// console.log(b)

// const c = 40


// console.log(c)


// Primitive Data Types
// Number (int float double long)

// let a = 20
// let b = 20.5

// console.log(a,b)
// console.log(typeof(b))

// // 2. String
// let name = 'Ajay'
// console.log(name)
// console.log(typeof(name))

// 3. Boolean(true and false)
// let a = true
// console.log(a)
// console.log(typeof(a))

// 4. undefined

// let a
// console.log(a)
// console.log(typeof(a))

// 5. Null
// let a = null
// console.log(a)
// console.log(typeof(a))

// Operators

// let a = 20 
// let b = 30
// let result = a+b

// Comparission operator

// let a = 20
// let b = '20'

// console.log(a==b) // it compare only value
// console.log(a===b) // it compare value as well as data types


// Control Structure

// if(condition){
//     statement
// }else if(condition){

// }

// switch(value){
//     case 1:
//         statement
//         break;
//     case 2:
//         statement
//         break;
//     default:
//         statement
// }


// loops
// for loop

// for(let i = 0; i < Condition;  i++){
//     statement
// }

// while loop

// while(condition){
//     statement
//     increment/decrement

// }

// do while loop

// do{
//     statement
//     increment/decrement
// }while(condition)


// Non-Primitive Data Types
// Array => 
// let a = [20, 30, "Ajay", 2.4]
// // console.log(a)
// for(let i = 0; i < a.length; i++){
//     console.log(a[i])
// }
// Object

// let obj = {
//     key : "Value"
// }

// let Student = {
//     Name : 'Rajat',
//     RollNo : 20,
//     Course : "React JS"
// }

// // console.log(Student.RollNo)
// // console.log(Student['RollNo'])

// Student.Name = 'Rajat Mishra'
// Student['RollNo'] = 30

// console.log(Student)


// 

// let Student = [
//     {Name : 'Ajay', RollNo : 1, Course : 'React JS'},
// {Name : 'Amar', RollNo : 2, Course : 'View JS'},
// {Name : 'Shruti', RollNo : 3, Course : 'JavaScript'}
// ]
// console.log(Student[2].Name)

// let obj = {
//     Name : 'Abcd',
//     Range : [20, 30, 40]
// }

// // console.log(obj[1].Range[1]) // Error 
// console.log(obj.Range[1]) // Success

// Functions
// Function Without Parameter and without returnable
    // function functionName(){
    //     statement
    // }

    // function hello(){
    //     console.log('Hello')
    // }

    // hello()

// Function With Parameter and without returnable

// function hello(name){
//     console.log('hello', name)
// }

// hello('Surya')

// Function Without Parameter and with returnable
        // function Sum(){
        //     let a = 20, b = 30
        //     let result = a+b
        //     return result
        // }
        
        // // console.log(Sum())
        // let Data = Sum()
        // console.log(Data)

// Function With Parameter and with returnable

// function Sum(a, b){
//     let result = a+b
//     return result
// }

// let data = Sum(20, 30)
// console.log(data)


// const Sum = (a, b) =>{
//     let result = a+b
//     return result
// }

// let data = Sum(20, 30)

// console.log(data)


// 
// function hello(){
//     console.log('hello')
// }
// hello()


// const hello1 = () => console.log('hello')
// hello1()