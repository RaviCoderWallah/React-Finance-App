const OverviewSummaryCard = ({ amount, name, bgColor }) => {

    const formatAmount = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);


    return (
        <div className={bgColor ? `bg-[${bgColor}] text-white md:rounded-2xl rounded-sm md:p-8 p-2` : "bg-white md:rounded-2xl rounded-sm md:p-8 p-2"}>
            <p className={bgColor ? "text-white" : "text-slate-700"}>{name}</p>
            <h2 className={bgColor ? "text-white md:text-3xl text-xl font-bold pt-2" : "text-black md:text-3xl text-xl font-bold pt-2"}>
                ${formatAmount}
            </h2>
        </div>
    )
}

export default OverviewSummaryCard