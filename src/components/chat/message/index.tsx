import { FC, useState } from "react";
import "./index.scss";

interface IChatMessageProps {}

const ChatMessage: FC<IChatMessageProps> = () => {
  const [list, setList] = useState([
    {
      // 头像
      photo: "",
      // 消息
      message: {
        // 消息类型，message：消息，voice语音
        type: "message",
        // 消息内容
        content: "我在现场",
      },
      // 是否是发消息本人
      originator: false,
    },
    {
      photo: "",
      message: {
        type: "voice",
        content: 120,
      },
      originator: false,
    },
    {
      photo: "",
      message: {
        type: "message",
        content: "已安排相关人员前往支援",
      },
      originator: true,
    },
    {
      photo: "",
      message: {
        type: "message",
        content:
          "已安排相关人员前往支援已安排相关人员前往支援已安排相关人员前往支援已安排相关人员前往支援已安排相关人员前往支援",
      },
      originator: true,
    },
    {
      photo: "",
      message: {
        type: "message",
        content:
          "已安排相关人员前往支援已安排相关人员前往支援已安排相关人员前往支援已安排相关人员前往支援已安排相关人员前往支援",
      },
      originator: true,
    },
    {
      photo: "",
      message: {
        type: "message",
        content:
          "已安排相关人员前往支援已安排相关人员前往支援已安排相关人员前往支援已安排相关人员前往支援已安排相关人员前往支援",
      },
      originator: true,
    },
    {
      photo: "",
      message: {
        type: "message",
        content:
          "已安排相关人员前往支援已安排相关人员前往支援已安排相关人员前往支援已安排相关人员前往支援已安排相关人员前往支援",
      },
      originator: true,
    },
  ]);
  return (
    <>
      <div className="app-message">
        <ul className="app-message__list">
          {list.map((item, index: number) => (
            <li
              className={`app-message__item ${
                item.originator ? "is-reverse" : ""
              }`}
              key={index}
            >
              <div className="photo"></div>
              <div className="message">
                <p>{item.message.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="app-message__footer">
        <div className="buttons">
          <button>
            <span className="video"></span>视频
          </button>
          <button>
            <span className="audio"></span>语音
          </button>
          <button>
            <span className="message"></span>消息
          </button>
          <button>
            <span className="file"></span>文件
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
