import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SearchContextProvider } from './context/searchContext'
import { CartContextProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <SearchContextProvider>
<CartContextProvider>
<BrowserRouter>
        <App />
      </BrowserRouter>
</CartContextProvider>
    </SearchContextProvider>
  </AuthContextProvider>
)

