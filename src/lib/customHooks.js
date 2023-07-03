import { useQuery } from "react-query";
import { fetchPriceChanges, fetchSupportedCurrencies } from "./fetchApi";

export const usePriceChanges = () => {
    const { data, isLoading, error } = useQuery(['priceChanges'], fetchPriceChanges, {
        refetchInterval: 1000,
    });

    return { data, isLoading, error };
};

export const useSupportedCurrencies = () => {
    const { data, isLoading, error } = useQuery(['supportedCurrencies'], fetchSupportedCurrencies);

    return { data, isLoading, error };
};