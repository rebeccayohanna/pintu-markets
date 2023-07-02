import React from "react";
import { useSupportedCurrencies, usePriceChanges } from "../lib/customHooks";
import TokenTable from "./Tables/TokenTable";
import TokenTableMobile from "./Tables/TokenTableMobile";


const MarketTable = () => {
    const { data: dataPriceChanges } = usePriceChanges();
    const { data: dataSupportedCurrencies } = useSupportedCurrencies();

    return (
        <div className="container">
            <div className="sm:block hidden">
                <TokenTable dataPriceChanges={dataPriceChanges} dataSupportedCurrencies={dataSupportedCurrencies} />
            </div>
            <div className="sm:hidden block">
                <TokenTableMobile dataPriceChanges={dataPriceChanges} dataSupportedCurrencies={dataSupportedCurrencies} />
            </div>
        </div>
    )
}

export default MarketTable;