import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import Home from './pages/home'
import About from './pages/about'
import Header from './components/header'
import Projects from './pages/projects'
import Experience from './pages/experience'
import Contact from './pages/contact'
import SocialMedia from './components/socialMedia'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='w-full h-screen flex flex-col'>
        <div className='static top-0'>
          <Header />
        </div>
        <div className='flex flex-1 overflow-hidden'>
          <div className='static '>
            <SocialMedia />
          </div>
          <div className='flex-1 overflow-y-auto p-4'>
            <Home />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
