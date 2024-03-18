// src/UrlBook/components/UrlList.tsx
import React from 'react';
import UrlItem from './UrlItem';
import { useUrlStore } from '../store';


const UrlList: React.FC = () => {
  const urls = useUrlStore((state) => state.urls);
  
  return (
    <div>
      {urls.map((url) => (
        <UrlItem key={url.id} {...url} />
      ))}
    </div>
  );
};

export default UrlList;
