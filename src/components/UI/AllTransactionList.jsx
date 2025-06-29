const AllTransactionList = ({ name, amount, avatar, date, category }) => {

    const isNegative = amount < 0;

    // Format absolute amount
    const formattedAmount = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);

    const expenseDate = new Date(date);
    const monthName = expenseDate.toLocaleString('en-US', { month: 'short' });

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 justify-between items-center mt-4 border-b-[1px] border-slate-300 pb-2">
            <div className="flex items-center justify-start gap-4">
                <div className="rounded-full w-8 aspect-square overflow-hidden">
                    <img src={avatar} alt={name} />
                </div>
                <div>
                    <p className="font-medium text-[15px] sm:text-[16px]">Emma Richardson</p>
                    <p className="text-[15px] text-slate-600 sm:hidden ">{category}</p>
                </div>
            </div>

            <p className="justify-center text-[15px] text-slate-700 hidden sm:flex">{category}</p>

            <p className="justify-center text-[15px] text-slate-700 sm:flex hidden">
                {monthName} {expenseDate.getDate()}, {expenseDate.getFullYear()}
            </p>

            <div>
                <p className={isNegative ? 'justify-end text-[15px] text-slate-950 font-bold flex' : 'flex justify-end  text-teal-600 text-[15px] font-bold'}>
                    {isNegative ? `- $${formattedAmount}` : `+$${formattedAmount}`}
                </p>

                <p className=" justify-end flex text-[15px] text-slate-600 sm:hidden">
                    {monthName} {expenseDate.getDate()}, {expenseDate.getFullYear()}
                </p>
            </div>


        </div>
    )
}

export default AllTransactionList