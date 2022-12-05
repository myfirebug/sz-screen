import { FC } from "react";
import "./index.scss";
// 弹窗
import Dialog from "@src/components/dialog";
// echarts
import Echarts from "@src/components/echarts";
// 滚动列表
import ScrollList from "@src/components/scroll-list";
// button
import Button from "@src/components/button";
interface ICustomDialogProps {
  title: string;
  hideHander: () => void;
}

const CustomDialog: FC<ICustomDialogProps> = ({ title, hideHander }) => {
  return (
    <Dialog
      className="app-dialog__water"
      title={title}
      hideHander={hideHander}
      style={{
        width: 998,
        height: 695,
      }}
    >
      <div className="info">
        <div className="picture"></div>
        <ul>
          <li>
            <p className="name">水质类别</p>
            <p className="value">III类</p>
          </li>
          <li>
            <p className="name">执行标准</p>
            <p className="value">III类</p>
          </li>
          <li>
            <p className="name">本月站点水质</p>
            <p className="value">III类</p>
          </li>
          <li>
            <p className="name">断面位置</p>
            <p className="value">朔州市朔城区区政府</p>
          </li>
          <li>
            <p className="name">主要污染物</p>
            <p className="value">高锰酸钾</p>
          </li>
          <li>
            <p className="name">水质累计值</p>
            <p className="value">93%</p>
          </li>
        </ul>
      </div>
      <div className="sub-header">
        <div className="sub-title">监测状况数据</div>
        <div className="operation">
          <Button>本年</Button>
          <Button>本月</Button>
          <Button type="primary">本日</Button>
        </div>
      </div>
      <Echarts
        style={{
          width: "100%",
          height: "200px",
          marginTop: 10,
        }}
        options={{
          color: ["#04FFD0"],
          grid: {
            top: 10,
            right: 0,
            left: 50,
            bottom: 30,
          },
          legend: {
            show: false,
          },
          xAxis: [
            {
              type: "category",
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              axisLabel: {
                color: "#fff",
              },
              axisPointer: {
                type: "shadow",
              },
            },
          ],
          yAxis: {
            type: "value",
            min: 0,
            max: 40,
            interval: 10,
            axisLabel: {
              color: "#fff",
              formatter: "{value}",
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: "rgba(255,255,255,0.24)",
              },
            },
          },
          series: [
            {
              name: "Temperature",
              type: "line",
              lineStyle: {
                width: 2,
              },
              data: [2.0, 20.2, 3.3, 4.5, 6.3, 10.2, 10.2],
            },
          ],
        }}
      />
      <div className="table-head">
        <span>时间</span>
        <span>水质类别</span>
        <span>主要污染物</span>
        <span>水质目标值</span>
        <span>XXXXXX</span>
      </div>
      <ScrollList
        rows={3}
        rolling={true}
        lineHeight={42}
        data={[
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
        ]}
        render={(data) => {
          return (
            <>
              {data.map((item: any) => (
                <div
                  className={`tr ${item._customId % 2 === 1 ? "odd" : ""}`}
                  key={item._customId}
                >
                  <span className="td">{item.a}</span>
                  <span className="td">{item.b}</span>
                  <span className="td">{item.c}</span>
                  <span className="td">{item.d}</span>
                  <span className="td">{item.e}</span>
                </div>
              ))}
            </>
          );
        }}
      />
    </Dialog>
  );
};

export default CustomDialog;
