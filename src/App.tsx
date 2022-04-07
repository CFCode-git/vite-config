/*
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-07 17:19:27
 * @LastEditTime: 2022-04-07 18:39:41
 * @LastEditors: 周啟尧
 * @Description: file content
 */
import { useMemo, useCallback, useEffect, useState } from 'react';
import { Comp1 } from './components/Comp1/index';
import { Comp2 } from './components/Comp2/index';

function App() {
  const [n,setN] = useState(3)
  const changeComp = () => {
    setN(()=>{
      return n+1
    })
  }
  const m = useMemo(()=>{
    return n % 3 + 1 
  },[n])
  return (
    <div>
      <p>n:{n}</p>
      <p>m:{m}</p>
      <button onClick={changeComp}> change </button>
      {m === 1 && <Comp1 />}
      {m === 2 && <Comp2 />}
    </div>
  )
}

export default App
