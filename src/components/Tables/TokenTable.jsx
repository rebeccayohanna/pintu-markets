import { ReactSVG } from "react-svg";
import formatToRupiah from "../../lib/converter";
import TokenPercentages from "./TokenPercentages";

const TokenTable = ({ dataPriceChanges, dataSupportedCurrencies }) => {
    return (
        <table className="table-auto rounded-lg border-separate border border-gray-200 text-left w-full">
            <thead>
                <tr>
                    <th className="border-b border-gray-200 p-5 pl-20">CRYPTO</th>
                    <th className="border-b border-gray-200 p-5">HARGA</th>
                    <th className="border-b border-gray-200 p-5">24 JAM</th>
                    <th className="border-b border-gray-200 p-5">1 MGG</th>
                    <th className="border-b border-gray-200 p-5">1 BLN</th>
                    <th className="border-b border-gray-200 p-5">1 THN</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataPriceChanges && dataSupportedCurrencies &&
                    dataSupportedCurrencies?.slice(1).map((item, index) => {
                        const matchPrice = dataPriceChanges?.find((curr) => curr?.pair.split("/", 1)[0] === item.currencyGroup.toLowerCase());
                        return (
                            <tr key={index} className="font-semibold">
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
                                <td className="border-b border-gray-200 p-5">{formatToRupiah(matchPrice?.latestPrice)}</td>
                                <td className="border-b border-gray-200 p-5"><TokenPercentages percentage={matchPrice?.day} /></td>
                                <td className="border-b border-gray-200 p-5"><TokenPercentages percentage={matchPrice?.week} /></td>
                                <td className="border-b border-gray-200 p-5"><TokenPercentages percentage={matchPrice?.month} /></td>
                                <td className="border-b border-gray-200 p-5"><TokenPercentages percentage={matchPrice?.year} /></td>
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
export default TokenTable