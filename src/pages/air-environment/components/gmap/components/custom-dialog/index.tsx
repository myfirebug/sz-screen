import { FC } from "react";
import "./index.scss";
// 弹窗
import Dialog from "@src/components/dialog";
// echarts
import Echarts from "@src/components/echarts";
interface ICustomDialogProps {
  title: string;
  hideHander: () => void;
}

const CustomDialog: FC<ICustomDialogProps> = ({ title, hideHander }) => {
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
      <div className="row">
        <div className="col" style={{ flex: 5 }}>
          <ul className="info">
            <li>
              <p className="name">指数类别</p>
              <p className="value">优</p>
            </li>
            <li>
              <p className="name">指数级别</p>
              <p className="value">III类</p>
            </li>
            <li>
              <p className="name">首要污染物</p>
              <p className="value">-</p>
            </li>
            <li>
              <p className="name">监测位置</p>
              <p className="value">朔州市朔城区区政府</p>
            </li>
          </ul>
          <dl>
            <dt>对健康的影响</dt>
            <dd>空气质量令人满意，基本无空气污染</dd>
          </dl>
          <dl>
            <dt>建议采取的措施</dt>
            <dd>各类人群可正常活动</dd>
          </dl>
        </div>
        <div className="col" style={{ flex: 4 }}>
          <div className="echarts"></div>
          <ul className="list">
            <li className="item">
              <div className="value">9</div>
              <div className="progress">
                <div className="bar" style={{ width: "10%" }}></div>
              </div>
              <div className="name">PM2.5</div>
            </li>
            <li className="item">
              <div className="value">9</div>
              <div className="progress">
                <div className="bar" style={{ width: "10%" }}></div>
              </div>
              <div className="name">PM2.5</div>
            </li>
            <li className="item">
              <div className="value">9</div>
              <div className="progress">
                <div className="bar" style={{ width: "10%" }}></div>
              </div>
              <div className="name">PM2.5</div>
            </li>
            <li className="item">
              <div className="value">9</div>
              <div className="progress">
                <div className="bar" style={{ width: "10%" }}></div>
              </div>
              <div className="name">PM2.5</div>
            </li>
            <li className="item">
              <div className="value">9</div>
              <div className="progress">
                <div className="bar" style={{ width: "10%" }}></div>
              </div>
              <div className="name">PM2.5</div>
            </li>
            <li className="item">
              <div className="value">9</div>
              <div className="progress">
                <div className="bar" style={{ width: "10%" }}></div>
              </div>
              <div className="name">PM2.5</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sub-header">
        <div className="sub-title">空气质量趋势分析(近24小时)</div>
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
    </Dialog>
  );
};

export default CustomDialog;
