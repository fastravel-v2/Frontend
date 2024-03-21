// src/pages/UrlBook/components/AddUrlModal.tsx
import React, { useState, useRef, useEffect } from 'react'; // useRef, useEffect 추가
import { useUrlStore } from '../store';

const UrlAddModal: React.FC<{ doCloseModal: () => void }> = ({ doCloseModal }) => {
  // const [memo, setMemo] = useState('');
  const [url, setUrl] = useState(''); // Add this line
  const addUrl = useUrlStore((state) => state.addUrl);

  const urlInputRef = useRef<HTMLTextAreaElement>(null); // textarea 엘리먼트에 대한 참조 생성

  useEffect(() => {
    // 모달이 열릴 때 포커스를 메모 입력창으로 이동
    if (urlInputRef.current) {
      urlInputRef.current.focus();
    }
  }, []); // []로 빈 배열을 전달하여 한 번만 실행되도록 설정

  const handleSubmit = () => {
    addUrl(url);
    doCloseModal();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">URL 입력</h3>
          <div className="mt-2 px-7 py-3">
            <textarea
              ref={urlInputRef} 
              className="resize-none border rounded-md w-72 mt-2 text-center"
              placeholder="URL 입력"
              value={url}
              onKeyDown={handleKeyDown}
              rows={1}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className='flex justify-center'>
            <div className="items-center px-4 py-3">
              <button
                className="px-4 py-2 bg-green-700 text-white text-base 
                  font-medium rounded-md w-full shadow-sm hover:bg-blue-700 
                  focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>

            <div className="items-center px-4 py-3">
              <button
                className="px-4 py-2 bg-white text-base 
                font-medium rounded-md w-full shadow-sm hover:bg-gray-100 
                focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={doCloseModal}
              >
                Cancel
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default UrlAddModal;
