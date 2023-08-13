import React, { useEffect } from 'react';
import { StyledDiv, StyledImageDiv, Items, IconSearch, EditIcon, DeleteIcon, PrinterIcon, StyledMdExitToApp } from './style';
import VehicleDetails from '../../components/VehicleDetails/VehicleDetails';
import BoardSourceDetails from '../../components/BordSourceDetails/BoardSourceDetails';
import { useCroppedImage } from '../../context/CroppedImageContext';
import { useVehicleData } from '../../context/VehicleDataContext';

const RightSide = () => {
  const { croppedImage, setCroppedImage } = useCroppedImage();
  const { vehicleData, updateVehicleData } = useVehicleData();

  useEffect(() => {
    setCroppedImage("false");
  }, [setCroppedImage]);

  const onChange = (e) => {
    const { id, value } = e.target;
    updateVehicleData({ [id]: value });
  };

  return (
    <StyledDiv>
      <StyledImageDiv src={croppedImage || null} alt="cropped IMAGE" />
      <BoardSourceDetails formData={vehicleData} onChange={onChange} /> 
      <VehicleDetails formData={vehicleData} onChange={onChange} />

      <Items>
        <IconSearch />
        <EditIcon />
        <DeleteIcon />
        <PrinterIcon />
        <StyledMdExitToApp />
      </Items>
    </StyledDiv>
  );
};

export default RightSide;
