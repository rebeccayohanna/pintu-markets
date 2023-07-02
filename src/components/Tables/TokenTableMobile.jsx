import { useState } from "react";
import { ReactSVG } from "react-svg";
import formatToRupiah from "../../lib/converter";
import TokenPercentages from "./TokenPercentages";

const TokenTableMobile = ({ dataPriceChanges, dataSupportedCurrencies }) => {
    const [timeFrame, setTimeFrame] = useState('day');

    const onChangeTimeframe = (e) => {
        setTimeFrame(e.target.value);
    }

    return (
        <table className="table-auto rounded-lg border-separate border border-gray-200 text-left">
            <thead>
                <tr>
                    <th className="border-b border-gray-200 p-5 text-xs">CRYPTO</th>
                    <th className="border-b border-gray-200 p-5 text-xs text-right">
                        <div>
                            <select
                                value={timeFrame}
                                onChange={onChangeTimeframe}
                                className="text-xs font-text font-semibold border rounded-md p-1"
                            >
                                <option value="day">24 JAM</option>
                                <option value="week">1 MGG</option>
                                <option value="month">1 BLN</option>
                                <option value="year">1 THN</option>
                            </select>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    dataPriceChanges && dataSupportedCurrencies &&
                    dataSupportedCurrencies?.slice(1).map((item, index) => {
                        const matchPrice = dataPriceChanges?.find((curr) => curr?.pair.split("/", 1)[0] === item.currencyGroup.toLowerCase());
                        return (
                            <tr className="font-semibold">
                                <td className="border-b border-gray-200 p-5">
                                    <a href="/">
                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center ml-1">
                                                <ReactSVG src={item.logo.replace('https://s3-ap-southeast-1.amazonaws.com', '')} style={{ color: item.color }} />
                                            </div>
                                            <div className="flex flex-1 flex-wrap">
                                                <p className="flex-1 text-left">{item.name}</p>
                                                <p className="mr-6 w-14 text-gray-500">{item.currencyGroup}</p>
                                            </div>
                                        </div>
                                    </a>
                                </td>
                                <td className="border-b border-gray-200 p-5 text-right">
                                    {formatToRupiah(matchPrice?.latestPrice)}
                                    <TokenPercentages percentage={matchPrice[timeFrame]} />
                                </td>
                            </tr>
                        )
                    }
                    )
                }
                {
                }
            </tbody>
        </table>
    )

}
export default TokenTableMobile