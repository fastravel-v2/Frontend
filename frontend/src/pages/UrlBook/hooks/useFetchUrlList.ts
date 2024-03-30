

import { useQuery } from '@tanstack/react-query';
import { fetchUrlList } from '../api';
import { IUrlItem } from '../types';

const useFetchUrlList = () => {
    const { data, isLoading, isError } = useQuery<IUrlItem[], Error>({
        queryKey: ['urls'],
        queryFn: fetchUrlList,
    });

    return { data, isLoading, isError };
};

export default useFetchUrlList;