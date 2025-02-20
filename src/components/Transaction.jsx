import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";

const Transaction = () => {
  return (
    <div className="bg-white rounded-md w-full px-4 py-3">
      <div className="col-span-6 flex justify-between items-center">
        <p className="font-semibold">Transaction</p>
        <p className="text-bgColor-400">See All</p>
      </div>
      <div className="mt-4">
        {/*  */}
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 rounded-full bg-red-600 bg-opacity-65 flex justify-center items-center">
              <CallReceivedIcon className="text-red-800" />
            </div>
            <p className="font-bold">Bitcoin</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">10:34AM</p>
            <p className="text-sm text-bgColor-500">2 Nov 2023</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">+.431 BTC</p>
            <p className="text-sm text-bgColor-500">$ 3,489.90</p>
          </div>
          <div>
            <p className="font-semibold">completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
