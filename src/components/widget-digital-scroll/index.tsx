import { FC, HTMLAttributes, useEffect, useState } from "react";
import { IAnyObject } from "@src/types";
import DigitalScrollItem from "./components/item";
import "./index.scss";

interface IDigitalScrollProps {
  value: string;
}

const DigitalScroll: FC<IDigitalScrollProps> = ({ value }) => {
  const [arr, setArr] = useState<any[]>([0]);
  useEffect(() => {
    if (value) {
      setArr(value.split(""));
    }
  }, [value]);
  return (
    <div className="app-element app-element__digitalscroll">
      {arr.map((item, idx) => (
        <DigitalScrollItem key={idx} value={item}></DigitalScrollItem>
      ))}
    </div>
  );
};
export default DigitalScroll;
