import React, { createContext, useContext, useState } from 'react';

const VehicleDataContext = createContext();

export const useVehicleData = () => {
  return useContext(VehicleDataContext);
};

export const VehicleDataProvider = ({ children }) => {
  const [vehicleData, setVehicleData] = useState({
        type: '7845',
        boardSource: '1',
        boardSourceCountry: '3',
        boardSourceCategory: '1',
        boardSourceColor: '46',
        operatorNumber: '2914',
        locationNumber: '21',
        vehicleType: '4',
        vehicleModel: '1724',
        vehicleColor: '1',
  });

  const updateVehicleData = (newData) => {
    setVehicleData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <VehicleDataContext.Provider value={{ vehicleData, updateVehicleData }}>
      {children}
    </VehicleDataContext.Provider>
  );
};
