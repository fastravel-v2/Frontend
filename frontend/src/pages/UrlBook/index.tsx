// UrlBook.tsx

import UrlList from './components/UrlList';
import { UrlSendBtn } from './components/UrlSendBtn';

export const UrlBook = () => {


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4">
        <UrlList />
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md">
        <UrlSendBtn />
      </div>
    </div>
  );
};

