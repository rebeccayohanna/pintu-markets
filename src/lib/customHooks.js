import { useQuery } from "react-query";

export const usePriceChanges = () => {
    return useQuery(['priceChanges'], async () => {
        const response = await fetch('/api/trade/price-changes'); // move to file fetching API
        const json = await response.json();

        if (json.code === 'success') {
            return json.payload;
        } else {
            const error = new Error(json.message);
            error.code = json.code;
            throw error;
        }
    }, {
        refetchInterval: 1500,
    }
    );
}

export const useSupportedCurrencies = () => {
    return useQuery('supportedCurrencies', async () => {
        const response = await fetch('/api/v2/wallet/supportedCurrencies');
        const json = await response.json();

        if (json.code === 'success') {
            return json.payload;
        } else {
            const error = new Error(json.message);
            error.code = json.code;
            throw error;
        }
    });
}