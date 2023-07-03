import { useState } from "react";
import SearchBar from "./Searchbar/SearchBar";

const MarketTitle = () => {
    const [searchSuggestions, setSearchSuggestions] = useState([
        {
            color: "#F78B1A",
            currencyGroup: "BTC",
            currencySymbol: "BTC",
            logo: "https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg",
            name: "Bitcoin",
        }
    ]);

    return (
        <div className="flex flex-row justify-between">
            <div className="sm:text-2xl text-s font-bold">Harga Crypto dalam Rupiah Hari Ini</div>
            <SearchBar suggestions={searchSuggestions} />
        </div>
    );
}

export default MarketTitle;