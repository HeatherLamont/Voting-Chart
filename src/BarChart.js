import React from "react";
import { Chart } from "react-google-charts";



 const options = {
  chart: {
    title: "Best Tutor",
    subtitle: "Who do we like the most?",
  },
};

 function BarChart({data}) {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default BarChart;
