// src/pages/UrlBook/store.ts
import create from 'zustand';

export interface UrlItem {
  id: string;
  checked: boolean;
  thumbnail: string;
  memo: string;
  title: string;
  plot: string;
}

interface UrlStore {
  urls: UrlItem[];
  toggleCheck: (id: string) => void;
}

export const useUrlStore = create<UrlStore>((set) => ({
  urls: [
    {
        id: '1',
        thumbnail: 'https://cdn.myro.co.kr/prod/image/city/Busan.jpg',
        memo: 'Memo for URL 1', 
        title: 'Title of URL 1',
        plot: 'Plot of URL 1',
        checked: false,
      },
      {
        id: '2',
        thumbnail: 'https://cdn.myro.co.kr/prod/image/city/Busan.jpg',
        memo: 'Memo for URL 2',
        title: 'Title of URL 2',
        plot: 'Plot of URL 2',
        checked: false,
      },
      {
        id: '3',
        thumbnail: 'https://cdn.myro.co.kr/prod/image/city/Busan.jpg',
        memo: 'Memo for URL 3',
        title: 'Title of URL 3',
        plot: 'Plot of URL 3',
        checked: false,
      },
  ],
  toggleCheck: (id: string) => {
    set((state) => ({
      urls: state.urls.map((url) =>
        url.id === id ? { ...url, checked: !url.checked } : url
      ),
    }));
  },
}));
