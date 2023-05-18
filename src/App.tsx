import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';

import CompaniesPage from 'pages/companies/CompaniesPage';
import PositionsPage from 'pages/positions/PositionsPage';
import StudentsPage from 'pages/students/StudentsPage';
import TemplatePageLayout from 'pages/templateLayout/TemplatePageLayout';

import './App.scss';

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='' element={<Navigate replace to='/students' />} />
                    <Route path='/*' element={<TemplatePageLayout />}>
                        <Route path='students' element={<StudentsPage />} />
                        <Route path='positions' element={<PositionsPage />} />
                        <Route path='companies' element={<CompaniesPage />} />
                        <Route path='companies/:id' element={<CompaniesPage />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
