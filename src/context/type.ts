import { ReactNode } from "react";


export type ShoppingCartProviderProps = {
    children: ReactNode;
};

export type ShoppingCartContextProps = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
};

export type CartItem = {
    id: number;
    quantity: number;
}