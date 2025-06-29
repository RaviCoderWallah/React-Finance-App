const UserExpenseRowCard = ({ data }) => {
    const isNegative = data.amount < 0;

    // Format absolute amount
    const formattedAmount = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(data.amount);


    const date = new Date(data.date);
    const monthName = date.toLocaleString('en-US', { month: 'short' });

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div className="rounded-full w-8 aspect-square overflow-hidden">
                    <img src={data.avatar} alt={data.name} />
                </div>
                <p className="font-medium text-[15px] sm:text-[16px]">{data.name}</p>
            </div>
            <div className="text-right">
                <p className={isNegative ? 'text-slate-950 font-semibold text-[15px]' : 'text-teal-600 text-[15px]'}>
                    {isNegative ? `- $${formattedAmount}` : `+$${formattedAmount}`}
                </p>
                <p  className="text-[12px] font-semibold text-slate-600">{monthName} {date.getDate()}, {date.getFullYear()} </p>
            </div>
        </div>
    );
};

export default UserExpenseRowCard;
