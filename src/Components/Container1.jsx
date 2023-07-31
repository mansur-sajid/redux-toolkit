import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buy, reStockd } from '../Features/Cake/cakeSlice'
function Container1() {
    const cakes = useSelector (state=> state.cake.noOfCakes)
    const dis = useDispatch()
    const [num, setNum] = useState(1)
  return (
    <div>
      <h3>Cakes Left - {cakes}</h3>
      <button onClick={
        ()=> dis(buy(num))
      }>Click to remove {num} cakes</button>
      <input type="text" onChange={(e)=>{
        setNum(e.target.value)
      }}/>
      <button onClick={
        ()=> dis(reStockd())
      }>Click me to restock</button>
    </div>
    
  )
}

export default Container1
