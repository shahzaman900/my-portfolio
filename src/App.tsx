import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import Home from './pages/home'
import About from './pages/about'
import Header from './components/header'
import Projects from './pages/projects'
import Experience from './pages/experience'
import Contact from './pages/contact'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header ></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
