/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-30 22:49:49
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-30 22:49:52
 * @FilePath: \my-app\src\utils\session-storage.ts
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
// Storage封装
const STORAGE_KEY = "PUBLIC";

const session = {
  setItem(key: string, value: any, moduleName?: string) {
    if (moduleName) {
      const val = this.getItem(moduleName);
      val[key] = value;
      this.setItem(moduleName, val);
    } else {
      const val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  // 获取某一个模块下面的属性user下面的userName
  getItem(key: string, moduleName?: string) {
    if (moduleName) {
      const val: any = this.getItem(moduleName);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  getStorage() {
    const result = (window as any).sessionStorage.getItem(STORAGE_KEY);
    return result ? JSON.parse(result) : {};
  },
  clear(key: string, moduleName: string) {
    const val = this.getStorage();
    if (moduleName) {
      if (val[moduleName]) return;
      delete val[moduleName][key];
    } else {
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  },
};

export default session;
