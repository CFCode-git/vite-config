/*
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-07 17:27:42
 * @LastEditTime: 2022-04-13 15:28:34
 * @LastEditors: 周啟尧
 * @Description: file content
 */

import './index.scss';
import init from '../fib.wasm';
import SvgIcon from '../SvgIcon/index';
const icons = import.meta.globEager('../../assets/icons/logo-*.svg');
console.log('12', icons);
const iconUrls = Object.values(icons).map((mod) => mod.default);
const iconUrls2 = Object.values(icons).map((mod) => {
  // ../../assets/icons/logo-1.svg >> logo-1
  const fileName = mod.default.split('/').pop();
  const [svgName] = fileName.split('.');
  return svgName;
});

type FibFunc = (num: number) => number;

export function Comp1() {
  init({}).then((exports) => {
    const fibFunc = exports.fib as FibFunc;
    console.log('Fib result:', fibFunc(10));
  });
  return (
    <div>
      <p className="comp1">This is Comp1 -- scss</p>
      <div>
        <span> one </span>
        <div>
          {iconUrls.map((item) => (
            <img src={item} key={item} width="50" alt="" />
          ))}
        </div>
        <span> two </span>
        <div>
          {iconUrls2.map((item) => (
            <SvgIcon name={item} key={item} width="50" height="50" />
          ))}
        </div>
      </div>
    </div>
  );
}
