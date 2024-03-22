// src/UrlBook/components/UrlList.tsx

import UrlItem from './UrlItem';
import { useUrlStore } from '../store';

const UrlList: React.FC = () => {
  const urls = useUrlStore((state) => state.urls);

  return (
    <div>
      {urls.map((url, index) => (
        <UrlItem key={index} index={index} {...url} />
      ))}
    </div>
  );
};

export default UrlList;
