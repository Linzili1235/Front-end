import {useState} from "react";
import './MyForm.scss'


// react-hook-form //
// js-regular-expression
export const MyForm = () => {
    const submitHandler = (e) => {
        console.log('submitted', formData)
        e.preventDefault()
    }
    const changeHandler = ({target}) => {
        let {name,value} = target

        console.log(value)
        console.log(name)
        setFormData(prevState => (
            {...prevState,
                [name]:value}))
    }

    const clearHandler = () => {
        setFormData({
            firstName: '',
            lastName: '',
            password: '',
            email: ''})
    }
    // set a state to store the info from user
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        email: ''
    })
    return <>
    <h1>hello, this is new member</h1>
        <p>{JSON.stringify(formData)}</p>
        <form action="" onSubmit={submitHandler}>
            <label  htmlFor="">First Name</label>
            <input type="text"
            name="firstName"
                   placeholder="Nicole"
                   value={formData.firstName}
                   onChange={changeHandler}
            />
            <label  htmlFor="">Last Name</label>
            <input type="text"
                   required={true}
                   name="LastName"
                   placeholder="Q"
                   onChange={changeHandler}
            />
            <label  htmlFor="">Password*: </label>
            <input type="password"
                   name="password"
                   placeholder="1234567"
                   onChange={changeHandler}
            />
            <label  htmlFor="">Email: </label>
            <input type="email"
                   name="email"
                   placeholder="yourname@163.com"
                   onChange={changeHandler}
            />
            <button type="submit">Submit</button>
            <button onClick={clearHandler}>reset</button>





        </form>
    </>
}