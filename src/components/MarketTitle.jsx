import { useState } from "react";
import SearchBar from "./Searchbar/SearchBar";

const MarketTitle = () => {
    // const { data: dataSupportedCurrencies } = useSupportedCurrencies();
    const [searchSuggestions, setSearchSuggestions] = useState([]);

    // useEffect(() => {
    //     console.log('dataSupportedCurrencies ', dataSupportedCurrencies);
    // }, [dataSupportedCurrencies])

    return(
        <div className="flex flex-row justify-between">
            <div className="sm:text-2xl text-s font-bold">Harga Crypto dalam Rupiah Hari Ini</div>
            <SearchBar suggestions={searchSuggestions}/>
        </div>
    );
}

export default MarketTitle;