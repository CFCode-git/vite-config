/*
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-07 17:19:27
 * @LastEditTime: 2022-04-08 07:47:24
 * @LastEditors: 周啟尧
 * @Description: file content
 */
import { useMemo, useCallback, useEffect, useState } from 'react';
import { Comp1 } from './components/Comp1/index';
import { Comp2 } from './components/Comp2/index';
import { Comp3 } from './components/Comp3/index';
import { Comp4 } from './components/Comp4/index';
import { Comp5 } from './components/Comp5/index';


function App() {
  const [n,setN] = useState(5)
  const changeComp = () => {
    setN(()=>{
      return n+1
    })
  }
  const m = useMemo(()=>{
    return n % 5 + 1 
  },[n])
  return (
    <div>
      <p>n:{n}</p>
      <p>m:{m}</p>
      <button onClick={changeComp}> change </button>
      {m === 1 && <Comp1 />}
      {m === 2 && <Comp2 />}
      {m === 3 && <Comp3 />}
      {m === 4 && <Comp4 />}
      {m === 5 && <Comp5 />}
    </div>
  )
}

export default App
