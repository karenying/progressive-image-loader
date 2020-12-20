import { useState } from 'react';

import './ProgImg.css';

const ProgImg = ({ mini, img, width, height }) => {
  const [opacity, setOpacity] = useState(1);

  return (
    <div
      className='ProgImg'
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img
        className='ProgImg-mini'
        src={mini}
        style={{ opacity }}
        width={width}
        height={height}
        alt='Karen'
      />
      <img
        className='ProgImg-img'
        src={img}
        onLoad={() => setOpacity(0)}
        width={width}
        height={height}
        alt='Karen'
      />
    </div>
  );
};

export default ProgImg;
