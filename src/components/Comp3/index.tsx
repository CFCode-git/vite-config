/*
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-07 22:26:48
 * @LastEditTime: 2022-04-07 22:51:06
 * @LastEditors: 周啟尧
 * @Description: file content
 */

import styled from 'styled-components';

export function Comp3() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  return <Title>This is Comp3 -- styled-components</Title>;
}
