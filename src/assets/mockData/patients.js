export const patients = [
    {
        id: 1,
        name: "John Doe",
        mrn: "NEW_PATIENT_ID",
        studyDate: "May-11-2023 01:14 PM",
        description: "CT NECK SOFT TISSUE W/O",
        modality: "CT",
        accession: "295",
        instances: 10,
        dicomFilePath: 'https://tools.cornerstonejs.org/examples/assets/dicom/bellona/chest_lung/34.dcm',  // DICOM dosya yolu düzeltildi
        details: {
            age: 45,
            gender: "Male",
            referringPhysician: "Dr. Smith",
            studyDescription: "CT of the neck region",
            studyDate: "May-11-2023",
            modality: "CT",
            institution: "General Hospital",
            bodyPartExamined: "Neck"
        }
    },
    {
        id: 2,
        name: "Jane Smith",
        mrn: "M1",
        studyDate: "Sep-15-2022 10:55 AM",
        description: "General Static Scan + CT",
        modality: "CT/PT",
        accession: "10163",
        instances: 25,
        dicomFilePath: 'https://tools.cornerstonejs.org/examples/assets/dicom/exotic/1.dcm',  // DICOM dosya yolu düzeltildi
        details: {
            age: 37,
            gender: "Female",
            referringPhysician: "Dr. Johnson",
            studyDescription: "PET/CT scan for oncology",
            studyDate: "Sep-15-2022",
            modality: "CT/PT",
            institution: "Cancer Treatment Center",
            bodyPartExamined: "Whole Body"
        }
    },
    {
        id: 3,
        name: "Robert Brown",
        mrn: "C3L-00088",
        studyDate: "Apr-11-2017 02:10 PM",
        description: "Histopathology",
        modality: "SM",
        accession: "263",
        instances: 15,
        dicomFilePath: 'https://tools.cornerstonejs.org/examples/assets/dicom/bellona/chest_lung/34.dcm',  // DICOM dosya yolu düzeltildi
        details: {
            age: 52,
            gender: "Male",
            referringPhysician: "Dr. Emily",
            studyDescription: "Histopathology examination of tissue sample",
            studyDate: "Apr-11-2017",
            modality: "SM",
            institution: "Pathology Lab",
            bodyPartExamined: "Liver"
        }
    },
    {
        id: 4,
        name: "Alice Johnson",
        mrn: "LUNG-008",
        studyDate: "Jan-01-2014 04:29 PM",
        description: "Mammo Screening",
        modality: "MG",
        accession: "18",
        instances: 8,
        dicomFilePath: 'https://tools.cornerstonejs.org/examples/assets/dicom/exotic/3.dcm',  // DICOM dosya yolu düzeltildi
        details: {
            age: 62,
            gender: "Female",
            referringPhysician: "Dr. Peter",
            studyDescription: "Mammography screening for breast cancer",
            studyDate: "Jan-01-2014",
            modality: "MG",
            institution: "Breast Health Clinic",
            bodyPartExamined: "Breast"
        }
    },
    {
        id: 5,
        name: "Michael Davis",
        mrn: "TCGA-02-0068",
        studyDate: "Jun-20-2009 04:12 PM",
        description: "CT Abdomen & Pelvis",
        modality: "CT/RS",
        accession: "77",
        instances: 20,
        dicomFilePath: 'https://tools.cornerstonejs.org/examples/assets/dicom/exotic/1.dcm',  // DICOM dosya yolu düzeltildi
        details: {
            age: 58,
            gender: "Male",
            referringPhysician: "Dr. Baker",
            studyDescription: "CT scan of the abdomen and pelvis",
            studyDate: "Jun-20-2009",
            modality: "CT/RS",
            institution: "Radiology Center",
            bodyPartExamined: "Abdomen/Pelvis"
        }
    }
];