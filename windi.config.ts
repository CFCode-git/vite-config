/*
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-08 07:48:54
 * @LastEditTime: 2022-04-08 11:22:29
 * @LastEditors: 周啟尧
 * @Description: file content
 */

import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  attributify: true,
  shortcuts: {
    'flex-c': 'flex justify-center items-center'
  }
});
