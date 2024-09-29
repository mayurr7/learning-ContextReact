
import './App.css'
import LogIn from './components/LogIn'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
     <LogIn/>
    </UserContextProvider>
  )
}

export default App
