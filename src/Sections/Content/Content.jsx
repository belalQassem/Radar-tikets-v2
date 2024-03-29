import React, { useState, useRef } from 'react';
import { StyledDiv, StyledImageDiv,StyledVideoScene, StyledImagebig, StyledSecondDiv, StyledVideo, StyledArrowIcon, StyledIconsDiv, StyledPlusIcon, StyledMinusIcon, StyledExpandIcon } from './style';
import Video from "../../assets/car2.mp4";
import Display2 from "../../assets/ContentImages/92/R002165230616013554A.jpg";
import ModalComponent from '../../components/Modal/Modal';
import { useCroppedImage } from "../../context/CroppedImageContext";



const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingCoords, setDrawingCoords] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const imageRef = useRef(null);
  const { setCroppedImage } = useCroppedImage();
  const handleExpandClick = (imageUrl) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const handleImageMouseDown = (event) => {
    const { clientX, clientY } = event;
    const rect = imageRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setDrawingCoords({ x, y, width: 0, height: 0 });
    setIsDrawing(true);
  };

  const handleImageMouseMove = (event) => {
    if (!isDrawing) return;
    const { clientX, clientY } = event;
    const rect = imageRef.current.getBoundingClientRect();
    const width = clientX - rect.left - drawingCoords.x;
    const height = clientY - rect.top - drawingCoords.y;
    setDrawingCoords((prevCoords) => ({ ...prevCoords, width, height }));
  };

  const handleImageMouseUp = (event) => {
    if (isDrawing) {
      const { currentTarget } = event;
      const canvas = document.createElement('canvas');
      const scaleX = currentTarget.naturalWidth / currentTarget.width;
      const scaleY = currentTarget.naturalHeight / currentTarget.height;

      canvas.width = drawingCoords.width * scaleX;
      canvas.height = drawingCoords.height * scaleY;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(
        currentTarget,
        drawingCoords.x * scaleX, drawingCoords.y * scaleY, drawingCoords.width * scaleX, drawingCoords.height * scaleY,
        0, 0, canvas.width, canvas.height
      );

      const croppedImageData = canvas.toDataURL();
      setCroppedImage(croppedImageData);
    }
    setIsDrawing(false);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledDiv>
      <StyledImageDiv src={Display2} alt='croped' loading='lazy' />
      <StyledVideo>
        <StyledVideoScene controls >
          <source src={Video} type="video/mp4" />
        </StyledVideoScene>
      </StyledVideo>
      <StyledSecondDiv>
        <StyledImagebig
          src={Display2}
          loading='lazy'
          alt="Display two"
          onMouseDown={handleImageMouseDown}
          onMouseMove={handleImageMouseMove}
          onMouseUp={handleImageMouseUp}
          ref={imageRef}
        />
          <div
            style={{
              position: 'absolute',
              border: '3px solid red', left: drawingCoords.x,
              top: drawingCoords.y,
              width: drawingCoords.width,
              height: drawingCoords.height,
            }}
          /> 
        <StyledExpandIcon onClick={() => handleExpandClick("../../assets/ContentImages/92/R002165230616013554A.jpg")} />
        <StyledArrowIcon />
        <StyledIconsDiv>
          <StyledPlusIcon />
          <StyledMinusIcon />
        </StyledIconsDiv>
      </StyledSecondDiv>
      {isModalOpen && (
        <ModalComponent isOpen={isModalOpen} imageUrl={modalImageUrl} onClose={handleCloseModal} />
      )}

    </StyledDiv>
  );
};
export default Content;



