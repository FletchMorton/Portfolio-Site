import { HashRouter as Router, Routes, Route } from 'react-router'
import Search  from './pages/Search'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Default Page */}
          <Route path="/" element={<Portfolio/>}/>

          {/* Navigatable Pages */}
          <Route path="/search" element={<Search/>}/>

          <Route path="/home" element={<Home/>}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default App

