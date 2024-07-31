//---------------------------- Basic Example
/* 

import { createContext, useContext } from "react";

const ThemeContext = createContext<string | undefined>(undefined);

type TypeProps = {
  children: React.ReactNode;
};

export default function ThemeContextProvider({ children }: TypeProps) {
  return (
    <ThemeContext.Provider value={"hello"}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(`context must be used inside ThemeContextProvider`);
  }

  return context;
};

*/
//---------------------------------------------

import { createContext, useContext, useState } from "react";

type TypeTheme = "light" | "dark" | "system";

type TypeThemeContext = {
  theme: TypeTheme | undefined;
  setTheme: React.Dispatch<React.SetStateAction<TypeTheme>>;
};

const ThemeContext = createContext<TypeThemeContext | undefined>(undefined);

type TypeThemeContextProviderProps = {
  children: React.ReactNode;
  defaultTheme?: TypeTheme;
};

export default function ThemeContextProvider({
  children,
  defaultTheme = "system",
}: TypeThemeContextProviderProps) {
  const [theme, setTheme] = useState<TypeTheme>(defaultTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(`context must be used inside ThemeContextProvider`);
  }

  return context;
};
