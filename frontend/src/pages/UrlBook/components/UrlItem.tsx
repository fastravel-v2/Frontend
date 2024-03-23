import React, { useEffect, useState } from 'react';
import { UrlItem as UrlItemType } from '../store';
import { useUrlStore } from '../store';
import fetchOpenGraphData from '../utils/openGraphUtils';


// UrlItemType에 index 속성을 추가합니다.
// store에 직접 index를 넣을수는 없으니까 ..
interface UrlItemTypeWithIndex extends UrlItemType {
  index: number;
}

const UrlItem: React.FC<UrlItemTypeWithIndex> = ({ index, url, checked }) => {
  const [openGraphData, setOpenGraphData] = useState<{ title: string; plot: string; thumbnail: string } | null>(null);
  const toggleCheck = useUrlStore((state) => state.toggleCheck);

  useEffect(() => {
    // URL이 변경될 때마다 Open Graph 데이터를 가져오기
    fetchOpenGraphData(url)
      .then(data => setOpenGraphData(data))
      .catch(error => console.error(error));
  }, [url]);

  const handleTitleClick = () => {
    // 제목 클릭 시 해당 URL로 이동
    window.open(url, '_blank');
  };

  return (
    <div className="flex items-center p-4 bg-white rounded shadow mb-2">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => toggleCheck(index)}
        className="form-checkbox h-5px w-5px text-blue-600"
      />

    {/* Thumbnail */}
    {openGraphData && (
      <img src={openGraphData.thumbnail} alt="Thumbnail" className="w-16 h-16 rounded ml-4 object-cover object-center" />
    )}

      {/* Content */}
      <div className="flex flex-col ml-4">
      <a href={url} target="_blank" rel="noopener noreferrer" onClick={handleTitleClick} className="text-lg font-bold line-clamp-1 cursor-pointer">{openGraphData?.title || 'Loading...'}</a>
        <span className="text-sm text-gray-500 line-clamp-2">{openGraphData?.plot || 'Loading...'}</span>
      </div>
    </div>
  );
};

export default UrlItem;
