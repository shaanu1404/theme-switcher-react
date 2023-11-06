import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Image() {
  return (
    <TransformWrapper>
      <TransformComponent>
        <img
          className="image"
          src="https://i.pinimg.com/originals/67/fc/e6/67fce6f55f6b7896e80c7f4286aeeab4.jpg"
          alt="scenery"
        />
      </TransformComponent>
    </TransformWrapper>
  );
}

export default Image;
