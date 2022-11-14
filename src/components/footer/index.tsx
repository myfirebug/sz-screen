/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-31 21:28:27
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-12 16:56:52
 * @FilePath: \sz-screen\src\components\footer\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";

interface IFooterProps {
  path: string;
}

const Footer: FC<IFooterProps> = ({ path }) => {
  const history = useHistory();
  const [list] = useState([
    {
      name: "空气环境质量",
      url: "/air-environment",
    },
    {
      name: "水环境质量",
      url: "/water-environment",
    },
    {
      name: "应急指挥调度",
      url: "/home",
    },
    {
      name: "机动车数据",
      url: "/motor-vehicle-data",
    },
    {
      name: "重点污染企业",
      url: "/polluting-enterprises",
    },
  ]);

  const jump = useCallback((item: any) => {
    history.push(`${item.url}`);
  }, []);
  return (
    <ul className="app-footer">
      {list.map((item, index) => (
        <li
          onClick={() => jump(item)}
          key={item.url}
          className={`${path === item.url ? "is-active" : ""}`}
        >
          <span className={`icon icon-${index}`}></span>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Footer;
