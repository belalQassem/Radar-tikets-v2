import * as React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Display2 from "../../assets/ContentImages/92/R002165230616013554A.jpg";
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
  StyledFaExchangeAlt,
  StyledVscColorMode,
  StyledPiGraphDuotone,
  StyledMdUpdate,
} from "./style";


const StyledDiv = styled.div`
  height: 70%;
  width:70%;
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
  &:active{
    background-color:#084F5F;
    color: #fff;
}
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
const StyledDiv2 = styled.div`
  position:relative;
  width: 100%;
  height: 100%;
  display: block;
  grid-area:empty;
  box-sizing: border-box;
  overflow:scroll;
`;
const StyledDivNested = styled.div`
  position:absolute;
  height: 100%;
  width: 100%;
  background: url(${Display2}) center center / cover no-repeat;
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
    if (zoomLevel < 10) {
      setZoomLevel(prevZoom => prevZoom +0.5);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(prevZoom => prevZoom - 0.5);
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
    setZoomLevel(1);
    setBrightnessLevel(1);
    setColorMode(true)
    setIsFlipped(false)
    setOriginalPreview(false)
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
                <StyledDivNested style={{
                    transform: `scale(${zoomLevel}) ${isFlipped ? 'scaleX(-1)' : ''}`, 
                    filter: `brightness(${brightnessLevel}) ${colorMode ? '' : 'grayscale(100%)'}`,
                    display: originalPreview ? 'none' : 'block',  
                  }}>
                  
                </StyledDivNested>
               
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
