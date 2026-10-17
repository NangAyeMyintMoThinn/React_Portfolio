import { Contact } from './components/Contact'
import { HomePage } from './components/HomePage'
import { NavBar } from './components/NavBar'
import { Resume } from './components/Resume'
import './index.css'

export default function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Resume />
      <Contact />
    </div>
  )
}

