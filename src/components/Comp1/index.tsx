/*
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-07 17:27:42
 * @LastEditTime: 2022-04-11 13:01:39
 * @LastEditors: 周啟尧
 * @Description: file content
 */

import './index.scss';
import init from '../fib.wasm';

type FibFunc = (num: number) => number;

export function Comp1() {
  init({}).then((exports) => {
    const fibFunc = exports.fib as FibFunc;
    console.log('Fib result:', fibFunc(10));
  });
  return <p className="comp1">This is Comp1 -- scss</p>;
}
