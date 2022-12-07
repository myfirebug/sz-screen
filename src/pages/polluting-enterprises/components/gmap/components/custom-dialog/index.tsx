/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-12-07 21:38:55
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-12-07 22:00:55
 * @FilePath: \sz-screen\src\pages\polluting-enterprises\components\gmap\components\custom-dialog\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, useState } from "react";
import "./index.scss";
// 弹窗
import Dialog from "@src/components/dialog";
interface ICustomDialogProps {
  title: string;
  hideHander: () => void;
}

const CustomDialog: FC<ICustomDialogProps> = ({ title, hideHander }) => {
  const [options] = useState([
    {
      name: "卡口监控",
      value: "1",
      data: [
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
      ],
    },
    {
      name: "卡口监控",
      value: "1",
      data: [
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
      ],
    },
    {
      name: "网吧监控",
      value: "2",
      data: [
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
      ],
    },
  ]);
  return (
    <Dialog
      className="app-dialog__air"
      title={title}
      hideHander={hideHander}
      style={{
        width: 998,
        height: 640,
      }}
    >
      <ul className="info">
        <li>
          <p className="name">企业名称</p>
          <p className="value">污水处理厂</p>
        </li>
        <li>
          <p className="name">企业性质</p>
          <p className="value">全民所有制</p>
        </li>
        <li>
          <p className="name">企业人数</p>
          <p className="value">230人</p>
        </li>
        <li>
          <p className="name">企业法人</p>
          <p className="value">张丽思</p>
        </li>
        <li>
          <p className="name">企业地址</p>
          <p className="value">朔州平鲁区井坪镇北坪工业区</p>
        </li>
        <li>
          <p className="name">联系电话</p>
          <p className="value">0349-981023</p>
        </li>
      </ul>
      <div className="sub">
        <div className="sub-header">
          <div className="sub-title">实时监控信息</div>
        </div>
        <div className="sub-body">
          <ul className="single-list">
            {options.map((item) => (
              <li className="single-item" key={item.value}>
                <div className="title">
                  {item.name}({item.data ? item.data.length : 0}个)
                </div>
                <dl>
                  {item.data.map((subItem: any, subIndex: number) => (
                    <dd key={subIndex}>
                      <span className="name">{subItem.name}</span>
                      <span className="icon"></span>
                    </dd>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
          <div className="video"></div>
        </div>
      </div>
    </Dialog>
  );
};

export default CustomDialog;
