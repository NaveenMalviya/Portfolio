import Navbar from './components/NavBar/navbar'
import Intro from './components/Intro/intro'
import Skills from './components/Skills/skills'
import Edu from './components/Education/edu'
import Projects from './components/Projects/projects'
import Contact from './components/Contact/contact'
function App() {

  return (
    <div className="app">
      <Navbar/>
      <Intro/>
      <Edu/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
