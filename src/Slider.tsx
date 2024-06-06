import { FC, useState } from "react";
import styled from "styled-components";

type Image = {
  src: string;
  alt: string;
  caption: string;
};

interface SliderProps {
  images: Image[][];
}

const SliderContainer = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
  overflow: hidden;
`;

const SliderWrapper = styled.div<{ index: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ index }) => `translateX(-${index * 100}%)`};
`;

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
`;

const SlideItem = styled.div`
  width: 30%;
  text-align: center;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
`;

const Arrow = styled.div<{ direction: string }>`
  position: absolute;
  top: 30%;
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ direction }) => (direction === "left" ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
`;

export const Slider: FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentindex] = useState(0);

  const onLeftArrowClick = () => {
    setCurrentindex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const onRightArrowClick = () => {
    setCurrentindex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <SliderContainer>
      <SliderWrapper index={currentIndex}>
        {images.map((imageSet, index) => (
          <Slide key={index}>
            {imageSet.map((image, imgIndex) => (
              <SlideItem key={imgIndex}>
                <SlideImage src={image.src} alt={image.alt} />
                <p>{image.caption}</p>
              </SlideItem>
            ))}
          </Slide>
        ))}
      </SliderWrapper>
      <Arrow direction="left" onClick={onLeftArrowClick}>
        &#9664;
      </Arrow>
      <Arrow direction="right" onClick={onRightArrowClick}>
        &#9654;
      </Arrow>
    </SliderContainer>
  );
};
