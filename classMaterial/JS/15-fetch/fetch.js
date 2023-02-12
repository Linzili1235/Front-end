// Lesson 15 Fetch

// 1. get data from back end server
// through protocol communicate: http
// http is a protocol fetching resources such as html doc img ..

// 2. API:
// Application program interface
// 2.1 pre 2015
// http: request
// return xml (outdated)


// 2.2 post 2015: Fetch API
// return a promise ( response to the request )
// promise：请求的收据，类似点餐的收据，告诉你确认收到这个请求，因为请求有返回时间
// .then:  把实际的请求取回来
// .json: translate the response to json format
// fetch: a js internal function
// fetch is an asynchronous function
console.log('line21')
let result = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log('line 24 data is ready',data))  // 拿数据，对数据进行操作，都要在.then中进行
    .catch(err => console.log(err))
    .finally(() => console.log('game over'))

console.log('line 26',result)
// 3. Sync, Async
// 3.1 synchronous
// |-----------A------|
//                     |-----------B-----|
// for very important tasks
// place order at McDonald in line, one at a time
// high cost, similar to amazon place order (one line of placing order, only for you)
// user using resources exclusively, waiting, jam,

// 3.2 asynchronous
// |------A----|
//      |---B-|
// the process is not certain who's first
// due to the uncertainty of time consumption
// sharing resources, no jam
// a signal to inform when request is fulfilled


// 3.3 mix sync and async
// sync: skeleton
// async: content in each area

// 4. Promise
// promise is a data type in ES2015

// A promise has the following status
// 4.1 pending: initial state, neither fulfilled nor rejected

// 4.2 fulfilled: the operation was completed successfully
// .then is the signal for getting the result
// get the result in .then()

// 4.3 rejected: operation failed
// 404 is not a failed request, just don't have the page

// 5. catch error
// .catch

// 6. finally
// whether fulfilled or not, it's a finished promise.

// 7 register unsplash

const access_key = 'lWTGhYIC9so3HBszSJjuyH1nGuWbUpy4Hj2D-_YtJnk'

console.log('line 74')
fetch(`https://api.unsplash.com/search/photos?client_id=${access_key}&query=toronto`)
    .then(res => res.json())
    .then(data => console.log(data))
console.log('line 75')