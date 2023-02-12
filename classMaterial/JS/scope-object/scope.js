// Scope
// before 2015
// 1.1 global scope

let name = 'Rocky'
function testGlobalScope() {
    console.log(name)
}

testGlobalScope()

// 1.2 function scope
function testGlobalScope2() {
    let name2 = 'Jeff'
    console.log(name2)
}

testGlobalScope2()

// 1.3 block scope (ES2015)
// variable declared inside a {} cannot be accessed outside the block

for (let i=0; i<5; i++) {
    console.log('first loop',i)
}

for (let i = 1; i<3; i++) {
    console.log(i)
}


// 2 var vs let
// 2.1 let: does not pollute block scope. var will pollute everything
// 2.2 let: need to explicitly declared. var you can include no var
function testScope() {
    name = 'Jeff'
}
console.log(name)

const age = 31
const age = 32 //you cannot declare what you have been declared
console.log(age)


// hoisting: