import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './componentes/login/login.tsx'
import Erro from './componentes/error/error.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/error" element={<Erro/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
