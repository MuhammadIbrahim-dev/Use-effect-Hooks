import React, { useEffect, useState } from 'react'

export default function EffectHooks() {
    let [Count,SetCount]=useState(1)

    let changeCounter=()=>{
        SetCount(Count+1)
    }
    useEffect(()=>{
    console.log("ibrahim",Count)
    },[Count])
  return (
    <div className='ml-[10%]'>        
        <button onClick={changeCounter}>counts</button>
        {Count}
    </div>
  )
}
