import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import PersonProvider from './CreateCon.jsx'

createRoot(document.getElementById('root')).render(
  <PersonProvider>
    <Provider store={store}>
    <App />
    </Provider>
  </PersonProvider>,
)
