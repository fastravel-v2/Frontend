interface MemoModalProps {
    onClose: () => void;
}

const MemoModal = ({ onClose }: MemoModalProps) => {
  
    return (
      <div className="fixed inset-0 z-[110] flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
        </div>
        <div className="relative z-[120] bg-white rounded-lg h-[284px] w-[300px] p-4">
          <h3 className="text-base font-semibold mb-4">메모 추가하기</h3>
          <hr />
          <textarea className="mt-4 mb-2 h-[140px] w-[268px] text-sm p-4 bg-lightGray4 rounded resize-none outline-none focus:outline-none" placeholder="메모를 작성해주세요"></textarea>
          <div className="flex justify-between">
            <button className="w-32 h-10 bg-lightGray4 text-xs font-bold rounded" onClick={onClose}>
                취소
            </button>
            <button className="w-32 h-10 bg-green1 text-white text-xs font-bold rounded">
                저장하기
            </button>
          </div>
        </div>
      </div>
    );
  };

export default MemoModal