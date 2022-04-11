/*
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-11 11:12:10
 * @LastEditTime: 2022-04-11 11:12:10
 * @LastEditors: 周啟尧
 * @Description: file content
 */

const start = () => {
  let count = 0;
  setInterval(() => {
    // 给主线程传值
    postMessage(++count);
  }, 2000);
};

start();
