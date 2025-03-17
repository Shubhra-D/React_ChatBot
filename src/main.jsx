import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider as ChakraProvider} from './components/ui/provider'
import { HashRouter } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <HashRouter>
   <ChakraProvider>
    <App />
    </ChakraProvider>
   </HashRouter>
   </AuthProvider>
  </StrictMode>,
)
