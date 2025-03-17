import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import BurgerMenu from './components/BurgerMenu.jsx'
import SideBar from './components/SideBar.jsx'

// TODO: CSS for the page

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BurgerMenu /> 
    <NavBar/>
    <SideBar />
  </StrictMode>,
)
