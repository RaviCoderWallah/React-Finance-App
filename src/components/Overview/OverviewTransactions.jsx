import ContentCardHeader from '../UI/ContentCardHeader'
import UserExpenseRowCard from '../UI/UserExpenseRowCard';

const OverviewTransactions = ({ data }) => {

  const transactions = data?.transactions?.slice(0, 5);

  return (
    <div>
      <ContentCardHeader name="Transactions" navigatePage="/transactions" buttonName="View All" />

      <div className='flex flex-col gap-4 mt-4'>
        {
          transactions.map((items, index) => {
            return <UserExpenseRowCard key={index} data={items} />
          })
        }

      </div>

    </div>
  )
}

export default OverviewTransactions