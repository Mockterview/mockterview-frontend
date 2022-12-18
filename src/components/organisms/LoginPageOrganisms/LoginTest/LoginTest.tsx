import {useState } from 'react'


export default function LoginTest() {
    const [num, setNum] = useState(0)

    return(
        <div>
        <div> {num} </div>
        <button onClick={()=> {setNum(num+1)}}>하이 </button>
        </div>
    )
}