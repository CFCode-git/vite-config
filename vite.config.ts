/*
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-07 17:19:27
 * @LastEditTime: 2022-04-08 07:42:58
 * @LastEditors: 周啟尧
 * @Description: file content
 */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import windi from 'vite-plugin-windicss';
const variablePath = resolve('./src/variable.scss');
const autoprefixer = require('autoprefixer');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components', '@emotion/babel-plugin'],
      },
      jsxImportSource: '@emotion/react',
    }),
    windi()
  ],
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        // 注入全局 scss
        additionalData: `@import "${variablePath}";`,
      },
    },
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
        }),
      ],
    },
  },
});
