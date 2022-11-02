/*
 * @Description: 事件相关通讯录
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-01 10:00:23
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-01 10:09:24
 * @FilePath: \my-app\src\pages\home\components\event-related-address-book\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";

interface IEventRelatedAddressBookProps {}

const EventRelatedAddressBook: FC<IEventRelatedAddressBookProps> = () => {
  return (
    <Box
      title="事件相关通讯录"
      style={{
        height: 572,
      }}
    />
  );
};

export default EventRelatedAddressBook;
