"use client";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MarketOverview = () => {
  return (
    <div className="bg-white rounded-md w-full px-4 py-3">
      <div className="flex justify-between items-end">
        <div>
          <p className="font-semibold mb-2">Market Overview</p>
          <div className="w-52 rounded-md bg-bgColor-200 flex justify-between items-center gap-x-2 p-1">
            <button className="w-1/2 rounded-md bg-white">
              <CallReceivedIcon /> Price
            </button>
            <button className="w-1/2 rounded-md">
              <CandlestickChartIcon /> Candle
            </button>
          </div>
        </div>
        <div>
          <div className="w-52 rounded-md bg-bgColor-200 flex justify-between items-center gap-x-2 p-1">
            <button className="w-1/6 rounded-md bg-white">1D</button>
            <button className="w-1/6 rounded-md">7D</button>
            <button className="w-1/6 rounded-md">1M</button>
            <button className="w-1/6 rounded-md">3M</button>
            <button className="w-1/6 rounded-md">All</button>
            <button className="w-1/6 rounded-md">
              <CalendarMonthIcon />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Chart
          options={{
            labels: {},
            chart: {
              type: "area",
              toolbar: {
                show: false,
              },
            },
            colors: ["#7f38f2"],

            grid: {
              show: false,
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "straight",
            },
            xaxis: {
              type: "category",
              categories: [
                "0:00",
                "1:30",
                "2:30",
                "3:30",
                "4:30",
                "5:30",
                "6:30",
                "0:00",
                "1:30",
                "2:30",
                "3:30",
                "4:30",
                "5:30",
                "6:30",
              ],
            },
            tooltip: {
              enabled: true,
              x: {
                show: false,
              },
              marker: {
                show: false,
              },
              intersect: false,
            },
            crosshairs: {
              show: false,
            },

            fill: {
              type: "gradient",
              gradient: {
                shade: "dark",
                type: "vertical",
                shadeIntensity: 0.2,
                gradientToColors: ["#7f38f2"],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 0.4,
                stops: [0, 100],
              },
            },
          }}
          series={[
            {
              data: [11, 32, 45, 32, 34, 52, 41, 15, 32, 45, 32, 34, 52, 41],
            },
          ]}
          type="area"
          height={250}
        />
        <p className="text-bgColor-400 pl-3 -mt-3">USD</p>
      </div>
    </div>
  );
};

export default MarketOverview;
