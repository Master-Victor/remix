import { create } from "zustand";

interface ItemState {
    id: number,
    name: string,
    maxQuantity: number,
    minQuantity: number,
    quantity: 0,
    pack?: [
      { itemName: string; itemDescription: string },
      { itemName: string; itemDescription: string },
      { itemName: string; itemDescription: string }
    ],
    pricePerUnit: number
}

export const useItemStore = create((set) => ({
    items: [] as ItemState[],
    addItem: (item: ItemState) => set((state:any) => ({ items: [...state.items, item] })),
    addItems: (items: ItemState[]) => set((state:any) => ({ items: [...state.items, ...items] })),
    removeItem: (id: number) => set((state:any) => ({ items: state.items.filter((item: ItemState) => item.id !== id) })),
    updateItem: (item: ItemState) => set((state:any) => ({ items: state.items.map((i: ItemState) => i.id === item.id ? item : i) })),
    changeQuantity: (id: number, quantity: number) => set((state:any) => ({ items: state.items.map((i: ItemState) => i.id === id ? { ...i, quantity } : i) })),
}));
