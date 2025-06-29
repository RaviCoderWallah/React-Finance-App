import ContentHeader from "../components/UI/ContentHeader"
import SearchBar from "../components/UI/SearchBar"
import Filter from "../components/UI/Filter"
import AllTransactionList from "../components/UI/AllTransactionList";
import { useOutletContext } from "react-router-dom";

const Transactions = () => {

  const data = useOutletContext();

    if (!data?.transactions) {
    return <div>Loading...</div>; // or return null;
  }


  const sortingFilterName = ["Oldest", "Latest", "A to Z", "Z to A", "Highest", "Lowest"];
  const categoryFilterName = ["All Transactions", "Entertainment", "Bills", "Groceries", "Dinning Out", "Transportation"]

  return (
    <div id="transactions-page">
      <ContentHeader headingName="Transactions" isButton="false" />
      <div className="md:rounded-2xl sm:rounded-xl rounded-sm bg-white py-6 px-4 mt-4 md:mt-8">

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-0 items-center justify-between">
          <div className="sm:col-span-2 col-span-1">
            <SearchBar />
          </div>
          <div className="sm:col-span-3 col-span-1 flex justify-start sm:justify-end sm:gap-8 gap-4">
            <Filter name={sortingFilterName} filterName="Sort By" selectedOption="latest" />
            <Filter name={categoryFilterName} filterName="Category By" selectedOption="transactions" />
          </div>
        </div>

        <div className="grid grid-cols-4 justify-between items-center mt-4 sm:mt-8 border-b-[1px] border-slate-300 pb-2">
          <p className="sm:flex justify-start text-[15px] text-slate-700 hidden">Recipient/Sender</p>
          <p className="sm:flex justify-center text-[15px] text-slate-700 hidden">Category</p>
          <p className="sm:flex justify-center text-[15px] text-slate-700 hidden">Transaction Date</p>
          <p className="sm:flex justify-end text-[15px] text-slate-700 hidden">Amount</p>
        </div>
        <div>
          {
            data.transactions.map(({name, amount, date, avatar, category}, index) => {
             return <AllTransactionList name={name} amount={amount} date={date} avatar={avatar} category={category} key={index}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Transactions