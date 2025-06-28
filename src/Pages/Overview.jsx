import { useOutletContext } from "react-router-dom";
import ContentHeader from "../components/UI/ContentHeader";
import OverviewSummaryCard from "../components/UI/OverviewSummaryCard";
import OverviewPots from "../components/Overview/OverviewPots";

const Overview = () => {
  const data = useOutletContext();
  const dataBalance = data?.balance;

  // Show loading or nothing until data is ready
  if (!dataBalance) {
    return <div>Loading...</div>; // or return null;
  }

  return (
    <div id="overview-page">
      <ContentHeader headingName="Overview" isButton="false" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 pt-8 pb-6">
        <OverviewSummaryCard amount={dataBalance.current} name="Current Balance" bgColor="var(--color-grey-900)" />
        <OverviewSummaryCard amount={dataBalance.income} name="Income" />
        <OverviewSummaryCard amount={dataBalance.expenses} name="Expenses" />
      </div>

      <div className="grid md:grid-cols-5">
        <div className="bg-white md:col-span-3 py-6 px-4 rounded-2xl">
          <OverviewPots />
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Overview