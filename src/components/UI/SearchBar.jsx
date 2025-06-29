const SearchBar = () => {
    return (
        <div className="outline-1 border-slate-700 px-4 md:rounded-md rounded-sm flex justify-between items-center">
            <input type="text" placeholder="Search transactions" className="w-full h-full py-2 focus:outline-none" />
            <img src="/public/images/icon-search.svg" alt="search-icon" />
        </div>
    )
}

export default SearchBar