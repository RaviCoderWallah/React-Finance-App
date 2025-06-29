import { useState } from "react";

const Filter = ({name, filterName, selectedOption}) => {
  const [selected, setSelected] = useState(selectedOption);

    return (
        <div className="flex items-center gap-2">
            <p className="sm:block hidden">{filterName}</p>
            <select
                name=""
                id=""
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="outline-1 outline-slate-700 py-2 sm:min-w-30 px-4 sm:rounded-md cursor-pointer appearance-none focus:outline-none"
            >
                {
                    name.map((filterName, index) => {
                        return (
                            <option
                                value={filterName.toLowerCase()}
                                key={index}
                                className="px-4 bg-white hover:bg-amber-900"
                            >
                                {filterName}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Filter