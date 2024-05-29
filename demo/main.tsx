import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './components/menu/AsyncTreeMenu.css';
import '../demo/themes/Layout.css';
import '../demo/themes/colorDef.css';
import '../demo/themes/blue/Colors.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  // <React.StrictMode>
      <App />
      <ToastContainer limit={1} />
  // </React.StrictMode>,
  </>
)
