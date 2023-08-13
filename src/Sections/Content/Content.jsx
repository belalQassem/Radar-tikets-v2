import React, { useState, useRef } from 'react';
import { StyledDiv, StyledImageDiv,StyledImagebig, StyledSecondDiv, StyledVideo, StyledArrowIcon, StyledIconsDiv, StyledPlusIcon, StyledMinusIcon, StyledExpandIcon } from './style';
import Video from "../../assets/cars.mp4";
import Display2 from "../../assets/ContentImages/acura-rear-gac7a35b29_1280.jpg";
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
      localStorage.setItem('croppedImage', croppedImageData);
    }
    setIsDrawing(false);
  };
  

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
 
 
  return (
    <StyledDiv>
      <StyledImageDiv src={Display2}  alt='croped'/>
      
  
       <StyledVideo>
        <video width="100%" height="100%" controls style={{ objectFit: 'cover' }}>
          <source src={Video} type="video/mp4" />
        </video>
      </StyledVideo>

      <StyledSecondDiv>
        <StyledImagebig
          src={Display2}
          alt="Display two"
          onMouseDown={handleImageMouseDown}
          onMouseMove={handleImageMouseMove}
          onMouseUp={handleImageMouseUp}
          ref={imageRef}
        />
        {isDrawing &&  (
           <div
             style={{
              position: 'absolute',
               border: '3px solid red',              left: drawingCoords.x,
               top: drawingCoords.y,
               width: drawingCoords.width,
               height: drawingCoords.height,
             }}
           />
         )}

        <StyledExpandIcon onClick={() => handleExpandClick("../../assets/ContentImages/acura-rear-gac7a35b29_1280.jpg")} />
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



