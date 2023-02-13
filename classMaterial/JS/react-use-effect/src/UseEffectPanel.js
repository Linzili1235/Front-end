import {useEffect, useState} from "react";

export const UseEffectPanel = () => {
    console.log('===> useEffect before return')

    const [counter, updateCounter] = useState(10)
    const [value1, updateValue1] = useState(1)
    const [value2, updateValue2] = useState(1)
// when dependency is [], then do it componentdidmount(after component mount)
    // useEffect(()=> console.log('==> inside useEffect'),[])

    useEffect(()=>{
        document.title = 'hello'
        const eleP = document.getElementById('eleP')
        eleP.innerText = 'this is test'
        console.log(eleP.getBoundingClientRect().height)

    },[value1, value2])

    // when there is dependency, component did mount and will update based on dependency
    useEffect(()=>{
        let timeID = setInterval(()=>updateCounter(prevState => --prevState), 1000)
        counter === 5 && clearInterval(timeID)
        // return means when component did unmount, you have to clear the timer to avoid memory leak
        return (() => clearInterval(timeID))
    },[counter])

    return <div className="panelContainer">

        {console.log('==> useEffect before p')}
            <p onClick={() => updateValue1(prevState => ++prevState)}
                id='eleP'>This is useEffect panel</p>
        <button onClick={()=>updateValue2(prevState => ++prevState) }>click </button>
        {counter > 5 && <h2>{counter}</h2>}
        {/*{console.log('==> useEffect after p')}*/}
    </div>
}