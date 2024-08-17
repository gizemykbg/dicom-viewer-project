import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeRoiSelection } from '../../slices/viewerSlice';
import { useTranslation } from 'react-i18next';

function RoiPanel() {
  const roiSelections = useSelector(state => state.viewer.roiSelections) || [];
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleRemove = (id) => {
    dispatch(removeRoiSelection(id));
  };

  return (
    <div style={{padding: '10px' }}>
      <h2>{t('roiPanel.title')}</h2>
      {roiSelections.length > 0 ? (
        <ul>
          {roiSelections.map(roi => (
            <li key={roi.id} style={{ marginBottom: '10px' }}>
              {roi.name}
              <button onClick={() => handleRemove(roi.id)} style={{ marginLeft: '10px' }}>
                {t('roiPanel.remove')}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>{t('roiPanel.noSelection')}</p>
      )}
    </div>
  );
}

export default RoiPanel;