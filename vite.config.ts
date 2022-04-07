/*
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-07 17:19:27
 * @LastEditTime: 2022-04-07 18:08:51
 * @LastEditors: 周啟尧
 * @Description: file content
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const variablePath = resolve("./src/variable.scss")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    preprocessorOptions: {
      scss:{
        // 注入全局 scss
        additionalData: `@import "${variablePath}";`
      }
    }
  }
})