import { useEffect } from "react";
import { useState } from "react";

function New(){
    const [data,setData]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setData(data==false)
        },3000)
    },[])
    return <>
      <h1>{data?"Loading":"Loaded Successfully"}</h1>
    </>
}

export default New;