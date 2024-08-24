import { useState } from "react"

const Profiles=(props)=>{
    const [count,setCount]=useState(0);
    return(
        <>
<h1>My Name is {props.name}</h1>
<h3>Count:{count}</h3>
<button onClick={()=>setCount(count+1)}>Increament</button>
        </>
    )
}
export default Profiles