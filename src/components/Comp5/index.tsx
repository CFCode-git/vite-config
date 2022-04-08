/*
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-08 07:43:57
 * @LastEditTime: 2022-04-08 08:33:08
 * @LastEditors: 周啟尧
 * @Description: file content
 */

export function Comp5() {
  return (
    <div>
      <div className="flex-c"> flex-c </div>
      <p className="p-20px text-center"> This is Comp5 -- windi CSS </p>
      <p 
         bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
         text="sm white"
         font="mono light"
         p="y-2 x-4"
         border="2 rounded blue-200"
      >attributify</p>
    </div>
  );
}
