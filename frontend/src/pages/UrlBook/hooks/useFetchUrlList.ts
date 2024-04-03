//src/pages/UrlBook/hooks/useFetchUrlList.ts

import { useQuery } from '@tanstack/react-query';
import { fetchUrlList } from '../api';
import { IUrlItem } from '../types';

const useFetchUrlList = () => {
    const { data, isLoading, isError, refetch } = useQuery<IUrlItem[], Error>({
        queryKey: ['urls'],
        queryFn: fetchUrlList,
        
    });

    return { data, isLoading, isError, refetch }; // refetch 추가
};

export default useFetchUrlList;