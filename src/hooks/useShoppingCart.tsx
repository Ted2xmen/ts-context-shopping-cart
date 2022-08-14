import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
