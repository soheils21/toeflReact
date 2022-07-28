import React, {createContext,useState} from 'react';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [nav, setNav] = useState([false, false, false,false,false]);
  return (
    <GlobalContext.Provider
      value={{nav,setNav}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
