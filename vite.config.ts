/*
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-07 17:19:27
 * @LastEditTime: 2022-04-13 14:58:13
 * @LastEditors: 周啟尧
 * @Description: file content
 */

import path from 'path';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import windi from 'vite-plugin-windicss';
import viteEslint from 'vite-plugin-eslint';
const variablePath = resolve('./src/variable.scss');
const autoprefixer = require('autoprefixer');
import svgr from 'vite-plugin-svgr';
import viteImagemin from 'vite-plugin-imagemin';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// 是否生产环境,如果是生产环境则使用CDN_URL
const isProduction = process.env.NODE_ENV === 'production';
const CDN_URL = '/xxxxxx/';

// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? CDN_URL : '/',
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components', '@emotion/babel-plugin']
      },
      jsxImportSource: '@emotion/react'
    }),
    windi(),
    viteEslint(),
    svgr(),
    viteImagemin({
      // 无损压缩配置
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置
      pngquant: {
        quality: [0.8, 0.9]
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [path.join(__dirname, 'src/assets/icons')]
    })
  ],
  json: {
    stringify: true
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    },
    preprocessorOptions: {
      scss: {
        // 注入全局 scss
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets')
    }
  }
});
