import Operation from "@/components/Operation";
import Assets from "@/components/Assets";
import Transaction from "@/components/Transaction";
import MarketOverview from "@/components/MarketOverview";
import TotalAsset from "@/components/TotalAsset";

const dashboard = () => {
  return (
    <section className="w-full h-screen grid grid-cols-12 gap-4">
      <article className="col-span-8 flex flex-col gap-y-3">
        <TotalAsset />
        <MarketOverview />
        <Transaction />
      </article>
      <article className="col-span-4 flex flex-col gap-4">
        <Assets />
        <Operation />
      </article>
    </section>
  );
};

export default dashboard;
