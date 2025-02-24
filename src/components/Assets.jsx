"use client";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Assets = () => {
  const [assets, setAssets] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1"
        );
        setAssets(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);
  return (
    <div className="w-full grid grid-cols-6 gap-3">
      <div className="col-span-6 flex justify-between items-center">
        <p className="font-semibold">Assets</p>
        <p className="text-bgColor-400">See All</p>
      </div>
      {assets &&
        assets.map((a) => {
          return (
            <div
              key={a.id}
              className="col-span-3 rounded-md bg-white p-3 flex flex-col gap-y-3 items-start"
            >
              <div className="flex items-center gap-x-2">
                <div className="w-7 h-7 rounded-full overflow-hidden">
                  <Image src={a.image} alt={a.symbol} width={28} height={28} />
                </div>
                <p>{a.symbol.toUpperCase()}</p>
              </div>
              <p className="font-semibold">$ {a.current_price}</p>
              <p
                className={`${
                  a.price_change_percentage_24h < 0
                    ? "text-red-500"
                    : "text-green-500"
                } text-sm font-semibold`}
              >
                <ArrowDropDownIcon />
                {a.price_change_percentage_24h}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Assets;
