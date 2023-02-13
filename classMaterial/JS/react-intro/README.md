# React introduction

## for software development: MVC (model, view, controller) (backend,frontend,logic)

## web development (lots of data communication) --> separation of front-end and back-end

## 3 libraries/platforms
#### Angular (developed by google, platform, typescript(), high cost, market value 30-35%) -->homedepot (MVVM)
#### React (developed by facebook, market value 60%) --> costco, walmart, Mcdonald's, Uber... (MV)
#### Vue (Alibaba, Baidu)



### react: M -> V !!! data (state) drives UI (update) !!!

## ReactJS
    ###- a js library to create UIs using reusable components
    ###- use virtual DOM to keep track of changes made to components

## commands:
1. To create: npx create-react-app appname
2. To run: npm run start / (npm start)
3. To end: ctrl + c 
4. To install node modules, run: npm install /npm i

## React-core features
1. Components (class-based -> function-based)
Reusable and modular pieces of codes
2019 - React16.8  --> functional components becomes popular
2. Virtual DOM (Model --> View), high performance
3. JSX-javascript 
html syntax (can write js inside {})
class ---> className
style ---> {object}, key/value, value: border-radius => borderRadius
eventListener 
4. module ---> import/export
5. return ---> only one tag

### React Data Communication

1. Parent to Child: props
In parent, pass argument to child component inside of the first <> ag:
   <WeatherPanel city={'beijing'}>

In children, use props to get the values eg: {key} inside of () ag:
   export const WeatherPanel = (props) => 

you can pass anything (including functions, html element, component etc...)

