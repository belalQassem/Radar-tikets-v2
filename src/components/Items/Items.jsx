import {React,useState} from 'react'
import { SidbarContent, SidbarContainer,StyledMdZoomOut,StyledMdOutlineZoomIn,StyledMdBrightness6,StyledMdPreview,StyledMdOutlineImageSearch,StyledMdExitToApp,StyledMdOutlineSmartDisplay,StyledFaExchangeAlt,StyledVscColorMode,StyledPiGraphDuotone,StyledMdUpdate } from './style'

const Items = () => {
    const [zoomLevel, setZoomLevel] = useState(100);
    const handleZoomIn = () => {
        if (zoomLevel < 200) { // Limit maximum zoom to 200%
          setZoomLevel(zoomLevel + 10); // Increase zoom level by 10%
        }
      };
      const handleZoomOut = () => {
        if (zoomLevel > 10) { // Limit minimum zoom to 10%
          setZoomLevel(zoomLevel - 10); // Decrease zoom level by 10%
        }
      };
    return (
        <SidbarContainer>
            <SidbarContent >
            <StyledMdZoomOut onClick={handleZoomOut} />
            <StyledMdOutlineZoomIn onClick={handleZoomIn} />
            <StyledMdBrightness6 />
            <StyledMdPreview/>
            <StyledMdOutlineImageSearch />
            <StyledMdExitToApp />
            <StyledMdOutlineSmartDisplay/>
            <StyledFaExchangeAlt/>
            <StyledVscColorMode />
            <StyledPiGraphDuotone />
            <StyledMdUpdate />
               
            </SidbarContent>
        </SidbarContainer>
    )
}

export default Items;