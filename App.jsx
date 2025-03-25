import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ServerStatus from './pages/ServerStatus'
import Rules from './pages/Rules'
import Characters from './pages/Characters'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/server-status" element={<ServerStatus />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 GTA 5 RP Server. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App 