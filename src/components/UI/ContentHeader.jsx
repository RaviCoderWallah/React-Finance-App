const ContentHeader = ({ headingName, isButton }) => {
    return (
        <div className="flex items-center justify-between" id="content-header">
            <h1 className="text-4xl font-semibold">{headingName}</h1>
            {
                !isButton && (
                    <button className="px-4 py-2 bg-[var(--color-grey-900)] text-[16px] rounded-xl text-white cursor-pointer">
                        +Add New Budgets
                    </button>
                )
            }

        </div>
    )
}

export default ContentHeader