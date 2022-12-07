import { FC, useEffect, useState } from "react";

interface IDigitalScrollItemProps {
  value: number;
}

const DigitalScrollItem: FC<IDigitalScrollItemProps> = ({ value }) => {
  const [itemStyle, setItemStyle] = useState<any>({});
  useEffect(() => {
    let timmer = setTimeout(() => {
      setItemStyle({
        transform: `translateY(-${value * 40}px)`,
      });
    }, 0);
    return () => {
      clearTimeout(timmer);
    };
  }, [value]);
  return (
    <div className="app-element__digitalscroll--item">
      <div style={itemStyle}>
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </div>
    </div>
  );
};

export default DigitalScrollItem;
