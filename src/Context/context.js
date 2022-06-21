import { createContext, useContext, useReducer , useState } from "react";
import { useGetProducts } from "../Hooks/useGetProducts";
import { filterReducer } from "../Reducers/filterReducer";


const ProductContext = createContext();

const ProductProvider = ({ children }) => {


  // getting products , error , loader by hook
  const { Products, errorMsg, loader } = useGetProducts();

  //  Filter Reducer
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sort: "",
    range: 2500,
    rating: "",
    search_query: "",
    POCA: false,
    Album: false,
    LightSticks: false,
    IdolFashion: false,
    Tshirt: false,
    Hoodies: false,
  });

  return (
    <ProductContext.Provider
      value={{ Products, loader, errorMsg, filterDispatch, filterState }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);
export { ProductProvider, useProducts };
