import React from "react";

const OverviewPotsCard = ({ data }) => {
    console.log(data.theme);

    return (
        <div className="relative mr-5">
            <div
                className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:rounded-xl before:h-full"
                style={{
                    "--tw-before-bg": data?.theme,
                }}
            >
                <style>
                    {`
                        div::before {
                            background-color: var(--tw-before-bg);
                        }
                    `}
                </style>
                <p className="text-[12px] text-slate-600 font-semibold">{data?.name}</p>
                <p className="font-semibold">${data?.total}</p>
            </div>
        </div>
    );
};

export default OverviewPotsCard;
