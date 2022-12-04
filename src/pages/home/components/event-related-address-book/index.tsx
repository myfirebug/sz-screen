/*
 * @Description: 事件相关通讯录
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-01 10:00:23
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-12-03 12:39:46
 * @FilePath: \sz-screen\src\pages\home\components\event-related-address-book\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, useEffect, useState } from "react";
import Box from "@src/components/box";
import Button from "@src/components/button";
import Ajax from "@src/service";
import "./index.scss";

interface IEventRelatedAddressBookProps {}

const EventRelatedAddressBook: FC<IEventRelatedAddressBookProps> = () => {
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    Ajax.eventRelatedAddressBook().then((res) => {
      setList(res.list);
    });
  }, []);
  return (
    <Box className="app-event-related-address-book" title="事件相关通讯录">
      <ul className="list">
        {list.map((item, index) => (
          <li className="item" key={index}>
            <dl>
              <dt className="title">
                {item.name}({item.data.length}人)
              </dt>
              {item.data.map((subItem: any, subIndex: number) => (
                <dd className="sub-item" key={subIndex}>
                  <div className="header">
                    <img src={subItem.avatar} alt="" />
                  </div>
                  <div className="body">
                    <div className="username">{subItem.name}</div>
                    {subItem.label ? (
                      <span className="label">{subItem.label}</span>
                    ) : null}
                  </div>
                  <div className="footer">
                    <Button type="primary">指令下发</Button>
                  </div>
                </dd>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default EventRelatedAddressBook;
