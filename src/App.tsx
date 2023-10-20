
import './App.css'
import '../lib/palmyra/styles/Layout.css';
import '../src/themes/blue/Colors.css';
import '../src/themes/colorDef.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './pages/MainLayout';
import HomePage from './pages/HomePage';
import EditFormPage from './pages/demo/EditFormPage';
import ViewFormPage from './pages/demo/ViewFormPage';
import NewFormPage from './pages/demo/NewFormPage';
import GridPage from './pages/demo/GridPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout appTitle='RUI Demo' />} >
            <Route path="/home" element={<HomePage />} />
            <Route path="/demo/layout/grid" element={<GridPage />} />
            <Route path="/demo/layout/dashboard" element={<HomePage />} />
            <Route path="/demo/layout/card" element={<HomePage />} />
            <Route path="/demo/layout/formEdit" element={<EditFormPage />} />
            <Route path="/demo/layout/formView" element={<ViewFormPage />} />
            <Route path="/demo/layout/formNew" element={<NewFormPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
