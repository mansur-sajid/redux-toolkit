import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ibuy, ireStockd } from '../Features/IceCream/iceCreamSlice'

function Container2() {
    const iceCreams = useSelector(state=>state.ice.noOfIce)
    const dis = useDispatch()
    const [num, setNum] = useState(0)
  return (
    <div>
      <h3>Ice Creams Left - {iceCreams}</h3>
      <button onClick={()=>{
        dis(ibuy(1))
      }}>Click Me to remove 1 ice Cream</button>
      <input type="text" onChange={(e)=>setNum(e.target.value)}/>
      <button onClick={()=> dis(ireStockd())}>Click Me to Restock</button>
    </div>
  )
}

export default Container2
