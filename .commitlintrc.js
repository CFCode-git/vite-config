/*
 * @Author: 周啟尧 zhouqy50@chinaunicom.cn
 * @Date: 2022-04-11 08:16:27
 * @LastEditTime: 2022-04-11 08:28:40
 * @LastEditors: 周啟尧
 * @Description: file content
 */

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules:{
    "type-enum": [2, "always", [
        'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
        'lint',
    ]]
  }
}