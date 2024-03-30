// src/pages/UrlBook/hooks/useUrlDelete.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUrl } from '../api';
import { useUrlStore } from '../store';

const useUrlDelete = () => {
    const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: deleteUrl,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['urls'] })
		},
	})

    const urls = useUrlStore((state) => state.urls);
    const checkedUrls = urls.filter((url) => url.checked);

    const handleDelete = async () => {
        const deletePromises = checkedUrls.map(async (url) => {
            try {
                await mutation.mutateAsync(url.url_id);
            } catch (error) {
                console.error('Error deleting URL:', error);
                // 에러 처리 로직 추가
            }
        });

        await Promise.all(deletePromises);
    };

    return { checkedUrls, handleDelete };
};

export default useUrlDelete;