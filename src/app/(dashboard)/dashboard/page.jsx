"use client";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CircleIcon from "@mui/icons-material/Circle";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const dashboard = () => {
  const [showTotal, setShowTotal] = useState(false);

  return (
    <section className="w-full h-screen grid grid-cols-12 gap-4">
      <article className="col-span-8 flex flex-col gap-y-3">
        {/* 1 */}
        <div>
          <p className="text-sm text-gray-400">Total asset value</p>
          <h2 className="text-2xl font-bold flex items-center gap-x-3">
            <span className="w-40">
              {showTotal ? (
                <div>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((c) => (
                    <CircleIcon className="text-base" key={c} />
                  ))}
                </div>
              ) : (
                "$ 385,654.23"
              )}
            </span>
            <button
              className="text-gray-400"
              onClick={() => setShowTotal(!showTotal)}
            >
              <RemoveRedEyeIcon />
            </button>
          </h2>
          <p className="text-gray-400">~ 13.458 BTC</p>
        </div>
        {/* 2 */}
        <div className="bg-white rounded-md w-full px-4 py-3">
          {/* head */}
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
                  data: [
                    11, 32, 45, 32, 34, 52, 41, 15, 32, 45, 32, 34, 52, 41,
                  ],
                },
              ]}
              type="area"
              height={250}
            />
            <p className="text-bgColor-400 pl-3 -mt-3">USD</p>
          </div>
        </div>
      </article>
      <article className="col-span-4 flex flex-col gap-4">
        <div className="w-full grid grid-cols-6 gap-3">
          <div className="col-span-6 flex justify-between items-center">
            <p className="font-semibold">Assets</p>
            <p className="text-bgColor-400">See All</p>
          </div>
          <div className="col-span-3 rounded-md bg-white p-3 flex flex-col gap-y-3 items-start">
            <div className="flex items-center gap-x-2">
              <div className="w-7 h-7 rounded-full bg-red-500"></div>
              <p>BTC</p>
            </div>
            <p className="font-semibold">$ 24,300.40</p>
            <p className="text-red-500 text-sm font-semibold">
              <ArrowDropDownIcon />
              1.2%
            </p>
          </div>
          <div className="col-span-3 rounded-md bg-white p-3 flex flex-col gap-y-3 items-start">
            <div className="flex items-center gap-x-2">
              <div className="w-7 h-7 rounded-full bg-red-500"></div>
              <p>BTC</p>
            </div>
            <p className="font-semibold">$ 24,300.40</p>
            <p className="text-red-500 text-sm font-semibold">
              <ArrowDropDownIcon />
              1.2%
            </p>
          </div>
          <div className="col-span-3 rounded-md bg-white p-3 flex flex-col gap-y-3 items-start">
            <div className="flex items-center gap-x-2">
              <div className="w-7 h-7 rounded-full bg-red-500"></div>
              <p>BTC</p>
            </div>
            <p className="font-semibold">$ 24,300.40</p>
            <p className="text-red-500 text-sm font-semibold">
              <ArrowDropDownIcon />
              1.2%
            </p>
          </div>
          <div className="col-span-3 rounded-md bg-white p-3 flex flex-col gap-y-3 items-start">
            <div className="flex items-center gap-x-2">
              <div className="w-7 h-7 rounded-full bg-red-500"></div>
              <p>BTC</p>
            </div>
            <p className="font-semibold">$ 24,300.40</p>
            <p className="text-red-500 text-sm font-semibold">
              <ArrowDropDownIcon />
              1.2%
            </p>
          </div>
        </div>
        <div className="rounded-md bg-white p-3 flex flex-col gap-y-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Operation</p>
            <div className="w-52 rounded-md bg-bgColor-200 flex justify-between items-center gap-x-2 p-1">
              <button className="w-1/3 text-sm font-semibold rounded-md bg-white">
                Buy
              </button>
              <button className="w-1/3 text-sm font-semibold rounded-md">
                Sell
              </button>
              <button className="w-1/3 text-sm font-semibold rounded-md">
                Exchange
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-1">
              <label className="text-sm text-bgColor-500">you pay</label>
              <div className="w-full p-1 bg-bgColor-200 rounded-md flex justify-between items-center">
                <button className="flex justify-between items-center gap-x-1 bg-white rounded-md px-1">
                  <span className="inline-block w-4 h-4 rounded-full bg-red-500"></span>
                  <span>UST</span>
                  <ArrowDropDownIcon className="p-0" />
                </button>
                <input
                  type="text"
                  dir="rtl"
                  className="bg-transparent border-none outline-none w-44 text-sm font-semibold p-1"
                />
                <span className="flex items-center h-4 rounded-full bg-primary-600 text-white text-xs px-2">
                  Max
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-sm text-bgColor-500">you pay</label>
              <div className="w-full p-1 bg-bgColor-200 rounded-md flex justify-between items-center">
                <button className="flex justify-between items-center gap-x-1 bg-white rounded-md px-1">
                  <span className="inline-block w-4 h-4 rounded-full bg-red-500"></span>
                  <span>UST</span>
                  <ArrowDropDownIcon className="p-0" />
                </button>
                <input
                  type="text"
                  dir="rtl"
                  className="bg-transparent border-none outline-none w-44 text-sm font-semibold p-1"
                />
                <span className="flex items-center h-4 rounded-full bg-primary-600 text-white text-xs px-2">
                  Max
                </span>
              </div>
            </div>
            <p className="text-sm text-bgColor-400">1 BTC = $2,345</p>
            <button className="rounded-md bg-primary-500 text-white p-3 w-full">
              Buy Bitcoin
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default dashboard;
