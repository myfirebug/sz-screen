/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-05 21:58:55
 * @FilePath: \sz-screen\src\service\index.ts
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { get, IResult, post } from "./fetch";
import { IAnyObject } from "@src/types";
interface IApi {
  [propNames: string]: (params?: IAnyObject) => Promise<IResult>;
}

const api: IApi = {
  // 事件相关通讯录
  eventRelatedAddressBook(params: any) {
    return get({
      url: `/eventRelatedAddressBook`,
      loading: true,
      data: params,
      servicePrefix: "local",
    });
  },
};

export default api;
