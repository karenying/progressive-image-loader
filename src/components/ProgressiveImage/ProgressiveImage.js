import { useState } from 'react';

import './ProgressiveImage.css';

const ProgressiveImage = ({ src, placeholder, width, height }) => {
  const [opacity, setOpacity] = useState(1);

  return (
    <div
      className='ProgressiveImage'
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img
        className='ProgressiveImage-mini'
        src={placeholder}
        style={{ opacity }}
        width={width}
        height={height}
        alt='Karen'
      />
      <img
        className='ProgressiveImage-img'
        src={src}
        onLoad={() => setOpacity(0)}
        width={width}
        height={height}
        alt='Karen'
      />
    </div>
  );
};

export default ProgressiveImage;
