import { useContext, createContext } from "react"
import { useState, useEffect } from "react"

const ThemeContext = createContext()


export const ThemeContextProvider = ({ children })=>{
  const [ theme, setTheme ] = useState("light");

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);
  
  return(
      <ThemeContext value={{ theme, setTheme }}>{ children } </ThemeContext>
  )
}


export const useThemeContext = ()=>{
  const context = useContext(ThemeContext)
  return context;
}
