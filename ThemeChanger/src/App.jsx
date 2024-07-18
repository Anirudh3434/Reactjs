import { useEffect, useState } from 'react'
import { ThemeContextProvider, usetheme } from './Context/Theme';
import './App.css'
import Card from './Component/Card';


function App() {


     const[ThemeMode , setTheme] = useState('light')
     const[BoxTheme , setBoxTheme] = useState('box-light')

     

    const darkTheme=()=>{
     setTheme('dark')
     }

  const   lightTheme=()=>{
      setTheme('light')
     }

     const boxDark =()=>{
          setBoxTheme('box-dark')
     }

     const boxLight=()=>{
          setBoxTheme('box-light')
     }
     
     useEffect(()=>{
      const htmlElement = document.querySelector('html');
      htmlElement.classList.remove('light', 'dark');
      htmlElement.classList.add(ThemeMode);
      
    }, [ThemeMode])
  return (
    <ThemeContextProvider value={{ThemeMode,BoxTheme,darkTheme,lightTheme,boxDark,boxLight}}>
      <Card/>
    </ThemeContextProvider>
  )
}

export default App
