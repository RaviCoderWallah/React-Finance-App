const RecurringBillsCard = ({ name, amount }) => {
    // Format absolute amount
    const formattedAmount = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);

    return (
        <div className="flex justify-between items-center bg-[var(--color-beige-100)] p-4 sm:rounded-md rounded-sm">
            <p className="text-[15px] text-slate-700">{name}</p>
            <p className="font-bold">${formattedAmount}</p>
        </div>
    )
}

export default RecurringBillsCard