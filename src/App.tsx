import { Contact } from './components/Contact'
import { HomePage } from './components/HomePage'
import { NavBar } from './components/NavBar'
import { Resume } from './components/Resume'
import './index.css'

export default function App() {
  return (
    <div>
      <NavBar />
      <section className="scroll-mt-28" id='home'>
        <HomePage />
      </section>
      <section className="scroll-mt-28" id='resume'>
        <Resume />
      </section>
      <section className="scroll-mt-28" id='contact'>
        <Contact />
      </section>
      <section className="scroll-mt-28" id='home'>
        <HomePage />
      </section>
    </div>
  )
}

