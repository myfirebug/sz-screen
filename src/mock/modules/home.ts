/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-05 21:41:39
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-06 12:41:24
 * @FilePath: \sz-screen\src\mock\modules\home.ts
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import Mock from "mockjs";
// 事件相关通讯录
export const eventRelatedAddressBook = {
  url: "/eventRelatedAddressBook",
  method: "get",
  data: {
    code: 0,
    sucess: true,
    data: Mock.mock({
      list: [
        {
          name: "应急事件群组",
          "data|2": [
            {
              name: "@region",
              avatar: "@image(200x100)",
              label: "",
            },
          ],
        },
        {
          name: "现场处置人员",
          "data|1-5": [
            {
              name: "@region",
              avatar: "@image(200x100)",
              label: "@csentence(5)",
            },
          ],
        },

        {
          name: "相关单位联系人",
          "data|1-8": [
            {
              name: "@region",
              avatar: "@image(200x100)",
              label: "@csentence(5)",
            },
          ],
        },
      ],
    }),
  },
  message: "成功",
};
