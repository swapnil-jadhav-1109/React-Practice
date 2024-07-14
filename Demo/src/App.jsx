import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Search from './components/Search.jsx'


const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="app">
      <Header />
      <Body />


    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    Path: "/",
    Element: <App />
  },
  {
    Path: "/Search",
    Element: <Search />
  }
])
export default App
