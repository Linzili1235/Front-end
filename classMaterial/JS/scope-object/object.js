// Object
// to store various key collections and complex properties

// 1.1 format
// {key: value}
let car = {
    'color': 'red',
    mileage: 10000,
    imported: false,
    tired: ['Michelin','Michelin', 'Bridgestone','Bridgestone'],
    engine: {
        type: 'V6',
        liter: 3.5
    },
    funHorn: function (count) { // funHorn is the key
        console.log('horn!!!!!',count)
    }
}

// 1.2 key
// key, name of property
// could use quotation mark
// 1.4 object can be elements of array
console.log(car)
console.log(car.mileage)
console.log(car['mileage'])

car.color = 'green'
console.log(car.color)
// 1.5 use object and its properties
console.log(car.funHorn(5))