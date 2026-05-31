import { HashRouter as Router, Routes, Route } from 'react-router'
import Search  from './pages/Search'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'
import { ModalProvider} from './components/modal.jsx'

function App() {

  return (
    <>
    <ModalProvider>
        <Router>
          <Routes>
            {/* Default Page */}
            <Route path="/" element={<Portfolio/>}/>

            {/* Navigatable Pages */}
            <Route path="/search" element={<Search/>}/>

            <Route path="/home" element={<Home/>}/>
            
          </Routes>
        </Router>
      </ModalProvider>
    </>
  )
}

export default App

