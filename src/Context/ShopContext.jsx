import React, { createContext } from 'react';
import all_product from '../Components/Assets/all_product';

// Use camelCase for variable names (ShopContextProvider)
export const ShopContext = createContext(null);

// Fix the typo in the component name
const ShopContextProvider = (props) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

// Export the corrected name
export default ShopContextProvider;
