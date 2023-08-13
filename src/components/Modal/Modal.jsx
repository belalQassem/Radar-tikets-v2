import * as React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Display2 from "../../assets/ContentImages/acura-rear-gac7a35b29_1280.jpg";
import { MdCloseFullscreen } from "react-icons/md";
import { styled } from "styled-components";
import {
  SidbarContent,
  SidbarContainer,
  StyledMdZoomOut,
  StyledMdOutlineZoomIn,
  StyledMdBrightnessHigh,
  StyledMdBrightnessLow,
  StyledMdPreview,
 
  // StyledMdOutlineImageSearch,
  // StyledMdOutlineSmartDisplay,
  StyledFaExchangeAlt,
  StyledVscColorMode,
  StyledPiGraphDuotone,
  StyledMdUpdate,
} from "./style";


const StyledDiv = styled.div`
  height: 50%;
  width:50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  display: grid;
  grid-template-rows: 2rem 4fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";
`;
const StyledHeader = styled.div`
  width: 100%;
  height: 100%;
  grid-area: header;
  background-color: #fff;
`;
const FullScreenExit = styled(MdCloseFullscreen)`
  height: 1.5rem;
  width: 1.5rem;
  color: #616161;
  position: absolute;
  top: 8px;
  left: 12px;
  display: block;
  cursor: pointer;
`;
const StyledMain = styled.div`
  width: 100%;
  height: 100%;
  grid-area: main;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 4fr 2rem;
  grid-template-areas: "empty sidbar ";
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledDiv2 = styled.div`
  width: 100%;
  height: 100%;
  grid-area: empty;
  overflow: hidden;
  `



export default function BasicModal({ imageUrl, onClose, isOpen }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [brightnessLevel, setBrightnessLevel] = useState(1);
  const [colorMode, setColorMode] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [originalPreview, setOriginalPreview] = useState(false);

 

  const handleClose = () => {
    onClose(false);
  };

  const handleZoomIn = () => {
    if (zoomLevel < 3) {
      setZoomLevel(prevZoom => prevZoom + 0.2);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(prevZoom => prevZoom - 0.2);
    }
  };

  const handleIncreaseBrightness = () => {
    if (brightnessLevel < 3) {
      setBrightnessLevel(prevBrightness => prevBrightness + 0.2);
    }
  };

  const handleDecreaseBrightness = () => {
    setBrightnessLevel(prevBrightness => prevBrightness - 0.2);
  };

  const handleImageFlip = () => {
    setIsFlipped(prevIsFlipped => !prevIsFlipped);
  };
  const handleToggleOriginalPreview = () => {
    setOriginalPreview(prevPreview => !prevPreview);
  };
  return (
    <div>
      
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <StyledDiv>
            <StyledHeader>
              <FullScreenExit onClick={handleClose} />
            </StyledHeader>

            <StyledMain >
              <StyledDiv2>
                <StyledImage
                  src={Display2}
                  alt="Display"
                  style={{
                    transform: `scale(${zoomLevel}) ${isFlipped ? 'scaleX(-1)' : ''}`, 
                    filter: `brightness(${brightnessLevel}) ${colorMode ? '' : 'grayscale(100%)'}`,
                    display: originalPreview ? 'none' : 'block',  
                  }}
                />
                {originalPreview && (
                  <StyledImage
                    src={Display2}
                    alt="Original Display"
                    style={{ display: 'block' }}
                  />
                )}
              </StyledDiv2>

              <SidbarContainer>
                <SidbarContent>
                  <StyledMdZoomOut onClick={handleZoomOut} />
                  <StyledMdOutlineZoomIn onClick={handleZoomIn} />
                  <StyledMdBrightnessHigh onClick={handleIncreaseBrightness} />
                  <StyledMdBrightnessLow onClick={handleDecreaseBrightness} />
                  <StyledVscColorMode onClick={() => setColorMode(prevColorMode => !prevColorMode)} />
                  <StyledMdPreview onClick={handleToggleOriginalPreview} />
                  <StyledFaExchangeAlt onClick={handleImageFlip} />
                  
                  <StyledPiGraphDuotone />
                  <StyledMdUpdate />
                </SidbarContent>
              </SidbarContainer>
            </StyledMain>
          </StyledDiv>
      </Modal>
    </div>
  );
}
