// Author: Pham-Minh-Khai Hoang (khai.hoang@yacoub.de)
import React from "react";
import TimeSeriesChart from "../charts/TimeSeriesChart";
import ChartContainer from "./ChartContainer";

const CPUUsageTimeSeriesChart = ({ cpuUsage = [] }) => {
  const initialData = [
    { time: -55, value: null },
    { time: -50, value: null },
    { time: -45, value: null },
    { time: -40, value: null },
    { time: -35, value: null },
    { time: -30, value: null },
    { time: -25, value: null },
    { time: -20, value: null },
    { time: -15, value: null },
    { time: -10, value: null },
    { time: -5, value: null },
    { time: 0, value: null },
  ];

  const data = initialData.map((item, index) => {
    const cpuValue = cpuUsage[index] || {};
    return { ...item, value: cpuValue };
  });

  const formatXAxis = (tickItem) => {
    return `${tickItem}`;
  };

  const formatYAxis = (tickItem) => {
    return `${tickItem}%`;
  };

  const xLabel = {
    value: "Time (s)",
    position: "insideBottomRight",
    offset: -18,
  };

  const yLabel = {
    value: "Percentage",
    angle: -90,
    position: "insideLeft",
  };

  const yDomain = [0, 100];

  // Custom formatter for the tooltip label
  const labelFormatter = () => ``;

  // Custom formatter for the tooltip value
  const valueFormatter = (value) => `${value}%`;

  return (
    <ChartContainer chartName="CPU Usage">
      <TimeSeriesChart
        data={data}
        formatXAxis={formatXAxis}
        formatYAxis={formatYAxis}
        xLabel={xLabel}
        yLabel={yLabel}
        yDomain={yDomain}
        legendDescription="CPU Usage"
        labelFormatter={labelFormatter}
        valueFormatter={valueFormatter}
      />
    </ChartContainer>
  );
};

export default CPUUsageTimeSeriesChart;
