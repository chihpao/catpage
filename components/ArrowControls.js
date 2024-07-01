import React, { useEffect } from 'react';

const ArrowControls = ({ handleArrowClick }) => {
  // 添加鍵盤事件處理函數
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          handleArrowClick('up');
          break;
        case 'ArrowDown':
          handleArrowClick('down');
          break;
        case 'ArrowLeft':
          handleArrowClick('left');
          break;
        case 'ArrowRight':
          handleArrowClick('right');
          break;
        default:
          break;
      }
    };

    // 添加事件監聽器
    window.addEventListener('keydown', handleKeyPress);

    // 清理函數
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleArrowClick]);

  return (
    <div className="flex flex-col items-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={() => handleArrowClick('up')}>↑</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={() => handleArrowClick('down')}>↓</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={() => handleArrowClick('left')}>←</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={() => handleArrowClick('right')}>→</button>
    </div>
  );
};

export default ArrowControls;