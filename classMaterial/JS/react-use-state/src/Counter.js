import './Counter.scss'

export const Counter = ({phone,add})=> {
    let index = 'jt'
    return <div className='counterContainer'>
        <h3>counter content</h3>
        <button onClick={() => {
            phone(index)
            add()}}>click me</button>

    </div>
}