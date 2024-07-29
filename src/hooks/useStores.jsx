import { createContext, useContext } from "react";
import galleryStore from "../stores/galleryStore";

const StoresContext = createContext({
  galleryStore,
});

export const StoresProvider = ({ children }) => {
  return (
    <StoresContext.Provider value={{ galleryStore }}>
      {children}
    </StoresContext.Provider>
  );
};

export const useStores = () => useContext(StoresContext);
