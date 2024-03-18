// src/pages/UrlBook/components/UrlItem.tsx
import React from 'react';
import { UrlItem as UrlItemType } from '../store';
import { useUrlStore } from '../store';


const UrlItem: React.FC<UrlItemType> = ({ id, thumbnail='https://cdn.myro.co.kr/prod/image/city/Busan.jpg', memo, title= `Title of URL ${id}`, plot= `Plot of URL ${id}`, checked }) => {
  const toggleCheck = useUrlStore((state) => state.toggleCheck);

  return (
    <div className="flex items-center p-4 bg-white rounded shadow mb-2">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => toggleCheck(id)}
        className="form-checkbox h-5 w-5 text-blue-600"
      />

      {/* Thumbnail */}
      <img src={thumbnail} alt="Thumbnail" className="w-16 h-16 rounded ml-4" />

      {/* Content */}
      <div className="flex flex-col ml-4">
        <span className="text-lg font-bold">{title}</span>
        <span className="text-sm text-gray-500">{memo}</span>
        <span className="text-sm">{plot}</span>
      </div>
    </div>
  );
};

export default UrlItem;
