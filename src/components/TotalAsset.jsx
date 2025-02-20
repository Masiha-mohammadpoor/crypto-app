"use client";
import CircleIcon from "@mui/icons-material/Circle";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { useState } from "react";

const TotalAsset = () => {
  const [showTotal, setShowTotal] = useState(false);

  return (
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
  );
};

export default TotalAsset;
