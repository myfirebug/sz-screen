/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 17:09:13
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-06 20:16:51
 * @FilePath: \sz-screen\src\components\scroll-list\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, useState, useRef, useCallback, useEffect } from "react";
import "./index.scss";

interface IScrollListProps {
  data: any[];
  rows?: number;
  render: (data: any) => any;
  lineHeight?: number;
  rolling?: boolean;
}

const ScrollList: FC<IScrollListProps> = ({
  data,
  rows = 3,
  render,
  rolling = false,
  lineHeight = 40,
}) => {
  // 是否动画
  const [animate, setAnimate] = useState(false);
  // 定时器
  const timmer = useRef<any>(null);
  const [datas, setDatas] = useState<any[]>([]);

  const hander = useCallback(() => {
    setAnimate(true);
    clearTimeout(timmer.current);
    timmer.current = setTimeout(() => {
      setDatas((state) => {
        const newList = [...state];
        newList.push(newList[0]);
        newList.shift();
        return newList;
      });
      setAnimate(false);
    }, 400);
  }, []);

  useEffect(() => {
    if (data) {
      setDatas(
        data.map((item, index) => ({
          ...item,
          _customId: index,
        }))
      );
    }
  }, [data]);

  useEffect(() => {
    let intervalTimmer: any = null;
    if (datas.length > rows && rolling) {
      intervalTimmer = setInterval(hander, 4000);
    }
    return () => {
      clearInterval(intervalTimmer);
    };
  }, [rows, rolling, datas, hander]);

  return (
    <div
      className="app-scrollList"
      style={{
        height: lineHeight * rows,
      }}
    >
      <div
        className="app-scrollList__body"
        style={{
          transform: `translateY(${animate ? -lineHeight + "px" : 0})`,
          transition: `all ${animate ? 0.5 : 0}s`,
        }}
      >
        {datas && render && render(datas)}
      </div>
    </div>
  );
};

export default ScrollList;
