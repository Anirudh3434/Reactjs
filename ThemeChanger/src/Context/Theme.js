import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
    BoxTheme: 'box-light',
    ThemeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
    boxDark: ()=>{},
    boxLight:()=>{}
});

export const ThemeContextProvider = ThemeContext.Provider;

export function usetheme() {
    return useContext(ThemeContext);
}
