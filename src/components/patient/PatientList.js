import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPatients } from '../../slices/patientSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { patients as mockPatients } from './../../assets/mockData/patients';  // Mock veriyi import edin

function PatientList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const patients = useSelector(state => state.patient.list);
  const { t } = useTranslation();
  const [expandedPatient, setExpandedPatient] = useState(null);

  useEffect(() => {

    dispatch(setPatients(mockPatients));
  }, [dispatch]);

  const handleExpandRow = (patientId) => {
    setExpandedPatient(expandedPatient === patientId ? null : patientId);
  };

  const handleViewDicom = (patientId, dicomFilePath) => {
    navigate(`/viewer/${patientId}`, { state: { dicomFilePath } });
  };

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <table>
        <thead>
          <tr>
            <th>{t('patient.name')}</th>
            <th>{t('patient.mrn')}</th>
            <th>{t('patient.studyDate')}</th>
            <th>{t('patient.description')}</th>
            <th>{t('patient.modality')}</th>
            <th>{t('patient.accession')}</th>
            <th>{t('patient.instances')}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <React.Fragment key={patient.id}>
              <tr onClick={() => handleExpandRow(patient.id)}>
                <td>{patient.name}</td>
                <td>{patient.mrn}</td>
                <td>{patient.studyDate}</td>
                <td>{patient.description}</td>
                <td>{patient.modality}</td>
                <td>{patient.accession}</td>
                <td>{patient.instances}</td>
                <td>
                  <button onClick={() => handleViewDicom(patient.id, patient.dicomFilePath)}>
                    {t('patient.viewDicom')}
                  </button>
                </td>
              </tr>
              {expandedPatient === patient.id && (
                <tr>
                <td colSpan="8">
                  <div className="patient-details">
                      <strong>{t('patient.details')}:</strong>
                      <p>{t('patient.age')}: {patient.details.age}</p>
                      <p>{t('patient.gender')}: {patient.details.gender}</p>
                      <p>{t('patient.referringPhysician')}: {patient.details.referringPhysician}</p>
                      <p>{t('patient.studyDescription')}: {patient.details.studyDescription}</p>
                      <p>{t('patient.institution')}: {patient.details.institution}</p>
                      <p>{t('patient.bodyPartExamined')}: {patient.details.bodyPartExamined}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
