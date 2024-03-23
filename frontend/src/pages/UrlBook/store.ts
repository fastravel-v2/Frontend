// src/pages/UrlBook/store.ts
import { create } from 'zustand';
import { fetchUrls } from 'src/apis/urlDummy';
import { useEffect } from 'react';

export interface UrlItem {
  checked: boolean;
  url: string; 
}

interface UrlStore {
  urls: UrlItem[];
  toggleCheck: (index: number) => void;
  addUrl: (url: string ) => void; // Modify the type of newUrl parameter
  addUrls: (urls: string[]) => void; // 한번에 urls만들어서 렌더링
  deleteCheckedUrls: () => void;
  // asd: string;
}

export const useUrlStore = create<UrlStore>((set) => ({
  urls: [],
  // asd: 'asdasd',

  toggleCheck: (index) => {
    set((state) => {
      const updatedUrls = state.urls.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      );
      // console.log("Checked Items:", updatedUrls.filter(item => item.checked).map(item => item.url));
      // console.log("asd:", state.asd)
      return {
        urls: updatedUrls,
        // asd: state
      };
    });
  },

  addUrl: (url) => {
    set((state) => ({
      urls: [...state.urls, { url, checked: false }],
    }));
  },

  addUrls: (newUrls) => {
    set(() => ({
      urls: newUrls.map(url => ({ url, checked: false })),
    }));
  },

  deleteCheckedUrls: () => {
    set((state) => ({
      urls: state.urls.filter((item) => !item.checked),
    }));
  },
}));


// 더미 데이터를 가져와서 store에 추가하는 코드
// useEffect를 사용하여 컴포넌트가 렌더링될 때 한 번만 실행됩니다.
export const useFetchDummyUrls = () => {
  const fetchData = async () => {
    try {
      const data = await fetchUrls(); // 더미 데이터 가져오기
      useUrlStore.getState().addUrls(data); // store에 데이터 추가
    } catch (error) {
      console.error('Error fetching URLs:', error);
    }
  };
  useEffect(() => {
  fetchData();
  }, []); // useEffect의 두 번째 인자로 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 합니다.
};
