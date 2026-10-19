import { ThemeProvider } from './components/ThemeContext'
import { Contact } from './components/Contact'
import { HomePage } from './components/HomePage'
import { NavBar } from './components/NavBar'
import { Resume } from './components/Resume'
import { Works } from './components/Works'
import './index.css'

export default function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <HomePage />
      <Resume />
      <Works />
      <Contact />
    </ThemeProvider>
  )
}

