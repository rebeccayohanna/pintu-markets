export const fetchPriceChanges = async () => {
    const response = await fetch('/api/v2/trade/price-changes');
    const json = await response.json();

    if (json.code === 'success') {
        return json.payload;
    } else {
        throw new Error(json.message);
    }
};

export const fetchSupportedCurrencies = async () => {
    const response = await fetch('/api/v2/wallet/supportedCurrencies');
    const json = await response.json();

    if (json.code === 'success') {
        return json.payload;
    } else {
        throw new Error(json.message);
    }
};