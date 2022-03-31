import { createContext, useContext, useReducer } from "react";
import { useGetProducts } from "../Hooks/useGetProducts";
import { filterReducer } from "../Reducers/filterReducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // getting products , error , loader by hook
  const { Products, errorMsg, loader } = useGetProducts();

  //  Filter Reducer
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sort: "",
    range: 0,
    rating: "",
    search_query: "",
    POCA: false,
    Album: false,
    LightSticks: false,
    IdolFashion: false,
    TSHIRT: false,
    HOODIES: false,
  });

  // console.log("filterState: ", filterState);
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
