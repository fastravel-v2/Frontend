//src/pages/UrlBook/hooks/useSingleUrlDelete.tsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUrl } from '../api';
import { useUrlStore } from '../store';

const useSingleUrlDelete = () => {
    const queryClient = useQueryClient();
    // Zustand 스토어에서 removeCompletedUrl 함수를 가져옵니다.
    const { removeCompletedUrl } = useUrlStore();

    const mutation = useMutation({
        mutationFn: deleteUrl, // URL 삭제 API 호출
        onSuccess: (_, urlId) => {
            queryClient.invalidateQueries({ queryKey: ['urls'] });
            // URL 삭제 성공 시, completed_urls에서 해당 URL 제거
            removeCompletedUrl(urlId);
        },
    });

    const handleDelete = async (urlId: number) => {
        try {
            // mutateAsync를 호출하여 URL 삭제를 시도하고, 변수로 URL ID를 전달합니다.
            await mutation.mutateAsync(urlId);
        } catch (error) {
            console.error('Error deleting URL:', error);
        }
    };

    return { handleDelete };
};

export default useSingleUrlDelete;
