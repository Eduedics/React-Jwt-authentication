import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthContext.jsx'
import { FlashMessageProvider } from './context/FlashMessageContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlashMessageProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </FlashMessageProvider>
  </StrictMode>,
)
