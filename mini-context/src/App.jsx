
import { useEffect, useState } from 'react'
import './App.css'
import LogIn from './components/LogIn'
import Profile from './components/Profile'
import { ThemeProvider } from './context/theme'
import UserContextProvider from './context/UserContextProvider'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'

function App() {
  let [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light");
  }
  
  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  },[themeMode]);

  return (
    <UserContextProvider>
     <LogIn/>
     <Profile/>
     
     <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton/>          
         </div>

        <div className="w-full max-w-sm mx-auto">
            <Card/>    
          </div>
        </div>
    </div>
    </ThemeProvider>
    </UserContextProvider>
    )
}

export default App
