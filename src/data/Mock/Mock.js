import React from "react";
import {StyledImg} from './style';
import lineSpeed from "../../assets/Icons/lineSpeed.svg";
import date from "../../assets/Icons/date.svg";
import specifiedSpeed from "../../assets/Icons/specifiedSpeed.svg";
import time from "../../assets/Icons/time.svg";
import speed from "../../assets/Icons/speed.svg";
import direction from "../../assets/Icons/direction.svg";
import leak from "../../assets/Icons/leak.svg";
import vehicleType from "../../assets/Icons/vehicleType.svg";


const MockData = {
  data: [
    { icon: <StyledImg src={vehicleType} alt="vehicle type" />, category: "نوع المركبه", value: "سياره" },
    { icon: <StyledImg src={leak} alt="leak icon" />, category: "المسرب", value: "2" },
    { icon: <img src={direction} alt="direction icon" />, category: "الاتجاه", value:"اليمين" },
    { icon: <StyledImg src={speed} alt="speed icon" />, category: "السرعه", value: "150" },
    { icon: <StyledImg src={time} alt="time icon" />, category: "الوقت", value: "5:23" },
    { icon: <StyledImg src={specifiedSpeed} alt="specified speed" />, category: "السرعه المحدده", value: 150 },
    { icon: <StyledImg src={date} alt="date icon" />, category: "التاريخ", value: "10/05/2023" },
    { icon: <StyledImg src={lineSpeed} alt="lineSpeed icon" />, category: "سرعه الشارع", value: "120" }
  ],
};

export default MockData;

