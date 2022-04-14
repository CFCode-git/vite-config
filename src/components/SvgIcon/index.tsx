/*
import { useEffect } from 'react';
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-13 14:38:39
 * @LastEditTime: 2022-04-13 15:25:03
 * @LastEditors: 周啟尧
 * @Description: file content
 */

export interface SvgIconProps {
  name?: string;
  prefix?: string;
  color?: string;
  [key: string]: string | undefined;
}

export default function SvgIcon({
  name,
  prefix = 'icon',
  color = '#333',
  ...props
}: SvgIconProps) {
  const symbolId = `#${prefix}-${name}`;

  console.log(props);
  return (
    <svg {...props} aria-hidden="true">
      <use href={symbolId} fill={color}></use>
    </svg>
  );
}
