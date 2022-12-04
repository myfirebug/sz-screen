import { FC } from "react";
import { Button } from "antd";
import "./index.scss";
const say = require("../../../assets/images/say.png");
const sayDisabled = require("../../../assets/images/say-disabled.png");
const saying = require("../../../assets/images/saying.png");

interface IChatVideoProps {}

const ChatVideo: FC<IChatVideoProps> = () => {
  return (
    <>
      <div className="app-video">
        <div className="app-video__special">
          <div className="info">
            <span className="icon"></span>
            <img className="say" src={say} alt="可以说" />
            <img className="say" src={sayDisabled} alt="禁止说" />
            <img className="say" src={saying} alt="正在说" />
            <span className="name">展庆馨</span>
          </div>
        </div>
        <ul className="app-video__list">
          <li className="app-video__item">
            <div className="info">
              <span className="icon"></span>
              <img className="say" src={say} alt="可以说" />
              <span className="name">展庆馨</span>
            </div>
          </li>
          <li className="app-video__item">
            <div className="info">
              <span className="icon"></span>
              <img className="say" src={say} alt="可以说" />
              <span className="name">展庆馨</span>
            </div>
          </li>
          <li className="app-video__item">
            <div className="info">
              <span className="icon"></span>
              <img className="say" src={say} alt="可以说" />
              <span className="name">展庆馨</span>
            </div>
          </li>
          <li className="app-video__item">
            <div className="info">
              <span className="icon"></span>
              <img className="say" src={say} alt="可以说" />
              <span className="name">展庆馨</span>
            </div>
          </li>
          <li className="app-video__item">
            <div className="info">
              <span className="icon"></span>
              <img className="say" src={say} alt="可以说" />
              <span className="name">展庆馨</span>
            </div>
          </li>
          <li className="app-video__item">
            <div className="info">
              <span className="icon"></span>
              <img className="say" src={say} alt="可以说" />
              <span className="name">展庆馨</span>
            </div>
          </li>
          <li className="app-video__item">
            <div className="info">
              <span className="icon"></span>
              <img className="say" src={say} alt="可以说" />
              <span className="name">展庆馨</span>
            </div>
          </li>
          <li className="app-video__item">
            <div className="info">
              <span className="icon"></span>
              <img className="say" src={say} alt="可以说" />
              <span className="name">展庆馨</span>
            </div>
          </li>
          <li className="app-video__item">
            <div className="info">
              <span className="icon"></span>
              <img className="say" src={say} alt="可以说" />
              <span className="name">展庆馨</span>
            </div>
          </li>
          <li className="app-video__item">
            <div className="info">
              <span className="icon"></span>
              <img className="say" src={say} alt="可以说" />
              <span className="name">展庆馨</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="app-video__footer">
        <Button type="primary" danger style={{ float: "right" }}>
          结束视频
        </Button>
        <button className="btn-video"></button>
        <button className="btn-voice"></button>
      </div>
    </>
  );
};

export default ChatVideo;
