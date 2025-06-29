import { useOutletContext } from "react-router-dom";
import ContentHeader from "../components/UI/ContentHeader";
import OverviewSummaryCard from "../components/UI/OverviewSummaryCard";
import OverviewPots from "../components/Overview/OverviewPots";
import OverviewTransactions from "../components/Overview/OverviewTransactions";
import PieChart from "../components/UI/PieChart";
import ContentCardHeader from "../components/UI/ContentCardHeader";
import RecurringBillsCard from "../components/UI/RecurringBillsCard";

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
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-6 pt-8 pb-6">
        <div className="col-span-2 sm:col-span-1">
          <OverviewSummaryCard amount={dataBalance.current} name="Current Balance" bgColor="var(--color-grey-900)" />
        </div>
        <OverviewSummaryCard amount={dataBalance.income} name="Income" />
        <OverviewSummaryCard amount={dataBalance.expenses} name="Expenses" />
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 grid gap-8">
          <div className=" bg-white py-6 px-4 md:rounded-2xl sm:rounded-xl rounded-sm"><OverviewPots /></div>
          <div className="bg-white py-6 px-4 md:rounded-2xl sm:rounded-xl rounded-sm"><OverviewTransactions data={data} /></div>
        </div>
        <div className="lg:col-span-2 md:grid lg:grid-rows-5 gap-8">
          <div className=" lg:row-span-3 bg-white py-6 px-4 md:rounded-2xl sm:rounded-xl rounded-sm md:h-full">
            <ContentCardHeader name="Budgets" navigatePage="/budgets" buttonName="View All" />
            <div className="mt-4">
              {/* <PieChart /> */}
            </div>
          </div>
          <div className=" lg:row-span-3 bg-white py-6 px-4 md:rounded-2xl sm:rounded-xl rounded-sm">
            <ContentCardHeader name="Recurring Bills" navigatePage="/recurring" buttonName="See Details" />
            <div className="flex flex-col gap-8 mt-4">
              <RecurringBillsCard name="Paid Bills" amount="190" />
              <RecurringBillsCard name="Paid Bills" amount="190" />
              <RecurringBillsCard name="Paid Bills" amount="190" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview