import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes olarak güncellendi
import PatientList from './components/patient/PatientList';
import DicomViewer from './components/viewer/DicomViewer';
import LanguageSelector from './components/common/LanguageSelector';
import './i18n';

function App() {
  return (
    <Router>
      <div>
        <LanguageSelector />
        <Routes>
          <Route path="/" element={<PatientList />} />
          <Route path="/viewer/:id" element={<DicomViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
