import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Assets = () => {
  return (
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
  );
};

export default Assets;
