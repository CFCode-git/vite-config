/*
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-07 18:11:04
 * @LastEditTime: 2022-04-11 11:09:32
 * @LastEditors: 周啟尧
 * @Description: file content
 */

import React, { useEffect } from 'react';
import obj from '../../../package.json';
import style from './index.module.scss';
import logoSrc from '@assets/imgs/vite.png';
import { ReactComponent as ReactLogo } from '@assets/icons/logo.svg';

export function Comp2() {
  useEffect(() => {
    const img = document.getElementById('logo') as HTMLImageElement;
    img.src = logoSrc;
  });
  return (
    <div className={style.comp2}>
      <p>This is Comp2 -- css module</p>
      <p>version: {obj.devDependencies.vite}</p>
      <div>
        <span>方式1:</span>
        <img className="m-auto,mb-4" src={logoSrc} alt="" />
      </div>
      <div>
        <span>方式2:</span>
        <img id="logo" className="m-auto,mb-4" alt="" />
      </div>
      <div>
        <span>引入svg</span>
        <ReactLogo />
      </div>
    </div>
  );
}
