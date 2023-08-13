import { createContext, useContext, useState } from 'react';

const CroppedImageContext = createContext();

export const useCroppedImage = () => {
  return useContext(CroppedImageContext);
};

export const CroppedImageProvider = ({ children }) => {
  const [croppedImage, setCroppedImage] = useState(null);

  return (
    <CroppedImageContext.Provider value={{ croppedImage, setCroppedImage }}>
      {children}
    </CroppedImageContext.Provider>
  );
};
