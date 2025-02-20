import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Operation = () => {
  return (
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
  );
};

export default Operation;
