
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
import DashboardPage from './pages/demo/DashboardPage';
import ChartPage from './pages/demo/ChartPage';
import BackEndGridPage from './pages/demo/BackEndGridPage';
import BackendViewFormPage from './pages/demo/BackendViewFormPage';
import EditPage from './pages/EditPage';
import StaticSummaryGrid from './pages/StaticSummaryGrid';
import DynamicFields from './pages/diy/DynamicFields';
import DepsFields from './pages/diy/DepsFields';
import CardPage from './pages/demo/CardPage';
import TreeMenu from './pages/diy/TreeMenuPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout appTitle='RUI Demo' />} >
            <Route path="/home" element={<HomePage />} />
            <Route path="/deps" element={<DepsFields />} />
            <Route path="/dynamic" element={<DynamicFields />} />
            <Route path="/menu" element={<TreeMenu />} />
            <Route path="/grid" element={<StaticSummaryGrid />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/demo/:layout/backendgrid/view/:id" element={<BackendViewFormPage />} />
            <Route path="/demo/:layout/backendgrid" element={<BackEndGridPage />} />
            <Route path="/demo/:layout/grid" element={<GridPage />} />
            <Route path="/demo/:layout/dashboard" element={<DashboardPage />} />
            <Route path="/demo/:layout/chart" element={<ChartPage />} />
            <Route path="/demo/:layout/card" element={<CardPage />} />
            <Route path="/demo/:layout/formEdit" element={<EditFormPage />} />
            <Route path="/demo/:layout/formView" element={<ViewFormPage />} />
            <Route path="/demo/:layout/formNew" element={<NewFormPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
