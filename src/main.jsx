import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import JournalApp from './JournalApp.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <JournalApp />
    </Provider>
  </React.StrictMode>,
)
