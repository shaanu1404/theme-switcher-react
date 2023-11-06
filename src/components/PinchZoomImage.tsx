import { useState } from 'react';

const PinchZoomImage = ({ imageUrl }: {imageUrl: string}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (event) => {
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      setPosition({
        x: touch.pageX,
        y: touch.pageY,
      });
    }
    if (event.touches.length >= 2) {
        const distance = Math.hypot(
          event.touches[0].pageX - event.touches[1].pageX,
          event.touches[0].pageY - event.touches[1].pageY
        );
  
        // You can adjust the sensitivity of zooming by changing the scaleFactor.
        const scaleFactor = 0.01;
        const newScale = Math.max(1, scale + scaleFactor * distance);
  
        setScale(newScale);
      }
  };

  return (
    <div
      className="pinch-zoom-container"
      onTouchMove={handleTouchMove}
      style={{
        transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <img src={imageUrl} alt="Zoomable Image" />
    </div>
  );
};

export default PinchZoomImage;
