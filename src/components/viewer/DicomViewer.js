import React, { useRef, useEffect } from 'react';
import * as cornerstone from 'cornerstone-core';
import * as cornerstoneTools from '@cornerstonejs/tools';
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import dicomParser from 'dicom-parser';
import { useDispatch } from 'react-redux';
import { addRoiSelection } from '../../slices/viewerSlice';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import RoiPanel from './RoiPanel';

function DicomViewer() {
  const elementRef = useRef(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();
  const { dicomFilePath } = location.state || {};

  const viewportId = 'myViewport';

  useEffect(() => {
    const initializeCornerstone = async () => {
      try {
        await loadAndDisplayImage(dicomFilePath);
        setupTools();
      } catch (error) {
        console.error('Error during Cornerstone initialization:', error);
      }
    };

    const loadAndDisplayImage = async (dicomFilePath) => {
      cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
      cornerstoneWADOImageLoader.external.cornerstone = cornerstone;

      const element = elementRef.current;
      cornerstone.enable(element);

      const imageId = 'wadouri:' + dicomFilePath;
      const image = await cornerstone.loadImage(imageId);

      console.log('Image loaded:', image);
      cornerstone.displayImage(element, image);
    };

    const setupTools = () => {
      const { RectangleROITool, PanTool, ZoomTool, ToolGroupManager, addTool } = cornerstoneTools;

      addTool(RectangleROITool);
      addTool(PanTool);
      addTool(ZoomTool);

      const toolGroupId = 'myToolGroup';
      const toolGroup = ToolGroupManager.createToolGroup(toolGroupId);

      toolGroup.addTool(RectangleROITool.toolName);
      toolGroup.addTool(PanTool.toolName);
      toolGroup.addTool(ZoomTool.toolName);

      toolGroup.setToolActive(RectangleROITool.toolName, { mouseButton: cornerstoneTools.Enums.MouseBindings.Primary });
      toolGroup.setToolActive(PanTool.toolName, { mouseButton: cornerstoneTools.Enums.MouseBindings.Secondary });
      toolGroup.setToolActive(ZoomTool.toolName, { mouseButton: cornerstoneTools.Enums.MouseBindings.Auxiliary });

      toolGroup.addViewport(viewportId, elementRef.current);

      console.log('Tools set up and active');
    };

    initializeCornerstone();

    // return () => {
      // if (elementRef.current) {
      //   cornerstone.disable(elementRef.current);
      // }
    // };
  }, [dicomFilePath, dispatch]);

  const handleAddROI = () => {
    const newRoi = {
      id: Date.now(),
      name: `ROI ${Date.now()}`,
    };
    dispatch(addRoiSelection(newRoi));
  };

  return (
    <div className="dicom-viewer-container">
    <div ref={elementRef} id={viewportId} className="dicom-viewer"></div>
      <div className="roi-panel-container">
        <RoiPanel />
        <button onClick={handleAddROI}>{t('viewer.addRoi')}</button>
      </div>
    </div>
  );
}

export default DicomViewer;