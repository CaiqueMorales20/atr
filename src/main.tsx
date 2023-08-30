// Imports
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'

// App
import App from './App.tsx'

// Global Style
import GlobalStyle from './global/style/GlobalStyle/index.tsx'

// Rendering
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
