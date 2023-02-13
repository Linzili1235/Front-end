### React Data Communication

1. Parent to Child: props
   In parent, pass argument to child component inside of the first <> ag:
   <WeatherPanel city={'beijing'}>

    -- In children, use props to get the values eg: {key} inside of () ag:
export const WeatherPanel = (props) =>

    -- you can pass anything (including functions, html element, component etc...)


2. Child to parent: props
   pass a function (from parent) to child where child can call the function to\
modify the variables in parent

3. Child to child? 