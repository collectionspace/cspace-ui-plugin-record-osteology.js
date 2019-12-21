/* global window */

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import '!style-loader!css-loader!../../styles/osteo.css';
import osteoRadioButton from './osteoRadioButton';
import osteoCheckbox from './osteoCheckbox';
import { ABSENT_VALUE, COMPLETE_VALUE } from '../constants';

const relations = {
  Cranium: {
    children: [
      'Frontal_L', 'Frontal_R',
      'Occipital',
      'Sphenoid',
      'Vomer',
      'Ethmoid',
      'Parietal_L', 'Parietal_R',
      'Temporal_L', 'Temporal_R',
      'Maxilla_L', 'Maxilla_R',
      'Nasal_L', 'Nasal_R',
      'Zygomatic_L', 'Zygomatic_R',
      'Lacrimal_L', 'Lacrimal_R',
      'Palatine_L', 'Palatine_R',
      'Mandible_L', 'Mandible_R',
      'Orbit_L', 'Orbit_R',
    ],
    computedFrom: [
      'Frontal_L', 'Frontal_R',
      'Occipital',
      'Sphenoid',
      'Vomer',
      'Ethmoid',
      'Parietal_L', 'Parietal_R',
      'Temporal_L', 'Temporal_R',
      'Maxilla_L', 'Maxilla_R',
      'Nasal_L', 'Nasal_R',
      'Zygomatic_L', 'Zygomatic_R',
      'Lacrimal_L', 'Lacrimal_R',
      'Palatine_L', 'Palatine_R',
      'Mandible_L', 'Mandible_R',
      'Orbit_L', 'Orbit_R',
    ],
  },
  Occipital: {
    children: [
      'Occipital_pars_basilaris',
      'Occipital_L_pars_lateralis',
      'Occipital_R_pars_lateralis',
    ],
    computedFrom: [
      'Occipital_pars_basilaris',
      'Occipital_L_pars_lateralis',
      'Occipital_R_pars_lateralis',
      '__other__',
    ],
  },

  //

  Humerus_L_complete: {
    children: [
      'Humerus_L_JS_P',
      'Humerus_L_shaft_P',
      'Humerus_L_shaft_M',
      'Humerus_L_shaft_D',
      'Humerus_L_JS_D',
    ],
    computedFrom: [
      'Humerus_L_JS_P',
      'Humerus_L_shaft_P',
      'Humerus_L_shaft_M',
      'Humerus_L_shaft_D',
      'Humerus_L_JS_D',
    ],
  },
  Humerus_R_complete: {
    children: [
      'Humerus_R_JS_P',
      'Humerus_R_shaft_P',
      'Humerus_R_shaft_M',
      'Humerus_R_shaft_D',
      'Humerus_R_JS_D',
    ],
    computedFrom: [
      'Humerus_R_JS_P',
      'Humerus_R_shaft_P',
      'Humerus_R_shaft_M',
      'Humerus_R_shaft_D',
      'Humerus_R_JS_D',
    ],
  },
  Radius_L_complete: {
    children: [
      'Radius_L_JS_P',
      'Radius_L_shaft_P',
      'Radius_L_shaft_M',
      'Radius_L_shaft_D',
      'Radius_L_JS_D',
    ],
    computedFrom: [
      'Radius_L_JS_P',
      'Radius_L_shaft_P',
      'Radius_L_shaft_M',
      'Radius_L_shaft_D',
      'Radius_L_JS_D',
    ],
  },
  Radius_R_complete: {
    children: [
      'Radius_R_JS_P',
      'Radius_R_shaft_P',
      'Radius_R_shaft_M',
      'Radius_R_shaft_D',
      'Radius_R_JS_D',
    ],
    computedFrom: [
      'Radius_R_JS_P',
      'Radius_R_shaft_P',
      'Radius_R_shaft_M',
      'Radius_R_shaft_D',
      'Radius_R_JS_D',
    ],
  },
  Ulna_L_complete: {
    children: [
      'Ulna_L_JS_P',
      'Ulna_L_shaft_P',
      'Ulna_L_shaft_M',
      'Ulna_L_shaft_D',
      'Ulna_L_JS_D',
    ],
    computedFrom: [
      'Ulna_L_JS_P',
      'Ulna_L_shaft_P',
      'Ulna_L_shaft_M',
      'Ulna_L_shaft_D',
      'Ulna_L_JS_D',
    ],
  },
  Ulna_R_complete: {
    children: [
      'Ulna_R_JS_P',
      'Ulna_R_shaft_P',
      'Ulna_R_shaft_M',
      'Ulna_R_shaft_D',
      'Ulna_R_JS_D',
    ],
    computedFrom: [
      'Ulna_R_JS_P',
      'Ulna_R_shaft_P',
      'Ulna_R_shaft_M',
      'Ulna_R_shaft_D',
      'Ulna_R_JS_D',
    ],
  },

  //

  Femur_L_complete: {
    children: [
      'Femur_L_JS_P',
      'Femur_L_shaft_P',
      'Femur_L_shaft_M',
      'Femur_L_shaft_D',
      'Femur_L_JS_D',
    ],
    computedFrom: [
      'Femur_L_JS_P',
      'Femur_L_shaft_P',
      'Femur_L_shaft_M',
      'Femur_L_shaft_D',
      'Femur_L_JS_D',
    ],
  },
  Femur_R_complete: {
    children: [
      'Femur_R_JS_P',
      'Femur_R_shaft_P',
      'Femur_R_shaft_M',
      'Femur_R_shaft_D',
      'Femur_R_JS_D',
    ],
    computedFrom: [
      'Femur_R_JS_P',
      'Femur_R_shaft_P',
      'Femur_R_shaft_M',
      'Femur_R_shaft_D',
      'Femur_R_JS_D',
    ],
  },
  Tibia_L_complete: {
    children: [
      'Tibia_L_JS_P',
      'Tibia_L_shaft_P',
      'Tibia_L_shaft_M',
      'Tibia_L_shaft_D',
      'Tibia_L_JS_D',
    ],
    computedFrom: [
      'Tibia_L_JS_P',
      'Tibia_L_shaft_P',
      'Tibia_L_shaft_M',
      'Tibia_L_shaft_D',
      'Tibia_L_JS_D',
    ],
  },
  Tibia_R_complete: {
    children: [
      'Tibia_R_JS_P',
      'Tibia_R_shaft_P',
      'Tibia_R_shaft_M',
      'Tibia_R_shaft_D',
      'Tibia_R_JS_D',
    ],
    computedFrom: [
      'Tibia_R_JS_P',
      'Tibia_R_shaft_P',
      'Tibia_R_shaft_M',
      'Tibia_R_shaft_D',
      'Tibia_R_JS_D',
    ],
  },
  Fibula_L_complete: {
    children: [
      'Fibula_L_JS_P',
      'Fibula_L_shaft_P',
      'Fibula_L_shaft_M',
      'Fibula_L_shaft_D',
      'Fibula_L_JS_D',
    ],
    computedFrom: [
      'Fibula_L_JS_P',
      'Fibula_L_shaft_P',
      'Fibula_L_shaft_M',
      'Fibula_L_shaft_D',
      'Fibula_L_JS_D',
    ],
  },
  Fibula_R_complete: {
    children: [
      'Fibula_R_JS_P',
      'Fibula_R_shaft_P',
      'Fibula_R_shaft_M',
      'Fibula_R_shaft_D',
      'Fibula_R_JS_D',
    ],
    computedFrom: [
      'Fibula_R_JS_P',
      'Fibula_R_shaft_P',
      'Fibula_R_shaft_M',
      'Fibula_R_shaft_D',
      'Fibula_R_JS_D',
    ],
  },

  //

  Os_coxae_L: {
    children: [
      'Ischium_L',
      'Ilium_L',
      'Pubis_L',
      'Acetabulum_L',
      'Auricular_surf_L',
    ],
    computedFrom: [
      'Ischium_L',
      'Ilium_L',
      'Pubis_L',
    ],
  },
  Ischium_L: {
    markVisited: [
      'Acetabulum_L',
      'Auricular_surf_L',
    ],
  },
  Ilium_L: {
    markVisited: [
      'Acetabulum_L',
      'Auricular_surf_L',
    ],
  },
  Acetabulum_L: {
    markVisited: [
      'Auricular_surf_L',
    ],
  },
  Auricular_surf_L: {
    markVisited: [
      'Acetabulum_L',
    ],
  },
  Pubis_L: {
    markVisited: [
      'Acetabulum_L',
      'Auricular_surf_L',
    ],
  },
  Os_coxae_R: {
    children: [
      'Ischium_R',
      'Ilium_R',
      'Pubis_R',
      'Acetabulum_R',
      'Auricular_surf_R',
    ],
    computedFrom: [
      'Ischium_R',
      'Ilium_R',
      'Pubis_R',
    ],
  },
  Ischium_R: {
    markVisited: [
      'Acetabulum_R',
      'Auricular_surf_R',
    ],
  },
  Ilium_R: {
    markVisited: [
      'Acetabulum_R',
      'Auricular_surf_R',
    ],
  },
  Pubis_R: {
    markVisited: [
      'Acetabulum_R',
      'Auricular_surf_R',
    ],
  },
  Scapula_L: {
    children: [
      'Glenoid_L',
    ],
    computedFrom: [
      'Glenoid_L',
      '__other__',
    ],
  },
  Scapula_R: {
    children: [
      'Glenoid_R',
    ],
    computedFrom: [
      'Glenoid_R',
      '__other__',
    ],
  },
  Sternum: {
    children: [
      'Manubrium',
    ],
    computedFrom: [
      'Manubrium',
      '__other__',
    ],
  },

  //

  Carpals_L_complete: {
    children: [
      'Scaphoid_L',
      'Lunate_L',
      'Triquetral_L',
      'Pisiform_L',
      'Trapezium_L',
      'Trapezoid_L',
      'Capitate_L',
      'Hamate_L',
    ],
    computedFrom: [
      'Scaphoid_L',
      'Lunate_L',
      'Triquetral_L',
      'Pisiform_L',
      'Trapezium_L',
      'Trapezoid_L',
      'Capitate_L',
      'Hamate_L',
    ],
  },

  Carpals_R_complete: {
    children: [
      'Scaphoid_R',
      'Lunate_R',
      'Triquetral_R',
      'Pisiform_R',
      'Trapezium_R',
      'Trapezoid_R',
      'Capitate_R',
      'Hamate_R',
    ],
    computedFrom: [
      'Scaphoid_R',
      'Lunate_R',
      'Triquetral_R',
      'Pisiform_R',
      'Trapezium_R',
      'Trapezoid_R',
      'Capitate_R',
      'Hamate_R',
    ],
  },

  //

  Tarsals_L_complete: {
    children: [
      'Talus_L',
      'Calcaneus_L',
      'Navicular_L',
      'Cuboid_L',
      'Med_cuneif_1_L',
      'Int_cuneif_2_L',
      'Lat_cuneif_3_L',
    ],
    computedFrom: [
      'Talus_L',
      'Calcaneus_L',
      'Navicular_L',
      'Cuboid_L',
      'Med_cuneif_1_L',
      'Int_cuneif_2_L',
      'Lat_cuneif_3_L',
    ],
  },

  Tarsals_R_complete: {
    children: [
      'Talus_R',
      'Calcaneus_R',
      'Navicular_R',
      'Cuboid_R',
      'Med_cuneif_1_R',
      'Int_cuneif_2_R',
      'Lat_cuneif_3_R',
    ],
    computedFrom: [
      'Talus_R',
      'Calcaneus_R',
      'Navicular_R',
      'Cuboid_R',
      'Med_cuneif_1_R',
      'Int_cuneif_2_R',
      'Lat_cuneif_3_R',
    ],
  },

  //

  MC_L_complete: {
    children: [
      'MC1_L',
      'MC2_L',
      'MC3_L',
      'MC4_L',
      'MC5_L',
    ],
    computedFrom: [
      'MC1_L',
      'MC2_L',
      'MC3_L',
      'MC4_L',
      'MC5_L',
    ],
  },

  MC_R_complete: {
    children: [
      'MC1_R',
      'MC2_R',
      'MC3_R',
      'MC4_R',
      'MC5_R',
    ],
    computedFrom: [
      'MC1_R',
      'MC2_R',
      'MC3_R',
      'MC4_R',
      'MC5_R',
    ],
  },

  //

  MT_L_complete: {
    children: [
      'MT1_L',
      'MT2_L',
      'MT3_L',
      'MT4_L',
      'MT5_L',
    ],
    computedFrom: [
      'MT1_L',
      'MT2_L',
      'MT3_L',
      'MT4_L',
      'MT5_L',
    ],
  },

  MT_R_complete: {
    children: [
      'MT1_R',
      'MT2_R',
      'MT3_R',
      'MT4_R',
      'MT5_R',
    ],
    computedFrom: [
      'MT1_R',
      'MT2_R',
      'MT3_R',
      'MT4_R',
      'MT5_R',
    ],
  },

  //

  Ribs_L_complete: {
    children: [
      'Rib1_L',
      'Rib2_L',
      'Rib3_L',
      'Rib4_L',
      'Rib5_L',
      'Rib6_L',
      'Rib7_L',
      'Rib8_L',
      'Rib9_L',
      'Rib10_L',
      'Rib11_L',
      'Rib12_L',
    ],
    computedFrom: [
      'Rib1_L',
      'Rib2_L',
      'Rib3_L',
      'Rib4_L',
      'Rib5_L',
      'Rib6_L',
      'Rib7_L',
      'Rib8_L',
      'Rib9_L',
      'Rib10_L',
      'Rib11_L',
      'Rib12_L',
    ],
  },

  Rib1_L: {
    children: [
      'Rib1_L_sternal_end_complete',
      'Rib1_L_head_neck_complete',
    ],
    computedFrom: [
      'Rib1_L_sternal_end_complete',
      'Rib1_L_head_neck_complete',
      '__other__',
    ],
  },

  Rib2_L: {
    children: [
      'Rib2_L_sternal_end_complete',
      'Rib2_L_head_neck_complete',
    ],
    computedFrom: [
      'Rib2_L_sternal_end_complete',
      'Rib2_L_head_neck_complete',
      '__other__',
    ],
  },

  Rib3_L: {
    children: [
      'Rib3_L_sternal_end_complete',
      'Rib3_L_head_neck_complete',
    ],
    computedFrom: [
      'Rib3_L_sternal_end_complete',
      'Rib3_L_head_neck_complete',
      '__other__',
    ],
  },

  Rib4_L: {
    children: [
      'Rib4_L_sternal_end_complete',
      'Rib4_L_head_neck_complete',
    ],
    computedFrom: [
      'Rib4_L_sternal_end_complete',
      'Rib4_L_head_neck_complete',
      '__other__',
    ],
  },

  Rib5_L: {
    children: [
      'Rib5_L_sternal_end_complete',
      'Rib5_L_head_neck_complete',
    ],
    computedFrom: [
      'Rib5_L_sternal_end_complete',
      'Rib5_L_head_neck_complete',
      '__other__',
    ],
  },

  Rib6_L: {
    children: [
      'Rib6_L_sternal_end_complete',
      'Rib6_L_head_neck_complete',
    ],
    computedFrom: [
      'Rib6_L_sternal_end_complete',
      'Rib6_L_head_neck_complete',
      '__other__',
    ],
  },

  Rib7_L: {
    children: [
      'Rib7_L_sternal_end_complete',
      'Rib7_L_head_neck_complete',
    ],
    computedFrom: [
      'Rib7_L_sternal_end_complete',
      'Rib7_L_head_neck_complete',
      '__other__',
    ],
  },

  Rib8_L: {
    children: [
      'Rib8_L_sternal_end_complete',
      'Rib8_L_head_neck_complete',
    ],
    computedFrom: [
      'Rib8_L_sternal_end_complete',
      'Rib8_L_head_neck_complete',
      '__other__',
    ],
  },

  Rib9_L: {
    children: [
      'Rib9_L_sternal_end_complete',
      'Rib9_L_head_neck_complete',
    ],
    computedFrom: [
      'Rib9_L_sternal_end_complete',
      'Rib9_L_head_neck_complete',
      '__other__',
    ],
  },

  Rib10_L: {
    children: [
      'Rib10_L_sternal_end_complete',
      'Rib10_L_head_neck_complete',
    ],
    computedFrom: [
      'Rib10_L_sternal_end_complete',
      'Rib10_L_head_neck_complete',
      '__other__',
    ],
  },

  Rib11_L: {
    children: [
      'Rib11_L_sternal_end_complete',
      'Rib11_L_head_neck_complete',
    ],
    computedFrom: [
      'Rib11_L_sternal_end_complete',
      'Rib11_L_head_neck_complete',
      '__other__',
    ],
  },

  Rib12_L: {
    children: [
      'Rib12_L_sternal_end_complete',
      'Rib12_L_head_neck_complete',
    ],
    computedFrom: [
      'Rib12_L_sternal_end_complete',
      'Rib12_L_head_neck_complete',
      '__other__',
    ],
  },

  Ribs_R_complete: {
    children: [
      'Rib1_R',
      'Rib2_R',
      'Rib3_R',
      'Rib4_R',
      'Rib5_R',
      'Rib6_R',
      'Rib7_R',
      'Rib8_R',
      'Rib9_R',
      'Rib10_R',
      'Rib11_R',
      'Rib12_R',
    ],
    computedFrom: [
      'Rib1_R',
      'Rib2_R',
      'Rib3_R',
      'Rib4_R',
      'Rib5_R',
      'Rib6_R',
      'Rib7_R',
      'Rib8_R',
      'Rib9_R',
      'Rib10_R',
      'Rib11_R',
      'Rib12_R',
    ],
  },

  Rib1_R: {
    children: [
      'Rib1_R_sternal_end_complete',
      'Rib1_R_head_neck_complete',
    ],
    computedFrom: [
      'Rib1_R_sternal_end_complete',
      'Rib1_R_head_neck_complete',
      '__other__',
    ],
  },

  Rib2_R: {
    children: [
      'Rib2_R_sternal_end_complete',
      'Rib2_R_head_neck_complete',
    ],
    computedFrom: [
      'Rib2_R_sternal_end_complete',
      'Rib2_R_head_neck_complete',
      '__other__',
    ],
  },

  Rib3_R: {
    children: [
      'Rib3_R_sternal_end_complete',
      'Rib3_R_head_neck_complete',
    ],
    computedFrom: [
      'Rib3_R_sternal_end_complete',
      'Rib3_R_head_neck_complete',
      '__other__',
    ],
  },

  Rib4_R: {
    children: [
      'Rib4_R_sternal_end_complete',
      'Rib4_R_head_neck_complete',
    ],
    computedFrom: [
      'Rib4_R_sternal_end_complete',
      'Rib4_R_head_neck_complete',
      '__other__',
    ],
  },

  Rib5_R: {
    children: [
      'Rib5_R_sternal_end_complete',
      'Rib5_R_head_neck_complete',
    ],
    computedFrom: [
      'Rib5_R_sternal_end_complete',
      'Rib5_R_head_neck_complete',
      '__other__',
    ],
  },

  Rib6_R: {
    children: [
      'Rib6_R_sternal_end_complete',
      'Rib6_R_head_neck_complete',
    ],
    computedFrom: [
      'Rib6_R_sternal_end_complete',
      'Rib6_R_head_neck_complete',
      '__other__',
    ],
  },

  Rib7_R: {
    children: [
      'Rib7_R_sternal_end_complete',
      'Rib7_R_head_neck_complete',
    ],
    computedFrom: [
      'Rib7_R_sternal_end_complete',
      'Rib7_R_head_neck_complete',
      '__other__',
    ],
  },

  Rib8_R: {
    children: [
      'Rib8_R_sternal_end_complete',
      'Rib8_R_head_neck_complete',
    ],
    computedFrom: [
      'Rib8_R_sternal_end_complete',
      'Rib8_R_head_neck_complete',
      '__other__',
    ],
  },

  Rib9_R: {
    children: [
      'Rib9_R_sternal_end_complete',
      'Rib9_R_head_neck_complete',
    ],
    computedFrom: [
      'Rib9_R_sternal_end_complete',
      'Rib9_R_head_neck_complete',
      '__other__',
    ],
  },

  Rib10_R: {
    children: [
      'Rib10_R_sternal_end_complete',
      'Rib10_R_head_neck_complete',
    ],
    computedFrom: [
      'Rib10_R_sternal_end_complete',
      'Rib10_R_head_neck_complete',
      '__other__',
    ],
  },

  Rib11_R: {
    children: [
      'Rib11_R_sternal_end_complete',
      'Rib11_R_head_neck_complete',
    ],
    computedFrom: [
      'Rib11_R_sternal_end_complete',
      'Rib11_R_head_neck_complete',
      '__other__',
    ],
  },

  Rib12_R: {
    children: [
      'Rib12_R_sternal_end_complete',
      'Rib12_R_head_neck_complete',
    ],
    computedFrom: [
      'Rib12_R_sternal_end_complete',
      'Rib12_R_head_neck_complete',
      '__other__',
    ],
  },

  //

  Vertebrae_complete: {
    children: [
      'C1_complete',
      'C2_complete',
      'C3_complete',
      'C4_complete',
      'C5_complete',
      'C6_complete',
      'C7_complete',
      'T1_complete',
      'T2_complete',
      'T3_complete',
      'T4_complete',
      'T5_complete',
      'T6_complete',
      'T7_complete',
      'T8_complete',
      'T9_complete',
      'T10_complete',
      'T11_complete',
      'T12_complete',
      'L1_complete',
      'L2_complete',
      'L3_complete',
      'L4_complete',
      'L5_complete',
      'Sacrum_complete',
      'Coccyx_complete',
    ],
    computedFrom: [
      'C1_complete',
      'C2_complete',
      'C3_complete',
      'C4_complete',
      'C5_complete',
      'C6_complete',
      'C7_complete',
      'T1_complete',
      'T2_complete',
      'T3_complete',
      'T4_complete',
      'T5_complete',
      'T6_complete',
      'T7_complete',
      'T8_complete',
      'T9_complete',
      'T10_complete',
      'T11_complete',
      'T12_complete',
      'L1_complete',
      'L2_complete',
      'L3_complete',
      'L4_complete',
      'L5_complete',
      'Sacrum_complete',
      'Coccyx_complete',
    ],
  },

  C1_complete: {
    children: [
      'C1_L_arch',
      'C1_R_arch',
    ],
    computedFrom: [
      'C1_L_arch',
      'C1_R_arch',
      '__other__',
    ],
  },

  C2_complete: {
    children: [
      'C2_centrum',
      'C2_L_arch',
      'C2_R_arch',
    ],
    computedFrom: [
      'C2_centrum',
      'C2_L_arch',
      'C2_R_arch',
      '__other__',
    ],
  },

  C3_complete: {
    children: [
      'C3_centrum',
      'C3_L_arch',
      'C3_R_arch',
    ],
    computedFrom: [
      'C3_centrum',
      'C3_L_arch',
      'C3_R_arch',
      '__other__',
    ],
  },

  C4_complete: {
    children: [
      'C4_centrum',
      'C4_L_arch',
      'C4_R_arch',
    ],
    computedFrom: [
      'C4_centrum',
      'C4_L_arch',
      'C4_R_arch',
      '__other__',
    ],
  },

  C5_complete: {
    children: [
      'C5_centrum',
      'C5_L_arch',
      'C5_R_arch',
    ],
    computedFrom: [
      'C5_centrum',
      'C5_L_arch',
      'C5_R_arch',
      '__other__',
    ],
  },

  C6_complete: {
    children: [
      'C6_centrum',
      'C6_L_arch',
      'C6_R_arch',
    ],
    computedFrom: [
      'C6_centrum',
      'C6_L_arch',
      'C6_R_arch',
      '__other__',
    ],
  },

  C7_complete: {
    children: [
      'C7_centrum',
      'C7_L_arch',
      'C7_R_arch',
    ],
    computedFrom: [
      'C7_centrum',
      'C7_L_arch',
      'C7_R_arch',
      '__other__',
    ],
  },

  T1_complete: {
    children: [
      'T1_centrum',
      'T1_L_arch',
      'T1_R_arch',
    ],
    computedFrom: [
      'T1_centrum',
      'T1_L_arch',
      'T1_R_arch',
      '__other__',
    ],
  },

  T2_complete: {
    children: [
      'T2_centrum',
      'T2_L_arch',
      'T2_R_arch',
    ],
    computedFrom: [
      'T2_centrum',
      'T2_L_arch',
      'T2_R_arch',
      '__other__',
    ],
  },

  T3_complete: {
    children: [
      'T3_centrum',
      'T3_L_arch',
      'T3_R_arch',
    ],
    computedFrom: [
      'T3_centrum',
      'T3_L_arch',
      'T3_R_arch',
      '__other__',
    ],
  },

  T4_complete: {
    children: [
      'T4_centrum',
      'T4_L_arch',
      'T4_R_arch',
    ],
    computedFrom: [
      'T4_centrum',
      'T4_L_arch',
      'T4_R_arch',
      '__other__',
    ],
  },

  T5_complete: {
    children: [
      'T5_centrum',
      'T5_L_arch',
      'T5_R_arch',
    ],
    computedFrom: [
      'T5_centrum',
      'T5_L_arch',
      'T5_R_arch',
      '__other__',
    ],
  },

  T6_complete: {
    children: [
      'T6_centrum',
      'T6_L_arch',
      'T6_R_arch',
    ],
    computedFrom: [
      'T6_centrum',
      'T6_L_arch',
      'T6_R_arch',
      '__other__',
    ],
  },

  T7_complete: {
    children: [
      'T7_centrum',
      'T7_L_arch',
      'T7_R_arch',
    ],
    computedFrom: [
      'T7_centrum',
      'T7_L_arch',
      'T7_R_arch',
      '__other__',
    ],
  },

  T8_complete: {
    children: [
      'T8_centrum',
      'T8_L_arch',
      'T8_R_arch',
    ],
    computedFrom: [
      'T8_centrum',
      'T8_L_arch',
      'T8_R_arch',
      '__other__',
    ],
  },

  T9_complete: {
    children: [
      'T9_centrum',
      'T9_L_arch',
      'T9_R_arch',
    ],
    computedFrom: [
      'T9_centrum',
      'T9_L_arch',
      'T9_R_arch',
      '__other__',
    ],
  },

  T10_complete: {
    children: [
      'T10_centrum',
      'T10_L_arch',
      'T10_R_arch',
    ],
    computedFrom: [
      'T10_centrum',
      'T10_L_arch',
      'T10_R_arch',
      '__other__',
    ],
  },

  T11_complete: {
    children: [
      'T11_centrum',
      'T11_L_arch',
      'T11_R_arch',
    ],
    computedFrom: [
      'T11_centrum',
      'T11_L_arch',
      'T11_R_arch',
      '__other__',
    ],
  },

  T12_complete: {
    children: [
      'T12_centrum',
      'T12_L_arch',
      'T12_R_arch',
    ],
    computedFrom: [
      'T12_centrum',
      'T12_L_arch',
      'T12_R_arch',
      '__other__',
    ],
  },

  L1_complete: {
    children: [
      'L1_centrum',
      'L1_L_arch',
      'L1_R_arch',
    ],
    computedFrom: [
      'L1_centrum',
      'L1_L_arch',
      'L1_R_arch',
      '__other__',
    ],
  },

  L2_complete: {
    children: [
      'L2_centrum',
      'L2_L_arch',
      'L2_R_arch',
    ],
    computedFrom: [
      'L2_centrum',
      'L2_L_arch',
      'L2_R_arch',
      '__other__',
    ],
  },

  L3_complete: {
    children: [
      'L3_centrum',
      'L3_L_arch',
      'L3_R_arch',
    ],
    computedFrom: [
      'L3_centrum',
      'L3_L_arch',
      'L3_R_arch',
      '__other__',
    ],
  },

  L4_complete: {
    children: [
      'L4_centrum',
      'L4_L_arch',
      'L4_R_arch',
    ],
    computedFrom: [
      'L4_centrum',
      'L4_L_arch',
      'L4_R_arch',
      '__other__',
    ],
  },

  L5_complete: {
    children: [
      'L5_centrum',
      'L5_L_arch',
      'L5_R_arch',
    ],
    computedFrom: [
      'L5_centrum',
      'L5_L_arch',
      'L5_R_arch',
      '__other__',
    ],
  },

  Sacrum_complete: {
    children: [
      'Sacrum',
      'Sacrum_L_alae',
      'Sacrum_R_alae',
      'S1_complete',
      'S2_complete',
      'S3_complete',
      'S4_complete',
      'S5_complete',
    ],
    computedFrom: [
      'S1_complete',
      'S2_complete',
      'S3_complete',
      'S4_complete',
      'S5_complete',
    ],
  },

  Sacrum: {
    children: [
      'S1_centrum',
      'S2_centrum',
      'S3_centrum',
      'S4_centrum',
      'S5_centrum',
    ],
    computedFrom: [
      'S1_centrum',
      'S2_centrum',
      'S3_centrum',
      'S4_centrum',
      'S5_centrum',
    ],
  },

  Sacrum_L_alae: {
    children: [
      'S1_L_ala',
      'S2_L_ala',
      'S3_L_ala',
      'S4_L_ala',
      'S5_L_ala',
    ],
    computedFrom: [
      'S1_L_ala',
      'S2_L_ala',
      'S3_L_ala',
      'S4_L_ala',
      'S5_L_ala',
    ],
  },

  Sacrum_R_alae: {
    children: [
      'S1_R_ala',
      'S2_R_ala',
      'S3_R_ala',
      'S4_R_ala',
      'S5_R_ala',
    ],
    computedFrom: [
      'S1_R_ala',
      'S2_R_ala',
      'S3_R_ala',
      'S4_R_ala',
      'S5_R_ala',
    ],
  },

  S1_complete: {
    children: [
      'S1_centrum',
      'S1_L_ala',
      'S1_R_ala',
    ],
    computedFrom: [
      'S1_centrum',
      'S1_L_ala',
      'S1_R_ala',
      '__other__',
    ],
  },

  S2_complete: {
    children: [
      'S2_centrum',
      'S2_L_ala',
      'S2_R_ala',
    ],
    computedFrom: [
      'S2_centrum',
      'S2_L_ala',
      'S2_R_ala',
      '__other__',
    ],
  },

  S3_complete: {
    children: [
      'S3_centrum',
      'S3_L_ala',
      'S3_R_ala',
    ],
    computedFrom: [
      'S3_centrum',
      'S3_L_ala',
      'S3_R_ala',
      '__other__',
    ],
  },

  S4_complete: {
    children: [
      'S4_centrum',
      'S4_L_ala',
      'S4_R_ala',
    ],
    computedFrom: [
      'S4_centrum',
      'S4_L_ala',
      'S4_R_ala',
      '__other__',
    ],
  },

  S5_complete: {
    children: [
      'S5_centrum',
      'S5_L_ala',
      'S5_R_ala',
    ],
    computedFrom: [
      'S5_centrum',
      'S5_L_ala',
      'S5_R_ala',
      '__other__',
    ],
  },

  Coccyx_complete: {
    children: [
      'Coccyx',
    ],
    computedFrom: [
      'Coccyx',
    ],
  },
};

const parents = {};

Object.keys(relations).forEach((parentName) => {
  const { children } = relations[parentName];

  if (children) {
    children.forEach((childName) => {
      if (!parents[childName]) {
        parents[childName] = [];
      }

      parents[childName].push(parentName);
    });
  }
});

const allFieldsHaveValue = (data, names, value) => names.every((name) => data.get(name) === value);

const computeValue = (data, name) => {
  let value = data.get(name);

  if (name in relations) {
    const computedFromFields = relations[name].computedFrom;

    if (computedFromFields && computedFromFields.length > 0) {
      if (allFieldsHaveValue(data, computedFromFields, COMPLETE_VALUE)) {
        value = COMPLETE_VALUE;
      } else if (allFieldsHaveValue(data, computedFromFields, ABSENT_VALUE)) {
        value = ABSENT_VALUE;
      } else if (value === COMPLETE_VALUE || value === ABSENT_VALUE) {
        value = null;
      }
    }
  }

  return value;
};

// TODO: Move strings into messages.

export default (configContext) => {
  const {
    Immutable,
    React,
    Component,
    PropTypes,
  } = configContext.lib;

  const {
    pathPropType,
    getPath,
  } = configContext.pathHelpers;

  const {
    Button,
  } = configContext.inputComponents;

  const Radio = osteoRadioButton(configContext);
  const Checkbox = osteoCheckbox(configContext);

  const propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    name: PropTypes.string,
    parentPath: pathPropType,
    subpath: pathPropType,
    children: PropTypes.node,
    /* eslint-enable react/no-unused-prop-types */
    value: PropTypes.instanceOf(Immutable.Map),
    readOnly: PropTypes.bool,
    onCommit: PropTypes.func,
  };

  class OsteoInventoryInput extends Component {
    constructor() {
      super();

      this.handleChange = this.handleChange.bind(this);
      this.handleMarkAllAbsentButtonClick = this.handleMarkAllAbsentButtonClick.bind(this);
      this.handleMarkAllPresentButtonClick = this.handleMarkAllPresentButtonClick.bind(this);
      this.handleDeciduousDentZeroButtonClick = this.handleDeciduousDentZeroButtonClick.bind(this);
      this.handlePermanentDentZeroButtonClick = this.handlePermanentDentZeroButtonClick.bind(this);

      this.radioOrCheckboxFieldNames = {};
      this.textFieldNames = {};
    }

    setAllRadioValues(value) {
      const {
        value: data,
        onCommit,
      } = this.props;

      if (onCommit) {
        const nextData = data.withMutations((map) => {
          Object.keys(this.radioOrCheckboxFieldNames).forEach((name) => {
            map.set(name, value);
          });
        });

        onCommit(getPath(this.props), nextData);
      }
    }

    setAllTextValues(namePattern, value) {
      const {
        value: data,
        onCommit,
      } = this.props;

      if (onCommit) {
        const nextData = data.withMutations((map) => {
          Object
            .keys(this.textFieldNames)
            .filter((name) => namePattern.test(name))
            .forEach((name) => {
              map.set(name, value);
            });
        });

        onCommit(getPath(this.props), nextData);
      }
    }

    updateChildren(data, name, value) {
      let nextData = data;

      if (name in relations) {
        const { children } = relations[name];

        if (children && children.length > 0) {
          children.forEach((childName) => {
            if (!this.visitedFields[childName]) {
              nextData = nextData.set(childName, value);

              this.visitedFields[childName] = true;

              nextData = this.updateChildren(nextData, childName, value);
            }
          });
        }
      }

      return nextData;
    }

    updateParents(data, name) {
      let nextData = data;

      if (name in parents) {
        const parentNames = parents[name];

        // Update parents breadth-first.

        parentNames.forEach((parentName) => {
          if (this.visitedFields[parentName]) {
            return;
          }

          const value = computeValue(nextData, parentName);

          nextData = nextData.set(parentName, value);

          this.visitedFields[parentName] = true;

          if (value === COMPLETE_VALUE || value === ABSENT_VALUE) {
            nextData = this.updateChildren(nextData, parentName, value);
          }
        });

        parentNames.forEach((parentName) => {
          nextData = this.updateParents(nextData, parentName);
        });
      }

      return nextData;
    }

    handleChange(event) {
      const {
        nodeName,
        name,
        type,
        value,
        checked,
      } = event.target;

      const {
        onCommit,
        value: data,
      } = this.props;

      if (nodeName !== 'INPUT' || !onCommit) {
        return;
      }

      let nextValue;

      if (type === 'text' || (type === 'radio' && checked)) {
        nextValue = value;
      } else if (type === 'checkbox') {
        nextValue = checked ? value : null;
      }

      if (typeof nextValue === 'undefined') {
        return;
      }

      let nextData = data.set(name, nextValue);

      this.visitedFields = {};
      this.visitedFields[name] = true;

      if ((name in relations) && relations[name].markVisited) {
        relations[name].markVisited.forEach((markVisitedFieldName) => {
          this.visitedFields[markVisitedFieldName] = true;
        });
      }

      nextData = this.updateParents(nextData, name);

      if (nextValue === COMPLETE_VALUE || nextValue === ABSENT_VALUE || type === 'checkbox') {
        nextData = this.updateChildren(nextData, name, nextValue);
      }

      onCommit(getPath(this.props), nextData);
    }

    handleMarkAllAbsentButtonClick() {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure? This will erase all entered completeness data.')) {
        this.setAllRadioValues(ABSENT_VALUE);
      }
    }

    handleMarkAllPresentButtonClick() {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure? This will erase all entered completeness data.')) {
        this.setAllRadioValues(COMPLETE_VALUE);
      }
    }

    handleDeciduousDentZeroButtonClick() {
      this.setAllTextValues(/^Teeth_decid_[UL]/, '0');
    }

    handlePermanentDentZeroButtonClick() {
      this.setAllTextValues(/^Teeth_[UL]/, '0');
    }

    renderTemplate() {
      const {
        readOnly,
      } = this.props;

      let buttonBar;
      let permanentDentZeroButton;
      let deciduousDentZeroButton;

      if (!readOnly) {
        buttonBar = (
          <div className="osteo-buttonbar">
            <Button onClick={this.handleMarkAllPresentButtonClick}>Mark all present</Button>
            <Button onClick={this.handleMarkAllAbsentButtonClick}>Mark all absent</Button>
          </div>
        );

        permanentDentZeroButton = (
          <Button
            className="zeroButton"
            onClick={this.handlePermanentDentZeroButtonClick}
          >
            0
          </Button>
        );

        deciduousDentZeroButton = (
          <Button
            className="zeroButton"
            onClick={this.handleDeciduousDentZeroButtonClick}
          >
            0
          </Button>
        );
      }

      // FIXME: Properly associate labels with all controls.
      /* eslint-disable
         jsx-a11y/control-has-associated-label,
         jsx-a11y/label-has-associated-control */
      return (
        <div className="osteo-form">
          {buttonBar}

          <div className="osteo-row">
            <div className="osteo-column">
              <table className="osteo">
                <thead className="flat-label">
                  <tr className="sides">
                    <th className="left" colSpan="5">Left/unpaired</th>
                    <th colSpan="3" />
                    <th className="right" colSpan="5">Right</th>
                  </tr>
                  <tr className="labels">
                    <th />
                    <th><span>&lt;25%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>&gt;75%</span></th>
                    <th className="complete"><span>compl.</span></th>
                    <th />
                    <th className="complete"><span>compl.</span></th>
                    <th><span>&gt;75%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>&lt;25%</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Radio name="Cranium" value="0" /></td>
                    <td><Radio name="Cranium" value="3" /></td>
                    <td><Radio name="Cranium" value="2b" /></td>
                    <td><Radio name="Cranium" value="2a" /></td>
                    <td><Radio name="Cranium" value="1" /></td>
                    <td><Radio name="Cranium" value="C" /></td>
                    <td className="segment">Cranium</td>
                  </tr>
                  <tr>
                    <td><Radio name="Frontal_L" value="0" /></td>
                    <td><Radio name="Frontal_L" value="3" /></td>
                    <td><Radio name="Frontal_L" value="2b" /></td>
                    <td><Radio name="Frontal_L" value="2a" /></td>
                    <td><Radio name="Frontal_L" value="1" /></td>
                    <td><Radio name="Frontal_L" value="C" /></td>
                    <td className="segment">Frontal</td>
                    <td><Radio name="Frontal_R" value="C" /></td>
                    <td><Radio name="Frontal_R" value="1" /></td>
                    <td><Radio name="Frontal_R" value="2a" /></td>
                    <td><Radio name="Frontal_R" value="2b" /></td>
                    <td><Radio name="Frontal_R" value="3" /></td>
                    <td><Radio name="Frontal_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Occipital" value="0" /></td>
                    <td><Radio name="Occipital" value="3" /></td>
                    <td><Radio name="Occipital" value="2b" /></td>
                    <td><Radio name="Occipital" value="2a" /></td>
                    <td><Radio name="Occipital" value="1" /></td>
                    <td><Radio name="Occipital" value="C" /></td>
                    <td className="segment">Occipital</td>
                  </tr>
                  <tr>
                    <td><Radio name="Occipital_pars_basilaris" value="0" /></td>
                    <td><Radio name="Occipital_pars_basilaris" value="3" /></td>
                    <td><Radio name="Occipital_pars_basilaris" value="2b" /></td>
                    <td><Radio name="Occipital_pars_basilaris" value="2a" /></td>
                    <td><Radio name="Occipital_pars_basilaris" value="1" /></td>
                    <td><Radio name="Occipital_pars_basilaris" value="C" /></td>
                    <td className="segment">Pars basilaris</td>
                  </tr>
                  <tr>
                    <td><Radio name="Occipital_L_pars_lateralis" value="0" /></td>
                    <td><Radio name="Occipital_L_pars_lateralis" value="3" /></td>
                    <td><Radio name="Occipital_L_pars_lateralis" value="2b" /></td>
                    <td><Radio name="Occipital_L_pars_lateralis" value="2a" /></td>
                    <td><Radio name="Occipital_L_pars_lateralis" value="1" /></td>
                    <td><Radio name="Occipital_L_pars_lateralis" value="C" /></td>
                    <td className="segment">Pars lateralis</td>
                    <td><Radio name="Occipital_R_pars_lateralis" value="C" /></td>
                    <td><Radio name="Occipital_R_pars_lateralis" value="1" /></td>
                    <td><Radio name="Occipital_R_pars_lateralis" value="2a" /></td>
                    <td><Radio name="Occipital_R_pars_lateralis" value="2b" /></td>
                    <td><Radio name="Occipital_R_pars_lateralis" value="3" /></td>
                    <td><Radio name="Occipital_R_pars_lateralis" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Sphenoid" value="0" /></td>
                    <td><Radio name="Sphenoid" value="3" /></td>
                    <td><Radio name="Sphenoid" value="2b" /></td>
                    <td><Radio name="Sphenoid" value="2a" /></td>
                    <td><Radio name="Sphenoid" value="1" /></td>
                    <td><Radio name="Sphenoid" value="C" /></td>
                    <td className="segment">Sphenoid</td>
                  </tr>
                  <tr>
                    <td><Radio name="Vomer" value="0" /></td>
                    <td><Radio name="Vomer" value="3" /></td>
                    <td><Radio name="Vomer" value="2b" /></td>
                    <td><Radio name="Vomer" value="2a" /></td>
                    <td><Radio name="Vomer" value="1" /></td>
                    <td><Radio name="Vomer" value="C" /></td>
                    <td className="segment">Vomer</td>
                  </tr>
                  <tr>
                    <td><Radio name="Ethmoid" value="0" /></td>
                    <td><Radio name="Ethmoid" value="3" /></td>
                    <td><Radio name="Ethmoid" value="2b" /></td>
                    <td><Radio name="Ethmoid" value="2a" /></td>
                    <td><Radio name="Ethmoid" value="1" /></td>
                    <td><Radio name="Ethmoid" value="C" /></td>
                    <td className="segment">Ethmoid</td>
                  </tr>
                  <tr>
                    <td><Radio name="Parietal_L" value="0" /></td>
                    <td><Radio name="Parietal_L" value="3" /></td>
                    <td><Radio name="Parietal_L" value="2b" /></td>
                    <td><Radio name="Parietal_L" value="2a" /></td>
                    <td><Radio name="Parietal_L" value="1" /></td>
                    <td><Radio name="Parietal_L" value="C" /></td>
                    <td className="segment">Parietal</td>
                    <td><Radio name="Parietal_R" value="C" /></td>
                    <td><Radio name="Parietal_R" value="1" /></td>
                    <td><Radio name="Parietal_R" value="2a" /></td>
                    <td><Radio name="Parietal_R" value="2b" /></td>
                    <td><Radio name="Parietal_R" value="3" /></td>
                    <td><Radio name="Parietal_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Temporal_L" value="0" /></td>
                    <td><Radio name="Temporal_L" value="3" /></td>
                    <td><Radio name="Temporal_L" value="2b" /></td>
                    <td><Radio name="Temporal_L" value="2a" /></td>
                    <td><Radio name="Temporal_L" value="1" /></td>
                    <td><Radio name="Temporal_L" value="C" /></td>
                    <td className="segment">Temporal</td>
                    <td><Radio name="Temporal_R" value="C" /></td>
                    <td><Radio name="Temporal_R" value="1" /></td>
                    <td><Radio name="Temporal_R" value="2a" /></td>
                    <td><Radio name="Temporal_R" value="2b" /></td>
                    <td><Radio name="Temporal_R" value="3" /></td>
                    <td><Radio name="Temporal_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Maxilla_L" value="0" /></td>
                    <td><Radio name="Maxilla_L" value="3" /></td>
                    <td><Radio name="Maxilla_L" value="2b" /></td>
                    <td><Radio name="Maxilla_L" value="2a" /></td>
                    <td><Radio name="Maxilla_L" value="1" /></td>
                    <td><Radio name="Maxilla_L" value="C" /></td>
                    <td className="segment">Maxilla</td>
                    <td><Radio name="Maxilla_R" value="C" /></td>
                    <td><Radio name="Maxilla_R" value="1" /></td>
                    <td><Radio name="Maxilla_R" value="2a" /></td>
                    <td><Radio name="Maxilla_R" value="2b" /></td>
                    <td><Radio name="Maxilla_R" value="3" /></td>
                    <td><Radio name="Maxilla_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Nasal_L" value="0" /></td>
                    <td><Radio name="Nasal_L" value="3" /></td>
                    <td><Radio name="Nasal_L" value="2b" /></td>
                    <td><Radio name="Nasal_L" value="2a" /></td>
                    <td><Radio name="Nasal_L" value="1" /></td>
                    <td><Radio name="Nasal_L" value="C" /></td>
                    <td className="segment">Nasal</td>
                    <td><Radio name="Nasal_R" value="C" /></td>
                    <td><Radio name="Nasal_R" value="1" /></td>
                    <td><Radio name="Nasal_R" value="2a" /></td>
                    <td><Radio name="Nasal_R" value="2b" /></td>
                    <td><Radio name="Nasal_R" value="3" /></td>
                    <td><Radio name="Nasal_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Zygomatic_L" value="0" /></td>
                    <td><Radio name="Zygomatic_L" value="3" /></td>
                    <td><Radio name="Zygomatic_L" value="2b" /></td>
                    <td><Radio name="Zygomatic_L" value="2a" /></td>
                    <td><Radio name="Zygomatic_L" value="1" /></td>
                    <td><Radio name="Zygomatic_L" value="C" /></td>
                    <td className="segment">Zygomatic</td>
                    <td><Radio name="Zygomatic_R" value="C" /></td>
                    <td><Radio name="Zygomatic_R" value="1" /></td>
                    <td><Radio name="Zygomatic_R" value="2a" /></td>
                    <td><Radio name="Zygomatic_R" value="2b" /></td>
                    <td><Radio name="Zygomatic_R" value="3" /></td>
                    <td><Radio name="Zygomatic_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Lacrimal_L" value="0" /></td>
                    <td><Radio name="Lacrimal_L" value="3" /></td>
                    <td><Radio name="Lacrimal_L" value="2b" /></td>
                    <td><Radio name="Lacrimal_L" value="2a" /></td>
                    <td><Radio name="Lacrimal_L" value="1" /></td>
                    <td><Radio name="Lacrimal_L" value="C" /></td>
                    <td className="segment">Lacrimal</td>
                    <td><Radio name="Lacrimal_R" value="C" /></td>
                    <td><Radio name="Lacrimal_R" value="1" /></td>
                    <td><Radio name="Lacrimal_R" value="2a" /></td>
                    <td><Radio name="Lacrimal_R" value="2b" /></td>
                    <td><Radio name="Lacrimal_R" value="3" /></td>
                    <td><Radio name="Lacrimal_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Palatine_L" value="0" /></td>
                    <td><Radio name="Palatine_L" value="3" /></td>
                    <td><Radio name="Palatine_L" value="2b" /></td>
                    <td><Radio name="Palatine_L" value="2a" /></td>
                    <td><Radio name="Palatine_L" value="1" /></td>
                    <td><Radio name="Palatine_L" value="C" /></td>
                    <td className="segment">Palatine</td>
                    <td><Radio name="Palatine_R" value="C" /></td>
                    <td><Radio name="Palatine_R" value="1" /></td>
                    <td><Radio name="Palatine_R" value="2a" /></td>
                    <td><Radio name="Palatine_R" value="2b" /></td>
                    <td><Radio name="Palatine_R" value="3" /></td>
                    <td><Radio name="Palatine_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Mandible_L" value="0" /></td>
                    <td><Radio name="Mandible_L" value="3" /></td>
                    <td><Radio name="Mandible_L" value="2b" /></td>
                    <td><Radio name="Mandible_L" value="2a" /></td>
                    <td><Radio name="Mandible_L" value="1" /></td>
                    <td><Radio name="Mandible_L" value="C" /></td>
                    <td className="segment">Mandible</td>
                    <td><Radio name="Mandible_R" value="C" /></td>
                    <td><Radio name="Mandible_R" value="1" /></td>
                    <td><Radio name="Mandible_R" value="2a" /></td>
                    <td><Radio name="Mandible_R" value="2b" /></td>
                    <td><Radio name="Mandible_R" value="3" /></td>
                    <td><Radio name="Mandible_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Orbit_L" value="0" /></td>
                    <td><Radio name="Orbit_L" value="3" /></td>
                    <td><Radio name="Orbit_L" value="2b" /></td>
                    <td><Radio name="Orbit_L" value="2a" /></td>
                    <td><Radio name="Orbit_L" value="1" /></td>
                    <td><Radio name="Orbit_L" value="C" /></td>
                    <td className="segment">Orbit</td>
                    <td><Radio name="Orbit_R" value="C" /></td>
                    <td><Radio name="Orbit_R" value="1" /></td>
                    <td><Radio name="Orbit_R" value="2a" /></td>
                    <td><Radio name="Orbit_R" value="2b" /></td>
                    <td><Radio name="Orbit_R" value="3" /></td>
                    <td><Radio name="Orbit_R" value="0" /></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td><Radio name="Hyoid" value="0" /></td>
                    <td><Radio name="Hyoid" value="3" /></td>
                    <td><Radio name="Hyoid" value="2b" /></td>
                    <td><Radio name="Hyoid" value="2a" /></td>
                    <td><Radio name="Hyoid" value="1" /></td>
                    <td><Radio name="Hyoid" value="C" /></td>
                    <td className="segment">Hyoid</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="osteo-column">
              <table className="osteo">
                <thead>
                  <tr className="sides">
                    <th className="left" colSpan="5">Left</th>
                    <th colSpan="3" />
                    <th className="right" colSpan="5">Right</th>
                  </tr>
                  <tr className="labels">
                    <th />
                    <th><span>&lt;25%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>&gt;75%</span></th>
                    <th className="complete"><span>compl.</span></th>
                    <th />
                    <th className="complete"><span>compl.</span></th>
                    <th><span>&gt;75%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>&lt;25%</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Radio name="Humerus_L_complete" value="0" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Humerus_L_complete" value="C" /></td>
                    <td className="bone">Humerus</td>
                    <td><Radio name="Humerus_R_complete" value="C" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Humerus_R_complete" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Humerus_L_JS_P" value="0" /></td>
                    <td><Radio name="Humerus_L_JS_P" value="3" /></td>
                    <td><Radio name="Humerus_L_JS_P" value="2b" /></td>
                    <td><Radio name="Humerus_L_JS_P" value="2a" /></td>
                    <td><Radio name="Humerus_L_JS_P" value="1" /></td>
                    <td><Radio name="Humerus_L_JS_P" value="C" /></td>
                    <td className="segment">Prox. JS</td>
                    <td><Radio name="Humerus_R_JS_P" value="C" /></td>
                    <td><Radio name="Humerus_R_JS_P" value="1" /></td>
                    <td><Radio name="Humerus_R_JS_P" value="2a" /></td>
                    <td><Radio name="Humerus_R_JS_P" value="2b" /></td>
                    <td><Radio name="Humerus_R_JS_P" value="3" /></td>
                    <td><Radio name="Humerus_R_JS_P" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Humerus_L_shaft_P" value="0" /></td>
                    <td><Radio name="Humerus_L_shaft_P" value="3" /></td>
                    <td><Radio name="Humerus_L_shaft_P" value="2b" /></td>
                    <td><Radio name="Humerus_L_shaft_P" value="2a" /></td>
                    <td><Radio name="Humerus_L_shaft_P" value="1" /></td>
                    <td><Radio name="Humerus_L_shaft_P" value="C" /></td>
                    <td className="segment">Pr. 1/3 shaft</td>
                    <td><Radio name="Humerus_R_shaft_P" value="C" /></td>
                    <td><Radio name="Humerus_R_shaft_P" value="1" /></td>
                    <td><Radio name="Humerus_R_shaft_P" value="2a" /></td>
                    <td><Radio name="Humerus_R_shaft_P" value="2b" /></td>
                    <td><Radio name="Humerus_R_shaft_P" value="3" /></td>
                    <td><Radio name="Humerus_R_shaft_P" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Humerus_L_shaft_M" value="0" /></td>
                    <td><Radio name="Humerus_L_shaft_M" value="3" /></td>
                    <td><Radio name="Humerus_L_shaft_M" value="2b" /></td>
                    <td><Radio name="Humerus_L_shaft_M" value="2a" /></td>
                    <td><Radio name="Humerus_L_shaft_M" value="1" /></td>
                    <td><Radio name="Humerus_L_shaft_M" value="C" /></td>
                    <td className="segment">Md. 1/3 shaft</td>
                    <td><Radio name="Humerus_R_shaft_M" value="C" /></td>
                    <td><Radio name="Humerus_R_shaft_M" value="1" /></td>
                    <td><Radio name="Humerus_R_shaft_M" value="2a" /></td>
                    <td><Radio name="Humerus_R_shaft_M" value="2b" /></td>
                    <td><Radio name="Humerus_R_shaft_M" value="3" /></td>
                    <td><Radio name="Humerus_R_shaft_M" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Humerus_L_shaft_D" value="0" /></td>
                    <td><Radio name="Humerus_L_shaft_D" value="3" /></td>
                    <td><Radio name="Humerus_L_shaft_D" value="2b" /></td>
                    <td><Radio name="Humerus_L_shaft_D" value="2a" /></td>
                    <td><Radio name="Humerus_L_shaft_D" value="1" /></td>
                    <td><Radio name="Humerus_L_shaft_D" value="C" /></td>
                    <td className="segment">Ds. 1/3 shaft</td>
                    <td><Radio name="Humerus_R_shaft_D" value="C" /></td>
                    <td><Radio name="Humerus_R_shaft_D" value="1" /></td>
                    <td><Radio name="Humerus_R_shaft_D" value="2a" /></td>
                    <td><Radio name="Humerus_R_shaft_D" value="2b" /></td>
                    <td><Radio name="Humerus_R_shaft_D" value="3" /></td>
                    <td><Radio name="Humerus_R_shaft_D" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Humerus_L_JS_D" value="0" /></td>
                    <td><Radio name="Humerus_L_JS_D" value="3" /></td>
                    <td><Radio name="Humerus_L_JS_D" value="2b" /></td>
                    <td><Radio name="Humerus_L_JS_D" value="2a" /></td>
                    <td><Radio name="Humerus_L_JS_D" value="1" /></td>
                    <td><Radio name="Humerus_L_JS_D" value="C" /></td>
                    <td className="segment">Dist. JS</td>
                    <td><Radio name="Humerus_R_JS_D" value="C" /></td>
                    <td><Radio name="Humerus_R_JS_D" value="1" /></td>
                    <td><Radio name="Humerus_R_JS_D" value="2a" /></td>
                    <td><Radio name="Humerus_R_JS_D" value="2b" /></td>
                    <td><Radio name="Humerus_R_JS_D" value="3" /></td>
                    <td><Radio name="Humerus_R_JS_D" value="0" /></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td><Radio name="Radius_L_complete" value="0" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Radius_L_complete" value="C" /></td>
                    <td className="bone">Radius</td>
                    <td><Radio name="Radius_R_complete" value="C" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Radius_R_complete" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Radius_L_JS_P" value="0" /></td>
                    <td><Radio name="Radius_L_JS_P" value="3" /></td>
                    <td><Radio name="Radius_L_JS_P" value="2b" /></td>
                    <td><Radio name="Radius_L_JS_P" value="2a" /></td>
                    <td><Radio name="Radius_L_JS_P" value="1" /></td>
                    <td><Radio name="Radius_L_JS_P" value="C" /></td>
                    <td className="segment">Prox. JS</td>
                    <td><Radio name="Radius_R_JS_P" value="C" /></td>
                    <td><Radio name="Radius_R_JS_P" value="1" /></td>
                    <td><Radio name="Radius_R_JS_P" value="2a" /></td>
                    <td><Radio name="Radius_R_JS_P" value="2b" /></td>
                    <td><Radio name="Radius_R_JS_P" value="3" /></td>
                    <td><Radio name="Radius_R_JS_P" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Radius_L_shaft_P" value="0" /></td>
                    <td><Radio name="Radius_L_shaft_P" value="3" /></td>
                    <td><Radio name="Radius_L_shaft_P" value="2b" /></td>
                    <td><Radio name="Radius_L_shaft_P" value="2a" /></td>
                    <td><Radio name="Radius_L_shaft_P" value="1" /></td>
                    <td><Radio name="Radius_L_shaft_P" value="C" /></td>
                    <td className="segment">Pr. 1/3 shaft</td>
                    <td><Radio name="Radius_R_shaft_P" value="C" /></td>
                    <td><Radio name="Radius_R_shaft_P" value="1" /></td>
                    <td><Radio name="Radius_R_shaft_P" value="2a" /></td>
                    <td><Radio name="Radius_R_shaft_P" value="2b" /></td>
                    <td><Radio name="Radius_R_shaft_P" value="3" /></td>
                    <td><Radio name="Radius_R_shaft_P" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Radius_L_shaft_M" value="0" /></td>
                    <td><Radio name="Radius_L_shaft_M" value="3" /></td>
                    <td><Radio name="Radius_L_shaft_M" value="2b" /></td>
                    <td><Radio name="Radius_L_shaft_M" value="2a" /></td>
                    <td><Radio name="Radius_L_shaft_M" value="1" /></td>
                    <td><Radio name="Radius_L_shaft_M" value="C" /></td>
                    <td className="segment">Md. 1/3 shaft</td>
                    <td><Radio name="Radius_R_shaft_M" value="C" /></td>
                    <td><Radio name="Radius_R_shaft_M" value="1" /></td>
                    <td><Radio name="Radius_R_shaft_M" value="2a" /></td>
                    <td><Radio name="Radius_R_shaft_M" value="2b" /></td>
                    <td><Radio name="Radius_R_shaft_M" value="3" /></td>
                    <td><Radio name="Radius_R_shaft_M" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Radius_L_shaft_D" value="0" /></td>
                    <td><Radio name="Radius_L_shaft_D" value="3" /></td>
                    <td><Radio name="Radius_L_shaft_D" value="2b" /></td>
                    <td><Radio name="Radius_L_shaft_D" value="2a" /></td>
                    <td><Radio name="Radius_L_shaft_D" value="1" /></td>
                    <td><Radio name="Radius_L_shaft_D" value="C" /></td>
                    <td className="segment">Ds. 1/3 shaft</td>
                    <td><Radio name="Radius_R_shaft_D" value="C" /></td>
                    <td><Radio name="Radius_R_shaft_D" value="1" /></td>
                    <td><Radio name="Radius_R_shaft_D" value="2a" /></td>
                    <td><Radio name="Radius_R_shaft_D" value="2b" /></td>
                    <td><Radio name="Radius_R_shaft_D" value="3" /></td>
                    <td><Radio name="Radius_R_shaft_D" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Radius_L_JS_D" value="0" /></td>
                    <td><Radio name="Radius_L_JS_D" value="3" /></td>
                    <td><Radio name="Radius_L_JS_D" value="2b" /></td>
                    <td><Radio name="Radius_L_JS_D" value="2a" /></td>
                    <td><Radio name="Radius_L_JS_D" value="1" /></td>
                    <td><Radio name="Radius_L_JS_D" value="C" /></td>
                    <td className="segment">Dist. JS</td>
                    <td><Radio name="Radius_R_JS_D" value="C" /></td>
                    <td><Radio name="Radius_R_JS_D" value="1" /></td>
                    <td><Radio name="Radius_R_JS_D" value="2a" /></td>
                    <td><Radio name="Radius_R_JS_D" value="2b" /></td>
                    <td><Radio name="Radius_R_JS_D" value="3" /></td>
                    <td><Radio name="Radius_R_JS_D" value="0" /></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td><Radio name="Ulna_L_complete" value="0" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Ulna_L_complete" value="C" /></td>
                    <td className="bone">Ulna</td>
                    <td><Radio name="Ulna_R_complete" value="C" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Ulna_R_complete" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Ulna_L_JS_P" value="0" /></td>
                    <td><Radio name="Ulna_L_JS_P" value="3" /></td>
                    <td><Radio name="Ulna_L_JS_P" value="2b" /></td>
                    <td><Radio name="Ulna_L_JS_P" value="2a" /></td>
                    <td><Radio name="Ulna_L_JS_P" value="1" /></td>
                    <td><Radio name="Ulna_L_JS_P" value="C" /></td>
                    <td className="segment">Prox. JS</td>
                    <td><Radio name="Ulna_R_JS_P" value="C" /></td>
                    <td><Radio name="Ulna_R_JS_P" value="1" /></td>
                    <td><Radio name="Ulna_R_JS_P" value="2a" /></td>
                    <td><Radio name="Ulna_R_JS_P" value="2b" /></td>
                    <td><Radio name="Ulna_R_JS_P" value="3" /></td>
                    <td><Radio name="Ulna_R_JS_P" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Ulna_L_shaft_P" value="0" /></td>
                    <td><Radio name="Ulna_L_shaft_P" value="3" /></td>
                    <td><Radio name="Ulna_L_shaft_P" value="2b" /></td>
                    <td><Radio name="Ulna_L_shaft_P" value="2a" /></td>
                    <td><Radio name="Ulna_L_shaft_P" value="1" /></td>
                    <td><Radio name="Ulna_L_shaft_P" value="C" /></td>
                    <td className="segment">Pr. 1/3 shaft</td>
                    <td><Radio name="Ulna_R_shaft_P" value="C" /></td>
                    <td><Radio name="Ulna_R_shaft_P" value="1" /></td>
                    <td><Radio name="Ulna_R_shaft_P" value="2a" /></td>
                    <td><Radio name="Ulna_R_shaft_P" value="2b" /></td>
                    <td><Radio name="Ulna_R_shaft_P" value="3" /></td>
                    <td><Radio name="Ulna_R_shaft_P" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Ulna_L_shaft_M" value="0" /></td>
                    <td><Radio name="Ulna_L_shaft_M" value="3" /></td>
                    <td><Radio name="Ulna_L_shaft_M" value="2b" /></td>
                    <td><Radio name="Ulna_L_shaft_M" value="2a" /></td>
                    <td><Radio name="Ulna_L_shaft_M" value="1" /></td>
                    <td><Radio name="Ulna_L_shaft_M" value="C" /></td>
                    <td className="segment">Md. 1/3 shaft</td>
                    <td><Radio name="Ulna_R_shaft_M" value="C" /></td>
                    <td><Radio name="Ulna_R_shaft_M" value="1" /></td>
                    <td><Radio name="Ulna_R_shaft_M" value="2a" /></td>
                    <td><Radio name="Ulna_R_shaft_M" value="2b" /></td>
                    <td><Radio name="Ulna_R_shaft_M" value="3" /></td>
                    <td><Radio name="Ulna_R_shaft_M" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Ulna_L_shaft_D" value="0" /></td>
                    <td><Radio name="Ulna_L_shaft_D" value="3" /></td>
                    <td><Radio name="Ulna_L_shaft_D" value="2b" /></td>
                    <td><Radio name="Ulna_L_shaft_D" value="2a" /></td>
                    <td><Radio name="Ulna_L_shaft_D" value="1" /></td>
                    <td><Radio name="Ulna_L_shaft_D" value="C" /></td>
                    <td className="segment">Ds. 1/3 shaft</td>
                    <td><Radio name="Ulna_R_shaft_D" value="C" /></td>
                    <td><Radio name="Ulna_R_shaft_D" value="1" /></td>
                    <td><Radio name="Ulna_R_shaft_D" value="2a" /></td>
                    <td><Radio name="Ulna_R_shaft_D" value="2b" /></td>
                    <td><Radio name="Ulna_R_shaft_D" value="3" /></td>
                    <td><Radio name="Ulna_R_shaft_D" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Ulna_L_JS_D" value="0" /></td>
                    <td><Radio name="Ulna_L_JS_D" value="3" /></td>
                    <td><Radio name="Ulna_L_JS_D" value="2b" /></td>
                    <td><Radio name="Ulna_L_JS_D" value="2a" /></td>
                    <td><Radio name="Ulna_L_JS_D" value="1" /></td>
                    <td><Radio name="Ulna_L_JS_D" value="C" /></td>
                    <td className="segment">Dist. JS</td>
                    <td><Radio name="Ulna_R_JS_D" value="C" /></td>
                    <td><Radio name="Ulna_R_JS_D" value="1" /></td>
                    <td><Radio name="Ulna_R_JS_D" value="2a" /></td>
                    <td><Radio name="Ulna_R_JS_D" value="2b" /></td>
                    <td><Radio name="Ulna_R_JS_D" value="3" /></td>
                    <td><Radio name="Ulna_R_JS_D" value="0" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="osteo-column">
              <table className="osteo">
                <thead>
                  <tr className="sides">
                    <th className="left" colSpan="5">Left</th>
                    <th colSpan="3" />
                    <th className="right" colSpan="5">Right</th>
                  </tr>
                  <tr className="labels">
                    <th />
                    <th><span>&lt;25%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>&gt;75%</span></th>
                    <th className="complete"><span>compl.</span></th>
                    <th />
                    <th className="complete"><span>compl.</span></th>
                    <th><span>&gt;75%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>&lt;25%</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Radio name="Femur_L_complete" value="0" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Femur_L_complete" value="C" /></td>
                    <td className="bone">Femur</td>
                    <td><Radio name="Femur_R_complete" value="C" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Femur_R_complete" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Femur_L_JS_P" value="0" /></td>
                    <td><Radio name="Femur_L_JS_P" value="3" /></td>
                    <td><Radio name="Femur_L_JS_P" value="2b" /></td>
                    <td><Radio name="Femur_L_JS_P" value="2a" /></td>
                    <td><Radio name="Femur_L_JS_P" value="1" /></td>
                    <td><Radio name="Femur_L_JS_P" value="C" /></td>
                    <td className="segment">Prox. JS</td>
                    <td><Radio name="Femur_R_JS_P" value="C" /></td>
                    <td><Radio name="Femur_R_JS_P" value="1" /></td>
                    <td><Radio name="Femur_R_JS_P" value="2a" /></td>
                    <td><Radio name="Femur_R_JS_P" value="2b" /></td>
                    <td><Radio name="Femur_R_JS_P" value="3" /></td>
                    <td><Radio name="Femur_R_JS_P" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Femur_L_shaft_P" value="0" /></td>
                    <td><Radio name="Femur_L_shaft_P" value="3" /></td>
                    <td><Radio name="Femur_L_shaft_P" value="2b" /></td>
                    <td><Radio name="Femur_L_shaft_P" value="2a" /></td>
                    <td><Radio name="Femur_L_shaft_P" value="1" /></td>
                    <td><Radio name="Femur_L_shaft_P" value="C" /></td>
                    <td className="segment">Pr. 1/3 shaft</td>
                    <td><Radio name="Femur_R_shaft_P" value="C" /></td>
                    <td><Radio name="Femur_R_shaft_P" value="1" /></td>
                    <td><Radio name="Femur_R_shaft_P" value="2a" /></td>
                    <td><Radio name="Femur_R_shaft_P" value="2b" /></td>
                    <td><Radio name="Femur_R_shaft_P" value="3" /></td>
                    <td><Radio name="Femur_R_shaft_P" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Femur_L_shaft_M" value="0" /></td>
                    <td><Radio name="Femur_L_shaft_M" value="3" /></td>
                    <td><Radio name="Femur_L_shaft_M" value="2b" /></td>
                    <td><Radio name="Femur_L_shaft_M" value="2a" /></td>
                    <td><Radio name="Femur_L_shaft_M" value="1" /></td>
                    <td><Radio name="Femur_L_shaft_M" value="C" /></td>
                    <td className="segment">Md. 1/3 shaft</td>
                    <td><Radio name="Femur_R_shaft_M" value="C" /></td>
                    <td><Radio name="Femur_R_shaft_M" value="1" /></td>
                    <td><Radio name="Femur_R_shaft_M" value="2a" /></td>
                    <td><Radio name="Femur_R_shaft_M" value="2b" /></td>
                    <td><Radio name="Femur_R_shaft_M" value="3" /></td>
                    <td><Radio name="Femur_R_shaft_M" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Femur_L_shaft_D" value="0" /></td>
                    <td><Radio name="Femur_L_shaft_D" value="3" /></td>
                    <td><Radio name="Femur_L_shaft_D" value="2b" /></td>
                    <td><Radio name="Femur_L_shaft_D" value="2a" /></td>
                    <td><Radio name="Femur_L_shaft_D" value="1" /></td>
                    <td><Radio name="Femur_L_shaft_D" value="C" /></td>
                    <td className="segment">Ds. 1/3 shaft</td>
                    <td><Radio name="Femur_R_shaft_D" value="C" /></td>
                    <td><Radio name="Femur_R_shaft_D" value="1" /></td>
                    <td><Radio name="Femur_R_shaft_D" value="2a" /></td>
                    <td><Radio name="Femur_R_shaft_D" value="2b" /></td>
                    <td><Radio name="Femur_R_shaft_D" value="3" /></td>
                    <td><Radio name="Femur_R_shaft_D" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Femur_L_JS_D" value="0" /></td>
                    <td><Radio name="Femur_L_JS_D" value="3" /></td>
                    <td><Radio name="Femur_L_JS_D" value="2b" /></td>
                    <td><Radio name="Femur_L_JS_D" value="2a" /></td>
                    <td><Radio name="Femur_L_JS_D" value="1" /></td>
                    <td><Radio name="Femur_L_JS_D" value="C" /></td>
                    <td className="segment">Dist. JS</td>
                    <td><Radio name="Femur_R_JS_D" value="C" /></td>
                    <td><Radio name="Femur_R_JS_D" value="1" /></td>
                    <td><Radio name="Femur_R_JS_D" value="2a" /></td>
                    <td><Radio name="Femur_R_JS_D" value="2b" /></td>
                    <td><Radio name="Femur_R_JS_D" value="3" /></td>
                    <td><Radio name="Femur_R_JS_D" value="0" /></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td><Radio name="Tibia_L_complete" value="0" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Tibia_L_complete" value="C" /></td>
                    <td className="bone">Tibia</td>
                    <td><Radio name="Tibia_R_complete" value="C" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Tibia_R_complete" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Tibia_L_JS_P" value="0" /></td>
                    <td><Radio name="Tibia_L_JS_P" value="3" /></td>
                    <td><Radio name="Tibia_L_JS_P" value="2b" /></td>
                    <td><Radio name="Tibia_L_JS_P" value="2a" /></td>
                    <td><Radio name="Tibia_L_JS_P" value="1" /></td>
                    <td><Radio name="Tibia_L_JS_P" value="C" /></td>
                    <td className="segment">Prox. JS</td>
                    <td><Radio name="Tibia_R_JS_P" value="C" /></td>
                    <td><Radio name="Tibia_R_JS_P" value="1" /></td>
                    <td><Radio name="Tibia_R_JS_P" value="2a" /></td>
                    <td><Radio name="Tibia_R_JS_P" value="2b" /></td>
                    <td><Radio name="Tibia_R_JS_P" value="3" /></td>
                    <td><Radio name="Tibia_R_JS_P" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Tibia_L_shaft_P" value="0" /></td>
                    <td><Radio name="Tibia_L_shaft_P" value="3" /></td>
                    <td><Radio name="Tibia_L_shaft_P" value="2b" /></td>
                    <td><Radio name="Tibia_L_shaft_P" value="2a" /></td>
                    <td><Radio name="Tibia_L_shaft_P" value="1" /></td>
                    <td><Radio name="Tibia_L_shaft_P" value="C" /></td>
                    <td className="segment">Pr. 1/3 shaft</td>
                    <td><Radio name="Tibia_R_shaft_P" value="C" /></td>
                    <td><Radio name="Tibia_R_shaft_P" value="1" /></td>
                    <td><Radio name="Tibia_R_shaft_P" value="2a" /></td>
                    <td><Radio name="Tibia_R_shaft_P" value="2b" /></td>
                    <td><Radio name="Tibia_R_shaft_P" value="3" /></td>
                    <td><Radio name="Tibia_R_shaft_P" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Tibia_L_shaft_M" value="0" /></td>
                    <td><Radio name="Tibia_L_shaft_M" value="3" /></td>
                    <td><Radio name="Tibia_L_shaft_M" value="2b" /></td>
                    <td><Radio name="Tibia_L_shaft_M" value="2a" /></td>
                    <td><Radio name="Tibia_L_shaft_M" value="1" /></td>
                    <td><Radio name="Tibia_L_shaft_M" value="C" /></td>
                    <td className="segment">Md. 1/3 shaft</td>
                    <td><Radio name="Tibia_R_shaft_M" value="C" /></td>
                    <td><Radio name="Tibia_R_shaft_M" value="1" /></td>
                    <td><Radio name="Tibia_R_shaft_M" value="2a" /></td>
                    <td><Radio name="Tibia_R_shaft_M" value="2b" /></td>
                    <td><Radio name="Tibia_R_shaft_M" value="3" /></td>
                    <td><Radio name="Tibia_R_shaft_M" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Tibia_L_shaft_D" value="0" /></td>
                    <td><Radio name="Tibia_L_shaft_D" value="3" /></td>
                    <td><Radio name="Tibia_L_shaft_D" value="2b" /></td>
                    <td><Radio name="Tibia_L_shaft_D" value="2a" /></td>
                    <td><Radio name="Tibia_L_shaft_D" value="1" /></td>
                    <td><Radio name="Tibia_L_shaft_D" value="C" /></td>
                    <td className="segment">Ds. 1/3 shaft</td>
                    <td><Radio name="Tibia_R_shaft_D" value="C" /></td>
                    <td><Radio name="Tibia_R_shaft_D" value="1" /></td>
                    <td><Radio name="Tibia_R_shaft_D" value="2a" /></td>
                    <td><Radio name="Tibia_R_shaft_D" value="2b" /></td>
                    <td><Radio name="Tibia_R_shaft_D" value="3" /></td>
                    <td><Radio name="Tibia_R_shaft_D" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Tibia_L_JS_D" value="0" /></td>
                    <td><Radio name="Tibia_L_JS_D" value="3" /></td>
                    <td><Radio name="Tibia_L_JS_D" value="2b" /></td>
                    <td><Radio name="Tibia_L_JS_D" value="2a" /></td>
                    <td><Radio name="Tibia_L_JS_D" value="1" /></td>
                    <td><Radio name="Tibia_L_JS_D" value="C" /></td>
                    <td className="segment">Dist. JS</td>
                    <td><Radio name="Tibia_R_JS_D" value="C" /></td>
                    <td><Radio name="Tibia_R_JS_D" value="1" /></td>
                    <td><Radio name="Tibia_R_JS_D" value="2a" /></td>
                    <td><Radio name="Tibia_R_JS_D" value="2b" /></td>
                    <td><Radio name="Tibia_R_JS_D" value="3" /></td>
                    <td><Radio name="Tibia_R_JS_D" value="0" /></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td><Radio name="Fibula_L_complete" value="0" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Fibula_L_complete" value="C" /></td>
                    <td className="bone">Fibula</td>
                    <td><Radio name="Fibula_R_complete" value="C" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Fibula_R_complete" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Fibula_L_JS_P" value="0" /></td>
                    <td><Radio name="Fibula_L_JS_P" value="3" /></td>
                    <td><Radio name="Fibula_L_JS_P" value="2b" /></td>
                    <td><Radio name="Fibula_L_JS_P" value="2a" /></td>
                    <td><Radio name="Fibula_L_JS_P" value="1" /></td>
                    <td><Radio name="Fibula_L_JS_P" value="C" /></td>
                    <td className="segment">Prox. JS</td>
                    <td><Radio name="Fibula_R_JS_P" value="C" /></td>
                    <td><Radio name="Fibula_R_JS_P" value="1" /></td>
                    <td><Radio name="Fibula_R_JS_P" value="2a" /></td>
                    <td><Radio name="Fibula_R_JS_P" value="2b" /></td>
                    <td><Radio name="Fibula_R_JS_P" value="3" /></td>
                    <td><Radio name="Fibula_R_JS_P" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Fibula_L_shaft_P" value="0" /></td>
                    <td><Radio name="Fibula_L_shaft_P" value="3" /></td>
                    <td><Radio name="Fibula_L_shaft_P" value="2b" /></td>
                    <td><Radio name="Fibula_L_shaft_P" value="2a" /></td>
                    <td><Radio name="Fibula_L_shaft_P" value="1" /></td>
                    <td><Radio name="Fibula_L_shaft_P" value="C" /></td>
                    <td className="segment">Pr. 1/3 shaft</td>
                    <td><Radio name="Fibula_R_shaft_P" value="C" /></td>
                    <td><Radio name="Fibula_R_shaft_P" value="1" /></td>
                    <td><Radio name="Fibula_R_shaft_P" value="2a" /></td>
                    <td><Radio name="Fibula_R_shaft_P" value="2b" /></td>
                    <td><Radio name="Fibula_R_shaft_P" value="3" /></td>
                    <td><Radio name="Fibula_R_shaft_P" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Fibula_L_shaft_M" value="0" /></td>
                    <td><Radio name="Fibula_L_shaft_M" value="3" /></td>
                    <td><Radio name="Fibula_L_shaft_M" value="2b" /></td>
                    <td><Radio name="Fibula_L_shaft_M" value="2a" /></td>
                    <td><Radio name="Fibula_L_shaft_M" value="1" /></td>
                    <td><Radio name="Fibula_L_shaft_M" value="C" /></td>
                    <td className="segment">Md. 1/3 shaft</td>
                    <td><Radio name="Fibula_R_shaft_M" value="C" /></td>
                    <td><Radio name="Fibula_R_shaft_M" value="1" /></td>
                    <td><Radio name="Fibula_R_shaft_M" value="2a" /></td>
                    <td><Radio name="Fibula_R_shaft_M" value="2b" /></td>
                    <td><Radio name="Fibula_R_shaft_M" value="3" /></td>
                    <td><Radio name="Fibula_R_shaft_M" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Fibula_L_shaft_D" value="0" /></td>
                    <td><Radio name="Fibula_L_shaft_D" value="3" /></td>
                    <td><Radio name="Fibula_L_shaft_D" value="2b" /></td>
                    <td><Radio name="Fibula_L_shaft_D" value="2a" /></td>
                    <td><Radio name="Fibula_L_shaft_D" value="1" /></td>
                    <td><Radio name="Fibula_L_shaft_D" value="C" /></td>
                    <td className="segment">Ds. 1/3 shaft</td>
                    <td><Radio name="Fibula_R_shaft_D" value="C" /></td>
                    <td><Radio name="Fibula_R_shaft_D" value="1" /></td>
                    <td><Radio name="Fibula_R_shaft_D" value="2a" /></td>
                    <td><Radio name="Fibula_R_shaft_D" value="2b" /></td>
                    <td><Radio name="Fibula_R_shaft_D" value="3" /></td>
                    <td><Radio name="Fibula_R_shaft_D" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Fibula_L_JS_D" value="0" /></td>
                    <td><Radio name="Fibula_L_JS_D" value="3" /></td>
                    <td><Radio name="Fibula_L_JS_D" value="2b" /></td>
                    <td><Radio name="Fibula_L_JS_D" value="2a" /></td>
                    <td><Radio name="Fibula_L_JS_D" value="1" /></td>
                    <td><Radio name="Fibula_L_JS_D" value="C" /></td>
                    <td className="segment">Dist. JS</td>
                    <td><Radio name="Fibula_R_JS_D" value="C" /></td>
                    <td><Radio name="Fibula_R_JS_D" value="1" /></td>
                    <td><Radio name="Fibula_R_JS_D" value="2a" /></td>
                    <td><Radio name="Fibula_R_JS_D" value="2b" /></td>
                    <td><Radio name="Fibula_R_JS_D" value="3" /></td>
                    <td><Radio name="Fibula_R_JS_D" value="0" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="osteo-row">
            <div className="osteo-column">
              <table className="osteo">
                <thead className="flat-label">
                  <tr className="sides">
                    <th className="left" colSpan="5">Left/unpaired</th>
                    <th colSpan="3" />
                    <th className="right" colSpan="5">Right</th>
                  </tr>
                  <tr className="labels">
                    <th />
                    <th><span>&lt;25%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>&gt;75%</span></th>
                    <th className="complete"><span>compl.</span></th>
                    <th />
                    <th className="complete"><span>compl.</span></th>
                    <th><span>&gt;75%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>&lt;25%</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Radio name="Os_coxae_L" value="0" /></td>
                    <td><Radio name="Os_coxae_L" value="3" /></td>
                    <td><Radio name="Os_coxae_L" value="2b" /></td>
                    <td><Radio name="Os_coxae_L" value="2a" /></td>
                    <td><Radio name="Os_coxae_L" value="1" /></td>
                    <td><Radio name="Os_coxae_L" value="C" /></td>
                    <td className="segment">Os coxae</td>
                    <td><Radio name="Os_coxae_R" value="C" /></td>
                    <td><Radio name="Os_coxae_R" value="1" /></td>
                    <td><Radio name="Os_coxae_R" value="2a" /></td>
                    <td><Radio name="Os_coxae_R" value="2b" /></td>
                    <td><Radio name="Os_coxae_R" value="3" /></td>
                    <td><Radio name="Os_coxae_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Ischium_L" value="0" /></td>
                    <td><Radio name="Ischium_L" value="3" /></td>
                    <td><Radio name="Ischium_L" value="2b" /></td>
                    <td><Radio name="Ischium_L" value="2a" /></td>
                    <td><Radio name="Ischium_L" value="1" /></td>
                    <td><Radio name="Ischium_L" value="C" /></td>
                    <td className="segment">Ischium</td>
                    <td><Radio name="Ischium_R" value="C" /></td>
                    <td><Radio name="Ischium_R" value="1" /></td>
                    <td><Radio name="Ischium_R" value="2a" /></td>
                    <td><Radio name="Ischium_R" value="2b" /></td>
                    <td><Radio name="Ischium_R" value="3" /></td>
                    <td><Radio name="Ischium_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Ilium_L" value="0" /></td>
                    <td><Radio name="Ilium_L" value="3" /></td>
                    <td><Radio name="Ilium_L" value="2b" /></td>
                    <td><Radio name="Ilium_L" value="2a" /></td>
                    <td><Radio name="Ilium_L" value="1" /></td>
                    <td><Radio name="Ilium_L" value="C" /></td>
                    <td className="segment">Ilium</td>
                    <td><Radio name="Ilium_R" value="C" /></td>
                    <td><Radio name="Ilium_R" value="1" /></td>
                    <td><Radio name="Ilium_R" value="2a" /></td>
                    <td><Radio name="Ilium_R" value="2b" /></td>
                    <td><Radio name="Ilium_R" value="3" /></td>
                    <td><Radio name="Ilium_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Pubis_L" value="0" /></td>
                    <td><Radio name="Pubis_L" value="3" /></td>
                    <td><Radio name="Pubis_L" value="2b" /></td>
                    <td><Radio name="Pubis_L" value="2a" /></td>
                    <td><Radio name="Pubis_L" value="1" /></td>
                    <td><Radio name="Pubis_L" value="C" /></td>
                    <td className="segment">Pubis</td>
                    <td><Radio name="Pubis_R" value="C" /></td>
                    <td><Radio name="Pubis_R" value="1" /></td>
                    <td><Radio name="Pubis_R" value="2a" /></td>
                    <td><Radio name="Pubis_R" value="2b" /></td>
                    <td><Radio name="Pubis_R" value="3" /></td>
                    <td><Radio name="Pubis_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Acetabulum_L" value="0" /></td>
                    <td><Radio name="Acetabulum_L" value="3" /></td>
                    <td><Radio name="Acetabulum_L" value="2b" /></td>
                    <td><Radio name="Acetabulum_L" value="2a" /></td>
                    <td><Radio name="Acetabulum_L" value="1" /></td>
                    <td><Radio name="Acetabulum_L" value="C" /></td>
                    <td className="segment">Acetabulum</td>
                    <td><Radio name="Acetabulum_R" value="C" /></td>
                    <td><Radio name="Acetabulum_R" value="1" /></td>
                    <td><Radio name="Acetabulum_R" value="2a" /></td>
                    <td><Radio name="Acetabulum_R" value="2b" /></td>
                    <td><Radio name="Acetabulum_R" value="3" /></td>
                    <td><Radio name="Acetabulum_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Auricular_surf_L" value="0" /></td>
                    <td><Radio name="Auricular_surf_L" value="3" /></td>
                    <td><Radio name="Auricular_surf_L" value="2b" /></td>
                    <td><Radio name="Auricular_surf_L" value="2a" /></td>
                    <td><Radio name="Auricular_surf_L" value="1" /></td>
                    <td><Radio name="Auricular_surf_L" value="C" /></td>
                    <td className="segment">Auricular sur.</td>
                    <td><Radio name="Auricular_surf_R" value="C" /></td>
                    <td><Radio name="Auricular_surf_R" value="1" /></td>
                    <td><Radio name="Auricular_surf_R" value="2a" /></td>
                    <td><Radio name="Auricular_surf_R" value="2b" /></td>
                    <td><Radio name="Auricular_surf_R" value="3" /></td>
                    <td><Radio name="Auricular_surf_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Scapula_L" value="0" /></td>
                    <td><Radio name="Scapula_L" value="3" /></td>
                    <td><Radio name="Scapula_L" value="2b" /></td>
                    <td><Radio name="Scapula_L" value="2a" /></td>
                    <td><Radio name="Scapula_L" value="1" /></td>
                    <td><Radio name="Scapula_L" value="C" /></td>
                    <td className="segment">Scapula</td>
                    <td><Radio name="Scapula_R" value="C" /></td>
                    <td><Radio name="Scapula_R" value="1" /></td>
                    <td><Radio name="Scapula_R" value="2a" /></td>
                    <td><Radio name="Scapula_R" value="2b" /></td>
                    <td><Radio name="Scapula_R" value="3" /></td>
                    <td><Radio name="Scapula_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Glenoid_L" value="0" /></td>
                    <td><Radio name="Glenoid_L" value="3" /></td>
                    <td><Radio name="Glenoid_L" value="2b" /></td>
                    <td><Radio name="Glenoid_L" value="2a" /></td>
                    <td><Radio name="Glenoid_L" value="1" /></td>
                    <td><Radio name="Glenoid_L" value="C" /></td>
                    <td className="segment">Glenoid</td>
                    <td><Radio name="Glenoid_R" value="C" /></td>
                    <td><Radio name="Glenoid_R" value="1" /></td>
                    <td><Radio name="Glenoid_R" value="2a" /></td>
                    <td><Radio name="Glenoid_R" value="2b" /></td>
                    <td><Radio name="Glenoid_R" value="3" /></td>
                    <td><Radio name="Glenoid_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Clavicle_L" value="0" /></td>
                    <td><Radio name="Clavicle_L" value="3" /></td>
                    <td><Radio name="Clavicle_L" value="2b" /></td>
                    <td><Radio name="Clavicle_L" value="2a" /></td>
                    <td><Radio name="Clavicle_L" value="1" /></td>
                    <td><Radio name="Clavicle_L" value="C" /></td>
                    <td className="segment">Clavicle</td>
                    <td><Radio name="Clavicle_R" value="C" /></td>
                    <td><Radio name="Clavicle_R" value="1" /></td>
                    <td><Radio name="Clavicle_R" value="2a" /></td>
                    <td><Radio name="Clavicle_R" value="2b" /></td>
                    <td><Radio name="Clavicle_R" value="3" /></td>
                    <td><Radio name="Clavicle_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Sternum" value="0" /></td>
                    <td><Radio name="Sternum" value="3" /></td>
                    <td><Radio name="Sternum" value="2b" /></td>
                    <td><Radio name="Sternum" value="2a" /></td>
                    <td><Radio name="Sternum" value="1" /></td>
                    <td><Radio name="Sternum" value="C" /></td>
                    <td className="segment">Sternum</td>
                  </tr>
                  <tr>
                    <td><Radio name="Manubrium" value="0" /></td>
                    <td><Radio name="Manubrium" value="3" /></td>
                    <td><Radio name="Manubrium" value="2b" /></td>
                    <td><Radio name="Manubrium" value="2a" /></td>
                    <td><Radio name="Manubrium" value="1" /></td>
                    <td><Radio name="Manubrium" value="C" /></td>
                    <td className="segment">Manubrium</td>
                  </tr>
                  <tr>
                    <td><Radio name="Patella_L" value="0" /></td>
                    <td><Radio name="Patella_L" value="3" /></td>
                    <td><Radio name="Patella_L" value="2b" /></td>
                    <td><Radio name="Patella_L" value="2a" /></td>
                    <td><Radio name="Patella_L" value="1" /></td>
                    <td><Radio name="Patella_L" value="C" /></td>
                    <td className="segment">Patella</td>
                    <td><Radio name="Patella_R" value="C" /></td>
                    <td><Radio name="Patella_R" value="1" /></td>
                    <td><Radio name="Patella_R" value="2a" /></td>
                    <td><Radio name="Patella_R" value="2b" /></td>
                    <td><Radio name="Patella_R" value="3" /></td>
                    <td><Radio name="Patella_R" value="0" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="osteo-column">
              <table className="osteo">
                <thead>
                  <tr className="sides">
                    <th className="left" colSpan="5">Left</th>
                    <th colSpan="3" />
                    <th className="right" colSpan="5">Right</th>
                  </tr>
                  <tr className="labels">
                    <th />
                    <th><span>&lt;25%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>&gt;75%</span></th>
                    <th className="complete"><span>compl.</span></th>
                    <th />
                    <th className="complete"><span>compl.</span></th>
                    <th><span>&gt;75%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>&lt;25%</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Radio name="Carpals_L_complete" value="0" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Carpals_L_complete" value="C" /></td>
                    <td className="bone">Wrist</td>
                    <td><Radio name="Carpals_R_complete" value="C" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Carpals_R_complete" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Scaphoid_L" value="0" /></td>
                    <td><Radio name="Scaphoid_L" value="3" /></td>
                    <td><Radio name="Scaphoid_L" value="2b" /></td>
                    <td><Radio name="Scaphoid_L" value="2a" /></td>
                    <td><Radio name="Scaphoid_L" value="1" /></td>
                    <td><Radio name="Scaphoid_L" value="C" /></td>
                    <td className="segment">Scaphoid</td>
                    <td><Radio name="Scaphoid_R" value="C" /></td>
                    <td><Radio name="Scaphoid_R" value="1" /></td>
                    <td><Radio name="Scaphoid_R" value="2a" /></td>
                    <td><Radio name="Scaphoid_R" value="2b" /></td>
                    <td><Radio name="Scaphoid_R" value="3" /></td>
                    <td><Radio name="Scaphoid_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Lunate_L" value="0" /></td>
                    <td><Radio name="Lunate_L" value="3" /></td>
                    <td><Radio name="Lunate_L" value="2b" /></td>
                    <td><Radio name="Lunate_L" value="2a" /></td>
                    <td><Radio name="Lunate_L" value="1" /></td>
                    <td><Radio name="Lunate_L" value="C" /></td>
                    <td className="segment">Lunate</td>
                    <td><Radio name="Lunate_R" value="C" /></td>
                    <td><Radio name="Lunate_R" value="1" /></td>
                    <td><Radio name="Lunate_R" value="2a" /></td>
                    <td><Radio name="Lunate_R" value="2b" /></td>
                    <td><Radio name="Lunate_R" value="3" /></td>
                    <td><Radio name="Lunate_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Triquetral_L" value="0" /></td>
                    <td><Radio name="Triquetral_L" value="3" /></td>
                    <td><Radio name="Triquetral_L" value="2b" /></td>
                    <td><Radio name="Triquetral_L" value="2a" /></td>
                    <td><Radio name="Triquetral_L" value="1" /></td>
                    <td><Radio name="Triquetral_L" value="C" /></td>
                    <td className="segment">Triquetral</td>
                    <td><Radio name="Triquetral_R" value="C" /></td>
                    <td><Radio name="Triquetral_R" value="1" /></td>
                    <td><Radio name="Triquetral_R" value="2a" /></td>
                    <td><Radio name="Triquetral_R" value="2b" /></td>
                    <td><Radio name="Triquetral_R" value="3" /></td>
                    <td><Radio name="Triquetral_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Pisiform_L" value="0" /></td>
                    <td><Radio name="Pisiform_L" value="3" /></td>
                    <td><Radio name="Pisiform_L" value="2b" /></td>
                    <td><Radio name="Pisiform_L" value="2a" /></td>
                    <td><Radio name="Pisiform_L" value="1" /></td>
                    <td><Radio name="Pisiform_L" value="C" /></td>
                    <td className="segment">Pisiform</td>
                    <td><Radio name="Pisiform_R" value="C" /></td>
                    <td><Radio name="Pisiform_R" value="1" /></td>
                    <td><Radio name="Pisiform_R" value="2a" /></td>
                    <td><Radio name="Pisiform_R" value="2b" /></td>
                    <td><Radio name="Pisiform_R" value="3" /></td>
                    <td><Radio name="Pisiform_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Trapezium_L" value="0" /></td>
                    <td><Radio name="Trapezium_L" value="3" /></td>
                    <td><Radio name="Trapezium_L" value="2b" /></td>
                    <td><Radio name="Trapezium_L" value="2a" /></td>
                    <td><Radio name="Trapezium_L" value="1" /></td>
                    <td><Radio name="Trapezium_L" value="C" /></td>
                    <td className="segment">Trapezium</td>
                    <td><Radio name="Trapezium_R" value="C" /></td>
                    <td><Radio name="Trapezium_R" value="1" /></td>
                    <td><Radio name="Trapezium_R" value="2a" /></td>
                    <td><Radio name="Trapezium_R" value="2b" /></td>
                    <td><Radio name="Trapezium_R" value="3" /></td>
                    <td><Radio name="Trapezium_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Trapezoid_L" value="0" /></td>
                    <td><Radio name="Trapezoid_L" value="3" /></td>
                    <td><Radio name="Trapezoid_L" value="2b" /></td>
                    <td><Radio name="Trapezoid_L" value="2a" /></td>
                    <td><Radio name="Trapezoid_L" value="1" /></td>
                    <td><Radio name="Trapezoid_L" value="C" /></td>
                    <td className="segment">Trapezoid</td>
                    <td><Radio name="Trapezoid_R" value="C" /></td>
                    <td><Radio name="Trapezoid_R" value="1" /></td>
                    <td><Radio name="Trapezoid_R" value="2a" /></td>
                    <td><Radio name="Trapezoid_R" value="2b" /></td>
                    <td><Radio name="Trapezoid_R" value="3" /></td>
                    <td><Radio name="Trapezoid_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Capitate_L" value="0" /></td>
                    <td><Radio name="Capitate_L" value="3" /></td>
                    <td><Radio name="Capitate_L" value="2b" /></td>
                    <td><Radio name="Capitate_L" value="2a" /></td>
                    <td><Radio name="Capitate_L" value="1" /></td>
                    <td><Radio name="Capitate_L" value="C" /></td>
                    <td className="segment">Capitate</td>
                    <td><Radio name="Capitate_R" value="C" /></td>
                    <td><Radio name="Capitate_R" value="1" /></td>
                    <td><Radio name="Capitate_R" value="2a" /></td>
                    <td><Radio name="Capitate_R" value="2b" /></td>
                    <td><Radio name="Capitate_R" value="3" /></td>
                    <td><Radio name="Capitate_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Hamate_L" value="0" /></td>
                    <td><Radio name="Hamate_L" value="3" /></td>
                    <td><Radio name="Hamate_L" value="2b" /></td>
                    <td><Radio name="Hamate_L" value="2a" /></td>
                    <td><Radio name="Hamate_L" value="1" /></td>
                    <td><Radio name="Hamate_L" value="C" /></td>
                    <td className="segment">Hamate</td>
                    <td><Radio name="Hamate_R" value="C" /></td>
                    <td><Radio name="Hamate_R" value="1" /></td>
                    <td><Radio name="Hamate_R" value="2a" /></td>
                    <td><Radio name="Hamate_R" value="2b" /></td>
                    <td><Radio name="Hamate_R" value="3" /></td>
                    <td><Radio name="Hamate_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td colSpan="6"><input type="text" className="sesamoid" name="Sesamoid_L_count_hand" /></td>
                    <td className="segment">Sesamoid</td>
                    <td colSpan="6"><input type="text" className="sesamoid" name="Sesamoid_R_count_hand" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="osteo-column">
              <table className="osteo">
                <thead>
                  <tr className="sides">
                    <th className="left" colSpan="5">Left</th>
                    <th colSpan="3" />
                    <th className="right" colSpan="5">Right</th>
                  </tr>
                  <tr className="labels">
                    <th />
                    <th><span>&lt;25%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>&gt;75%</span></th>
                    <th className="complete"><span>compl.</span></th>
                    <th />
                    <th className="complete"><span>compl.</span></th>
                    <th><span>&gt;75%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>&lt;25%</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Radio name="Tarsals_L_complete" value="0" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Tarsals_L_complete" value="C" /></td>
                    <td className="bone">Ankle</td>
                    <td><Radio name="Tarsals_R_complete" value="C" /></td>
                    <td colSpan="4" />
                    <td><Radio name="Tarsals_R_complete" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Talus_L" value="0" /></td>
                    <td><Radio name="Talus_L" value="3" /></td>
                    <td><Radio name="Talus_L" value="2b" /></td>
                    <td><Radio name="Talus_L" value="2a" /></td>
                    <td><Radio name="Talus_L" value="1" /></td>
                    <td><Radio name="Talus_L" value="C" /></td>
                    <td className="segment">Talus</td>
                    <td><Radio name="Talus_R" value="C" /></td>
                    <td><Radio name="Talus_R" value="1" /></td>
                    <td><Radio name="Talus_R" value="2a" /></td>
                    <td><Radio name="Talus_R" value="2b" /></td>
                    <td><Radio name="Talus_R" value="3" /></td>
                    <td><Radio name="Talus_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Calcaneus_L" value="0" /></td>
                    <td><Radio name="Calcaneus_L" value="3" /></td>
                    <td><Radio name="Calcaneus_L" value="2b" /></td>
                    <td><Radio name="Calcaneus_L" value="2a" /></td>
                    <td><Radio name="Calcaneus_L" value="1" /></td>
                    <td><Radio name="Calcaneus_L" value="C" /></td>
                    <td className="segment">Calcaneus</td>
                    <td><Radio name="Calcaneus_R" value="C" /></td>
                    <td><Radio name="Calcaneus_R" value="1" /></td>
                    <td><Radio name="Calcaneus_R" value="2a" /></td>
                    <td><Radio name="Calcaneus_R" value="2b" /></td>
                    <td><Radio name="Calcaneus_R" value="3" /></td>
                    <td><Radio name="Calcaneus_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Navicular_L" value="0" /></td>
                    <td><Radio name="Navicular_L" value="3" /></td>
                    <td><Radio name="Navicular_L" value="2b" /></td>
                    <td><Radio name="Navicular_L" value="2a" /></td>
                    <td><Radio name="Navicular_L" value="1" /></td>
                    <td><Radio name="Navicular_L" value="C" /></td>
                    <td className="segment">Navicular</td>
                    <td><Radio name="Navicular_R" value="C" /></td>
                    <td><Radio name="Navicular_R" value="1" /></td>
                    <td><Radio name="Navicular_R" value="2a" /></td>
                    <td><Radio name="Navicular_R" value="2b" /></td>
                    <td><Radio name="Navicular_R" value="3" /></td>
                    <td><Radio name="Navicular_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Cuboid_L" value="0" /></td>
                    <td><Radio name="Cuboid_L" value="3" /></td>
                    <td><Radio name="Cuboid_L" value="2b" /></td>
                    <td><Radio name="Cuboid_L" value="2a" /></td>
                    <td><Radio name="Cuboid_L" value="1" /></td>
                    <td><Radio name="Cuboid_L" value="C" /></td>
                    <td className="segment">Cuboid</td>
                    <td><Radio name="Cuboid_R" value="C" /></td>
                    <td><Radio name="Cuboid_R" value="1" /></td>
                    <td><Radio name="Cuboid_R" value="2a" /></td>
                    <td><Radio name="Cuboid_R" value="2b" /></td>
                    <td><Radio name="Cuboid_R" value="3" /></td>
                    <td><Radio name="Cuboid_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Med_cuneif_1_L" value="0" /></td>
                    <td><Radio name="Med_cuneif_1_L" value="3" /></td>
                    <td><Radio name="Med_cuneif_1_L" value="2b" /></td>
                    <td><Radio name="Med_cuneif_1_L" value="2a" /></td>
                    <td><Radio name="Med_cuneif_1_L" value="1" /></td>
                    <td><Radio name="Med_cuneif_1_L" value="C" /></td>
                    <td className="segment">Med. cun. (1)</td>
                    <td><Radio name="Med_cuneif_1_R" value="C" /></td>
                    <td><Radio name="Med_cuneif_1_R" value="1" /></td>
                    <td><Radio name="Med_cuneif_1_R" value="2a" /></td>
                    <td><Radio name="Med_cuneif_1_R" value="2b" /></td>
                    <td><Radio name="Med_cuneif_1_R" value="3" /></td>
                    <td><Radio name="Med_cuneif_1_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Int_cuneif_2_L" value="0" /></td>
                    <td><Radio name="Int_cuneif_2_L" value="3" /></td>
                    <td><Radio name="Int_cuneif_2_L" value="2b" /></td>
                    <td><Radio name="Int_cuneif_2_L" value="2a" /></td>
                    <td><Radio name="Int_cuneif_2_L" value="1" /></td>
                    <td><Radio name="Int_cuneif_2_L" value="C" /></td>
                    <td className="segment">Int. cun. (2)</td>
                    <td><Radio name="Int_cuneif_2_R" value="C" /></td>
                    <td><Radio name="Int_cuneif_2_R" value="1" /></td>
                    <td><Radio name="Int_cuneif_2_R" value="2a" /></td>
                    <td><Radio name="Int_cuneif_2_R" value="2b" /></td>
                    <td><Radio name="Int_cuneif_2_R" value="3" /></td>
                    <td><Radio name="Int_cuneif_2_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Lat_cuneif_3_L" value="0" /></td>
                    <td><Radio name="Lat_cuneif_3_L" value="3" /></td>
                    <td><Radio name="Lat_cuneif_3_L" value="2b" /></td>
                    <td><Radio name="Lat_cuneif_3_L" value="2a" /></td>
                    <td><Radio name="Lat_cuneif_3_L" value="1" /></td>
                    <td><Radio name="Lat_cuneif_3_L" value="C" /></td>
                    <td className="segment">Lat. cun. (3)</td>
                    <td><Radio name="Lat_cuneif_3_R" value="C" /></td>
                    <td><Radio name="Lat_cuneif_3_R" value="1" /></td>
                    <td><Radio name="Lat_cuneif_3_R" value="2a" /></td>
                    <td><Radio name="Lat_cuneif_3_R" value="2b" /></td>
                    <td><Radio name="Lat_cuneif_3_R" value="3" /></td>
                    <td><Radio name="Lat_cuneif_3_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td colSpan="6"><input type="text" className="sesamoid" name="Sesamoid_L_count_foot" /></td>
                    <td className="segment">Sesamoid</td>
                    <td colSpan="6"><input type="text" className="sesamoid" name="Sesamoid_R_count_foot" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="osteo-row">
            <div className="osteo-column">
              <table className="osteo">
                <thead>
                  <tr className="sides">
                    <th colSpan="4" />
                    <th className="left" colSpan="3">Left</th>
                    <th colSpan="3" />
                    <th className="right" colSpan="3">Right</th>
                  </tr>
                  <tr className="labels">
                    <th />
                    <th><span>Sternal end</span></th>
                    <th><span>Head/neck</span></th>
                    <th><span>&lt;25%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>&gt;75%</span></th>
                    <th className="complete"><span>compl.</span></th>
                    <th />
                    <th className="complete"><span>compl.</span></th>
                    <th><span>&gt;75%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>&lt;25%</span></th>
                    <th><span>Head/neck</span></th>
                    <th><span>Sternal end</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Radio name="Ribs_L_complete" value="0" /></td>
                    <td colSpan="6" />
                    <td><Radio name="Ribs_L_complete" value="C" /></td>
                    <td className="bone">Rib #</td>
                    <td><Radio name="Ribs_R_complete" value="C" /></td>
                    <td colSpan="6" />
                    <td><Radio name="Ribs_R_complete" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Rib1_L" value="0" /></td>
                    <td><Checkbox name="Rib1_L_sternal_end_complete" value="C" /></td>
                    <td><Checkbox name="Rib1_L_head_neck_complete" value="C" /></td>
                    <td><Radio name="Rib1_L" value="3" /></td>
                    <td><Radio name="Rib1_L" value="2b" /></td>
                    <td><Radio name="Rib1_L" value="2a" /></td>
                    <td><Radio name="Rib1_L" value="1" /></td>
                    <td><Radio name="Rib1_L" value="C" /></td>
                    <td className="segment">1</td>
                    <td><Radio name="Rib1_R" value="C" /></td>
                    <td><Radio name="Rib1_R" value="1" /></td>
                    <td><Radio name="Rib1_R" value="2a" /></td>
                    <td><Radio name="Rib1_R" value="2b" /></td>
                    <td><Radio name="Rib1_R" value="3" /></td>
                    <td><Checkbox name="Rib1_R_head_neck_complete" value="C" /></td>
                    <td><Checkbox name="Rib1_R_sternal_end_complete" value="C" /></td>
                    <td><Radio name="Rib1_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Rib2_L" value="0" /></td>
                    <td><Checkbox name="Rib2_L_sternal_end_complete" value="C" /></td>
                    <td><Checkbox name="Rib2_L_head_neck_complete" value="C" /></td>
                    <td><Radio name="Rib2_L" value="3" /></td>
                    <td><Radio name="Rib2_L" value="2b" /></td>
                    <td><Radio name="Rib2_L" value="2a" /></td>
                    <td><Radio name="Rib2_L" value="1" /></td>
                    <td><Radio name="Rib2_L" value="C" /></td>
                    <td className="segment">2</td>
                    <td><Radio name="Rib2_R" value="C" /></td>
                    <td><Radio name="Rib2_R" value="1" /></td>
                    <td><Radio name="Rib2_R" value="2a" /></td>
                    <td><Radio name="Rib2_R" value="2b" /></td>
                    <td><Radio name="Rib2_R" value="3" /></td>
                    <td><Checkbox name="Rib2_R_head_neck_complete" value="C" /></td>
                    <td><Checkbox name="Rib2_R_sternal_end_complete" value="C" /></td>
                    <td><Radio name="Rib2_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Rib3_L" value="0" /></td>
                    <td><Checkbox name="Rib3_L_sternal_end_complete" value="C" /></td>
                    <td><Checkbox name="Rib3_L_head_neck_complete" value="C" /></td>
                    <td><Radio name="Rib3_L" value="3" /></td>
                    <td><Radio name="Rib3_L" value="2b" /></td>
                    <td><Radio name="Rib3_L" value="2a" /></td>
                    <td><Radio name="Rib3_L" value="1" /></td>
                    <td><Radio name="Rib3_L" value="C" /></td>
                    <td className="segment">3-9 (~3)</td>
                    <td><Radio name="Rib3_R" value="C" /></td>
                    <td><Radio name="Rib3_R" value="1" /></td>
                    <td><Radio name="Rib3_R" value="2a" /></td>
                    <td><Radio name="Rib3_R" value="2b" /></td>
                    <td><Radio name="Rib3_R" value="3" /></td>
                    <td><Checkbox name="Rib3_R_head_neck_complete" value="C" /></td>
                    <td><Checkbox name="Rib3_R_sternal_end_complete" value="C" /></td>
                    <td><Radio name="Rib3_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Rib4_L" value="0" /></td>
                    <td><Checkbox name="Rib4_L_sternal_end_complete" value="C" /></td>
                    <td><Checkbox name="Rib4_L_head_neck_complete" value="C" /></td>
                    <td><Radio name="Rib4_L" value="3" /></td>
                    <td><Radio name="Rib4_L" value="2b" /></td>
                    <td><Radio name="Rib4_L" value="2a" /></td>
                    <td><Radio name="Rib4_L" value="1" /></td>
                    <td><Radio name="Rib4_L" value="C" /></td>
                    <td className="segment">3-9 (~4)</td>
                    <td><Radio name="Rib4_R" value="C" /></td>
                    <td><Radio name="Rib4_R" value="1" /></td>
                    <td><Radio name="Rib4_R" value="2a" /></td>
                    <td><Radio name="Rib4_R" value="2b" /></td>
                    <td><Radio name="Rib4_R" value="3" /></td>
                    <td><Checkbox name="Rib4_R_head_neck_complete" value="C" /></td>
                    <td><Checkbox name="Rib4_R_sternal_end_complete" value="C" /></td>
                    <td><Radio name="Rib4_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Rib5_L" value="0" /></td>
                    <td><Checkbox name="Rib5_L_sternal_end_complete" value="C" /></td>
                    <td><Checkbox name="Rib5_L_head_neck_complete" value="C" /></td>
                    <td><Radio name="Rib5_L" value="3" /></td>
                    <td><Radio name="Rib5_L" value="2b" /></td>
                    <td><Radio name="Rib5_L" value="2a" /></td>
                    <td><Radio name="Rib5_L" value="1" /></td>
                    <td><Radio name="Rib5_L" value="C" /></td>
                    <td className="segment">3-9 (~5)</td>
                    <td><Radio name="Rib5_R" value="C" /></td>
                    <td><Radio name="Rib5_R" value="1" /></td>
                    <td><Radio name="Rib5_R" value="2a" /></td>
                    <td><Radio name="Rib5_R" value="2b" /></td>
                    <td><Radio name="Rib5_R" value="3" /></td>
                    <td><Checkbox name="Rib5_R_head_neck_complete" value="C" /></td>
                    <td><Checkbox name="Rib5_R_sternal_end_complete" value="C" /></td>
                    <td><Radio name="Rib5_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Rib6_L" value="0" /></td>
                    <td><Checkbox name="Rib6_L_sternal_end_complete" value="C" /></td>
                    <td><Checkbox name="Rib6_L_head_neck_complete" value="C" /></td>
                    <td><Radio name="Rib6_L" value="3" /></td>
                    <td><Radio name="Rib6_L" value="2b" /></td>
                    <td><Radio name="Rib6_L" value="2a" /></td>
                    <td><Radio name="Rib6_L" value="1" /></td>
                    <td><Radio name="Rib6_L" value="C" /></td>
                    <td className="segment">3-9 (~6)</td>
                    <td><Radio name="Rib6_R" value="C" /></td>
                    <td><Radio name="Rib6_R" value="1" /></td>
                    <td><Radio name="Rib6_R" value="2a" /></td>
                    <td><Radio name="Rib6_R" value="2b" /></td>
                    <td><Radio name="Rib6_R" value="3" /></td>
                    <td><Checkbox name="Rib6_R_head_neck_complete" value="C" /></td>
                    <td><Checkbox name="Rib6_R_sternal_end_complete" value="C" /></td>
                    <td><Radio name="Rib6_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Rib7_L" value="0" /></td>
                    <td><Checkbox name="Rib7_L_sternal_end_complete" value="C" /></td>
                    <td><Checkbox name="Rib7_L_head_neck_complete" value="C" /></td>
                    <td><Radio name="Rib7_L" value="3" /></td>
                    <td><Radio name="Rib7_L" value="2b" /></td>
                    <td><Radio name="Rib7_L" value="2a" /></td>
                    <td><Radio name="Rib7_L" value="1" /></td>
                    <td><Radio name="Rib7_L" value="C" /></td>
                    <td className="segment">3-9 (~7)</td>
                    <td><Radio name="Rib7_R" value="C" /></td>
                    <td><Radio name="Rib7_R" value="1" /></td>
                    <td><Radio name="Rib7_R" value="2a" /></td>
                    <td><Radio name="Rib7_R" value="2b" /></td>
                    <td><Radio name="Rib7_R" value="3" /></td>
                    <td><Checkbox name="Rib7_R_head_neck_complete" value="C" /></td>
                    <td><Checkbox name="Rib7_R_sternal_end_complete" value="C" /></td>
                    <td><Radio name="Rib7_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Rib8_L" value="0" /></td>
                    <td><Checkbox name="Rib8_L_sternal_end_complete" value="C" /></td>
                    <td><Checkbox name="Rib8_L_head_neck_complete" value="C" /></td>
                    <td><Radio name="Rib8_L" value="3" /></td>
                    <td><Radio name="Rib8_L" value="2b" /></td>
                    <td><Radio name="Rib8_L" value="2a" /></td>
                    <td><Radio name="Rib8_L" value="1" /></td>
                    <td><Radio name="Rib8_L" value="C" /></td>
                    <td className="segment">3-9 (~8)</td>
                    <td><Radio name="Rib8_R" value="C" /></td>
                    <td><Radio name="Rib8_R" value="1" /></td>
                    <td><Radio name="Rib8_R" value="2a" /></td>
                    <td><Radio name="Rib8_R" value="2b" /></td>
                    <td><Radio name="Rib8_R" value="3" /></td>
                    <td><Checkbox name="Rib8_R_head_neck_complete" value="C" /></td>
                    <td><Checkbox name="Rib8_R_sternal_end_complete" value="C" /></td>
                    <td><Radio name="Rib8_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Rib9_L" value="0" /></td>
                    <td><Checkbox name="Rib9_L_sternal_end_complete" value="C" /></td>
                    <td><Checkbox name="Rib9_L_head_neck_complete" value="C" /></td>
                    <td><Radio name="Rib9_L" value="3" /></td>
                    <td><Radio name="Rib9_L" value="2b" /></td>
                    <td><Radio name="Rib9_L" value="2a" /></td>
                    <td><Radio name="Rib9_L" value="1" /></td>
                    <td><Radio name="Rib9_L" value="C" /></td>
                    <td className="segment">3-9 (~9)</td>
                    <td><Radio name="Rib9_R" value="C" /></td>
                    <td><Radio name="Rib9_R" value="1" /></td>
                    <td><Radio name="Rib9_R" value="2a" /></td>
                    <td><Radio name="Rib9_R" value="2b" /></td>
                    <td><Radio name="Rib9_R" value="3" /></td>
                    <td><Checkbox name="Rib9_R_head_neck_complete" value="C" /></td>
                    <td><Checkbox name="Rib9_R_sternal_end_complete" value="C" /></td>
                    <td><Radio name="Rib9_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Rib10_L" value="0" /></td>
                    <td><Checkbox name="Rib10_L_sternal_end_complete" value="C" /></td>
                    <td><Checkbox name="Rib10_L_head_neck_complete" value="C" /></td>
                    <td><Radio name="Rib10_L" value="3" /></td>
                    <td><Radio name="Rib10_L" value="2b" /></td>
                    <td><Radio name="Rib10_L" value="2a" /></td>
                    <td><Radio name="Rib10_L" value="1" /></td>
                    <td><Radio name="Rib10_L" value="C" /></td>
                    <td className="segment">10</td>
                    <td><Radio name="Rib10_R" value="C" /></td>
                    <td><Radio name="Rib10_R" value="1" /></td>
                    <td><Radio name="Rib10_R" value="2a" /></td>
                    <td><Radio name="Rib10_R" value="2b" /></td>
                    <td><Radio name="Rib10_R" value="3" /></td>
                    <td><Checkbox name="Rib10_R_head_neck_complete" value="C" /></td>
                    <td><Checkbox name="Rib10_R_sternal_end_complete" value="C" /></td>
                    <td><Radio name="Rib10_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Rib11_L" value="0" /></td>
                    <td><Checkbox name="Rib11_L_sternal_end_complete" value="C" /></td>
                    <td><Checkbox name="Rib11_L_head_neck_complete" value="C" /></td>
                    <td><Radio name="Rib11_L" value="3" /></td>
                    <td><Radio name="Rib11_L" value="2b" /></td>
                    <td><Radio name="Rib11_L" value="2a" /></td>
                    <td><Radio name="Rib11_L" value="1" /></td>
                    <td><Radio name="Rib11_L" value="C" /></td>
                    <td className="segment">11</td>
                    <td><Radio name="Rib11_R" value="C" /></td>
                    <td><Radio name="Rib11_R" value="1" /></td>
                    <td><Radio name="Rib11_R" value="2a" /></td>
                    <td><Radio name="Rib11_R" value="2b" /></td>
                    <td><Radio name="Rib11_R" value="3" /></td>
                    <td><Checkbox name="Rib11_R_head_neck_complete" value="C" /></td>
                    <td><Checkbox name="Rib11_R_sternal_end_complete" value="C" /></td>
                    <td><Radio name="Rib11_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Rib12_L" value="0" /></td>
                    <td><Checkbox name="Rib12_L_sternal_end_complete" value="C" /></td>
                    <td><Checkbox name="Rib12_L_head_neck_complete" value="C" /></td>
                    <td><Radio name="Rib12_L" value="3" /></td>
                    <td><Radio name="Rib12_L" value="2b" /></td>
                    <td><Radio name="Rib12_L" value="2a" /></td>
                    <td><Radio name="Rib12_L" value="1" /></td>
                    <td><Radio name="Rib12_L" value="C" /></td>
                    <td className="segment">12</td>
                    <td><Radio name="Rib12_R" value="C" /></td>
                    <td><Radio name="Rib12_R" value="1" /></td>
                    <td><Radio name="Rib12_R" value="2a" /></td>
                    <td><Radio name="Rib12_R" value="2b" /></td>
                    <td><Radio name="Rib12_R" value="3" /></td>
                    <td><Checkbox name="Rib12_R_head_neck_complete" value="C" /></td>
                    <td><Checkbox name="Rib12_R_sternal_end_complete" value="C" /></td>
                    <td><Radio name="Rib12_R" value="0" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="osteo-column">
              <table className="osteo">
                <thead>
                  <tr className="sides">
                    <th className="left" colSpan="6">Left</th>
                    <th colSpan="3" />
                    <th className="right" colSpan="6">Right</th>
                  </tr>
                  <tr className="labels">
                    <th />
                    <th><span>#</span></th>
                    <th><span>&lt;25%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>&gt;75%</span></th>
                    <th className="complete"><span>compl.</span></th>
                    <th />
                    <th className="complete"><span>compl.</span></th>
                    <th><span>&gt;75%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>&lt;25%</span></th>
                    <th><span>#</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Radio name="MC_L_complete" value="0" /></td>
                    <td colSpan="5" />
                    <td><Radio name="MC_L_complete" value="C" /></td>
                    <td className="bone">Hand</td>
                    <td><Radio name="MC_R_complete" value="C" /></td>
                    <td colSpan="5" />
                    <td><Radio name="MC_R_complete" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="MC1_L" value="0" /></td>
                    <td rowSpan="5"><input className="mc" type="text" name="MC_L_count" /></td>
                    <td><Radio name="MC1_L" value="3" /></td>
                    <td><Radio name="MC1_L" value="2b" /></td>
                    <td><Radio name="MC1_L" value="2a" /></td>
                    <td><Radio name="MC1_L" value="1" /></td>
                    <td><Radio name="MC1_L" value="C" /></td>
                    <td className="segment">MC 1</td>
                    <td><Radio name="MC1_R" value="C" /></td>
                    <td><Radio name="MC1_R" value="1" /></td>
                    <td><Radio name="MC1_R" value="2a" /></td>
                    <td><Radio name="MC1_R" value="2b" /></td>
                    <td><Radio name="MC1_R" value="3" /></td>
                    <td rowSpan="5"><input className="mc" type="text" name="MC_R_count" /></td>
                    <td><Radio name="MC1_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="MC2_L" value="0" /></td>
                    <td><Radio name="MC2_L" value="3" /></td>
                    <td><Radio name="MC2_L" value="2b" /></td>
                    <td><Radio name="MC2_L" value="2a" /></td>
                    <td><Radio name="MC2_L" value="1" /></td>
                    <td><Radio name="MC2_L" value="C" /></td>
                    <td className="segment">MC 2</td>
                    <td><Radio name="MC2_R" value="C" /></td>
                    <td><Radio name="MC2_R" value="1" /></td>
                    <td><Radio name="MC2_R" value="2a" /></td>
                    <td><Radio name="MC2_R" value="2b" /></td>
                    <td><Radio name="MC2_R" value="3" /></td>
                    <td><Radio name="MC2_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="MC3_L" value="0" /></td>
                    <td><Radio name="MC3_L" value="3" /></td>
                    <td><Radio name="MC3_L" value="2b" /></td>
                    <td><Radio name="MC3_L" value="2a" /></td>
                    <td><Radio name="MC3_L" value="1" /></td>
                    <td><Radio name="MC3_L" value="C" /></td>
                    <td className="segment">MC 3</td>
                    <td><Radio name="MC3_R" value="C" /></td>
                    <td><Radio name="MC3_R" value="1" /></td>
                    <td><Radio name="MC3_R" value="2a" /></td>
                    <td><Radio name="MC3_R" value="2b" /></td>
                    <td><Radio name="MC3_R" value="3" /></td>
                    <td><Radio name="MC3_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="MC4_L" value="0" /></td>
                    <td><Radio name="MC4_L" value="3" /></td>
                    <td><Radio name="MC4_L" value="2b" /></td>
                    <td><Radio name="MC4_L" value="2a" /></td>
                    <td><Radio name="MC4_L" value="1" /></td>
                    <td><Radio name="MC4_L" value="C" /></td>
                    <td className="segment">MC 4</td>
                    <td><Radio name="MC4_R" value="C" /></td>
                    <td><Radio name="MC4_R" value="1" /></td>
                    <td><Radio name="MC4_R" value="2a" /></td>
                    <td><Radio name="MC4_R" value="2b" /></td>
                    <td><Radio name="MC4_R" value="3" /></td>
                    <td><Radio name="MC4_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="MC5_L" value="0" /></td>
                    <td><Radio name="MC5_L" value="3" /></td>
                    <td><Radio name="MC5_L" value="2b" /></td>
                    <td><Radio name="MC5_L" value="2a" /></td>
                    <td><Radio name="MC5_L" value="1" /></td>
                    <td><Radio name="MC5_L" value="C" /></td>
                    <td className="segment">MC 5</td>
                    <td><Radio name="MC5_R" value="C" /></td>
                    <td><Radio name="MC5_R" value="1" /></td>
                    <td><Radio name="MC5_R" value="2a" /></td>
                    <td><Radio name="MC5_R" value="2b" /></td>
                    <td><Radio name="MC5_R" value="3" /></td>
                    <td><Radio name="MC5_R" value="0" /></td>
                  </tr>
                </tbody>
              </table>

              <div className="phalanges">
                <table className="osteo">
                  <thead>
                    <tr>
                      <th />
                      <th>#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Prox. hand phalanges</th>
                      <td><input type="text" name="Phalanx_P_count_hand" /></td>
                    </tr>
                    <tr>
                      <th>Int. hand phalanges</th>
                      <td><input type="text" name="Phalanx_I_count_hand" /></td>
                    </tr>
                    <tr>
                      <th>Dist. hand phalanges</th>
                      <td><input type="text" name="Phalanx_D_count_hand" /></td>
                    </tr>
                  </tbody>
                </table>

                <label>
                  <div># (juv.)</div>
                  <input type="text" name="Phalanx_juv_count_hand" />
                </label>
              </div>
            </div>

            <div className="osteo-column">
              <table className="osteo">
                <thead>
                  <tr className="sides">
                    <th className="left" colSpan="6">Left</th>
                    <th colSpan="3" />
                    <th className="right" colSpan="6">Right</th>
                  </tr>
                  <tr className="labels">
                    <th />
                    <th><span>#</span></th>
                    <th><span>&lt;25%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>&gt;75%</span></th>
                    <th className="complete"><span>compl.</span></th>
                    <th />
                    <th className="complete"><span>compl.</span></th>
                    <th><span>&gt;75%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>&lt;25%</span></th>
                    <th><span>#</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Radio name="MT_L_complete" value="0" /></td>
                    <td colSpan="5" />
                    <td><Radio name="MT_L_complete" value="C" /></td>
                    <td className="bone">Foot</td>
                    <td><Radio name="MT_R_complete" value="C" /></td>
                    <td colSpan="5" />
                    <td><Radio name="MT_R_complete" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="MT1_L" value="0" /></td>
                    <td rowSpan="5"><input className="mt" type="text" name="MT_L_count" /></td>
                    <td><Radio name="MT1_L" value="3" /></td>
                    <td><Radio name="MT1_L" value="2b" /></td>
                    <td><Radio name="MT1_L" value="2a" /></td>
                    <td><Radio name="MT1_L" value="1" /></td>
                    <td><Radio name="MT1_L" value="C" /></td>
                    <td className="segment">MT 1</td>
                    <td><Radio name="MT1_R" value="C" /></td>
                    <td><Radio name="MT1_R" value="1" /></td>
                    <td><Radio name="MT1_R" value="2a" /></td>
                    <td><Radio name="MT1_R" value="2b" /></td>
                    <td><Radio name="MT1_R" value="3" /></td>
                    <td rowSpan="5"><input className="mt" type="text" name="MT_R_count" /></td>
                    <td><Radio name="MT1_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="MT2_L" value="0" /></td>
                    <td><Radio name="MT2_L" value="3" /></td>
                    <td><Radio name="MT2_L" value="2b" /></td>
                    <td><Radio name="MT2_L" value="2a" /></td>
                    <td><Radio name="MT2_L" value="1" /></td>
                    <td><Radio name="MT2_L" value="C" /></td>
                    <td className="segment">MT 2</td>
                    <td><Radio name="MT2_R" value="C" /></td>
                    <td><Radio name="MT2_R" value="1" /></td>
                    <td><Radio name="MT2_R" value="2a" /></td>
                    <td><Radio name="MT2_R" value="2b" /></td>
                    <td><Radio name="MT2_R" value="3" /></td>
                    <td><Radio name="MT2_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="MT3_L" value="0" /></td>
                    <td><Radio name="MT3_L" value="3" /></td>
                    <td><Radio name="MT3_L" value="2b" /></td>
                    <td><Radio name="MT3_L" value="2a" /></td>
                    <td><Radio name="MT3_L" value="1" /></td>
                    <td><Radio name="MT3_L" value="C" /></td>
                    <td className="segment">MT 3</td>
                    <td><Radio name="MT3_R" value="C" /></td>
                    <td><Radio name="MT3_R" value="1" /></td>
                    <td><Radio name="MT3_R" value="2a" /></td>
                    <td><Radio name="MT3_R" value="2b" /></td>
                    <td><Radio name="MT3_R" value="3" /></td>
                    <td><Radio name="MT3_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="MT4_L" value="0" /></td>
                    <td><Radio name="MT4_L" value="3" /></td>
                    <td><Radio name="MT4_L" value="2b" /></td>
                    <td><Radio name="MT4_L" value="2a" /></td>
                    <td><Radio name="MT4_L" value="1" /></td>
                    <td><Radio name="MT4_L" value="C" /></td>
                    <td className="segment">MT 4</td>
                    <td><Radio name="MT4_R" value="C" /></td>
                    <td><Radio name="MT4_R" value="1" /></td>
                    <td><Radio name="MT4_R" value="2a" /></td>
                    <td><Radio name="MT4_R" value="2b" /></td>
                    <td><Radio name="MT4_R" value="3" /></td>
                    <td><Radio name="MT4_R" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="MT5_L" value="0" /></td>
                    <td><Radio name="MT5_L" value="3" /></td>
                    <td><Radio name="MT5_L" value="2b" /></td>
                    <td><Radio name="MT5_L" value="2a" /></td>
                    <td><Radio name="MT5_L" value="1" /></td>
                    <td><Radio name="MT5_L" value="C" /></td>
                    <td className="segment">MT 5</td>
                    <td><Radio name="MT5_R" value="C" /></td>
                    <td><Radio name="MT5_R" value="1" /></td>
                    <td><Radio name="MT5_R" value="2a" /></td>
                    <td><Radio name="MT5_R" value="2b" /></td>
                    <td><Radio name="MT5_R" value="3" /></td>
                    <td><Radio name="MT5_R" value="0" /></td>
                  </tr>
                </tbody>
              </table>

              <div className="phalanges">
                <table className="osteo">
                  <thead>
                    <tr>
                      <th />
                      <th>#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Prox. foot phalanges</th>
                      <td><input type="text" name="Phalanx_P_count_foot" /></td>
                    </tr>
                    <tr>
                      <th>Int. foot phalanges</th>
                      <td><input type="text" name="Phalanx_I_count_foot" /></td>
                    </tr>
                    <tr>
                      <th>Dist. foot phalanges</th>
                      <td><input type="text" name="Phalanx_D_count_foot" /></td>
                    </tr>
                  </tbody>
                </table>

                <label>
                  <div># (juv.)</div>
                  <input type="text" name="Phalanx_juv_count_foot" />
                </label>
              </div>
            </div>
          </div>

          <div className="osteo-row">
            <div className="osteo-column">
              <table className="osteo vertebrae">
                <thead>
                  <tr className="sides">
                    <th />
                    <th className="hspace" />
                    <th colSpan="7">Centrum (body)</th>
                    <th className="hspace" />
                    <th colSpan="2" />
                    <th className="hspace" />
                    <th colSpan="7">Left arch</th>
                    <th className="hspace" />
                    <th colSpan="7">Right arch</th>
                  </tr>
                  <tr className="labels">
                    <th />
                    <th className="hspace" />
                    <th />
                    <th className="centrum"><span>#</span></th>
                    <th className="centrum"><span>&lt;25%</span></th>
                    <th className="centrum"><span>25-50%</span></th>
                    <th className="centrum"><span>50-75%</span></th>
                    <th className="centrum"><span>&gt;75%</span></th>
                    <th className="centrum complete"><span>compl.</span></th>
                    <th className="hspace" />
                    <th />
                    <th className="complete"><span>compl.</span></th>
                    <th className="hspace" />
                    <th className="arch complete"><span>compl.</span></th>
                    <th><span>&gt;75%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>&lt;25%</span></th>
                    <th><span>#</span></th>
                    <th />
                    <th className="hspace" />
                    <th className="arch complete"><span>compl.</span></th>
                    <th><span>&gt;75%</span></th>
                    <th><span>50-75%</span></th>
                    <th><span>25-50%</span></th>
                    <th><span>&lt;25%</span></th>
                    <th><span>#</span></th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Radio name="Vertebrae_complete" value="0" /></td>
                    <td className="hspace" rowSpan="8" />
                    <td colSpan="7" />
                    <td className="hspace" rowSpan="8" />
                    <td />
                    <td><Radio name="Vertebrae_complete" value="C" /></td>
                    <td className="hspace" rowSpan="8" />
                    <td colSpan="7" />
                    <td className="hspace" rowSpan="8" />
                  </tr>
                  <tr>
                    <td><Radio name="C1_complete" value="0" /></td>
                    <td colSpan="7" />
                    <td className="segment">C1</td>
                    <td><Radio name="C1_complete" value="C" /></td>

                    <td><Radio name="C1_L_arch" value="C" /></td>
                    <td><Radio name="C1_L_arch" value="1" /></td>
                    <td><Radio name="C1_L_arch" value="2a" /></td>
                    <td><Radio name="C1_L_arch" value="2b" /></td>
                    <td><Radio name="C1_L_arch" value="3" /></td>
                    <td rowSpan="7"><input type="text" name="C_L_arch_count" /></td>
                    <td><Radio name="C1_L_arch" value="0" /></td>

                    <td><Radio name="C1_R_arch" value="C" /></td>
                    <td><Radio name="C1_R_arch" value="1" /></td>
                    <td><Radio name="C1_R_arch" value="2a" /></td>
                    <td><Radio name="C1_R_arch" value="2b" /></td>
                    <td><Radio name="C1_R_arch" value="3" /></td>
                    <td rowSpan="7"><input type="text" name="C_R_arch_count" /></td>
                    <td><Radio name="C1_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="C2_complete" value="0" /></td>

                    <td><Radio name="C2_centrum" value="0" /></td>
                    <td rowSpan="6"><input type="text" name="C_centra_count" /></td>
                    <td><Radio name="C2_centrum" value="3" /></td>
                    <td><Radio name="C2_centrum" value="2b" /></td>
                    <td><Radio name="C2_centrum" value="2a" /></td>
                    <td><Radio name="C2_centrum" value="1" /></td>
                    <td><Radio name="C2_centrum" value="C" /></td>

                    <td className="segment">C2</td>
                    <td><Radio name="C2_complete" value="C" /></td>

                    <td><Radio name="C2_L_arch" value="C" /></td>
                    <td><Radio name="C2_L_arch" value="1" /></td>
                    <td><Radio name="C2_L_arch" value="2a" /></td>
                    <td><Radio name="C2_L_arch" value="2b" /></td>
                    <td><Radio name="C2_L_arch" value="3" /></td>
                    <td><Radio name="C2_L_arch" value="0" /></td>

                    <td><Radio name="C2_R_arch" value="C" /></td>
                    <td><Radio name="C2_R_arch" value="1" /></td>
                    <td><Radio name="C2_R_arch" value="2a" /></td>
                    <td><Radio name="C2_R_arch" value="2b" /></td>
                    <td><Radio name="C2_R_arch" value="3" /></td>
                    <td><Radio name="C2_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="C3_complete" value="0" /></td>

                    <td><Radio name="C3_centrum" value="0" /></td>
                    <td><Radio name="C3_centrum" value="3" /></td>
                    <td><Radio name="C3_centrum" value="2b" /></td>
                    <td><Radio name="C3_centrum" value="2a" /></td>
                    <td><Radio name="C3_centrum" value="1" /></td>
                    <td><Radio name="C3_centrum" value="C" /></td>

                    <td className="segment">C3-6 (~3)</td>
                    <td><Radio name="C3_complete" value="C" /></td>

                    <td><Radio name="C3_L_arch" value="C" /></td>
                    <td><Radio name="C3_L_arch" value="1" /></td>
                    <td><Radio name="C3_L_arch" value="2a" /></td>
                    <td><Radio name="C3_L_arch" value="2b" /></td>
                    <td><Radio name="C3_L_arch" value="3" /></td>
                    <td><Radio name="C3_L_arch" value="0" /></td>

                    <td><Radio name="C3_R_arch" value="C" /></td>
                    <td><Radio name="C3_R_arch" value="1" /></td>
                    <td><Radio name="C3_R_arch" value="2a" /></td>
                    <td><Radio name="C3_R_arch" value="2b" /></td>
                    <td><Radio name="C3_R_arch" value="3" /></td>
                    <td><Radio name="C3_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="C4_complete" value="0" /></td>

                    <td><Radio name="C4_centrum" value="0" /></td>
                    <td><Radio name="C4_centrum" value="3" /></td>
                    <td><Radio name="C4_centrum" value="2b" /></td>
                    <td><Radio name="C4_centrum" value="2a" /></td>
                    <td><Radio name="C4_centrum" value="1" /></td>
                    <td><Radio name="C4_centrum" value="C" /></td>

                    <td className="segment">C3-6 (~4)</td>
                    <td><Radio name="C4_complete" value="C" /></td>

                    <td><Radio name="C4_L_arch" value="C" /></td>
                    <td><Radio name="C4_L_arch" value="1" /></td>
                    <td><Radio name="C4_L_arch" value="2a" /></td>
                    <td><Radio name="C4_L_arch" value="2b" /></td>
                    <td><Radio name="C4_L_arch" value="3" /></td>
                    <td><Radio name="C4_L_arch" value="0" /></td>

                    <td><Radio name="C4_R_arch" value="C" /></td>
                    <td><Radio name="C4_R_arch" value="1" /></td>
                    <td><Radio name="C4_R_arch" value="2a" /></td>
                    <td><Radio name="C4_R_arch" value="2b" /></td>
                    <td><Radio name="C4_R_arch" value="3" /></td>
                    <td><Radio name="C4_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="C5_complete" value="0" /></td>

                    <td><Radio name="C5_centrum" value="0" /></td>
                    <td><Radio name="C5_centrum" value="3" /></td>
                    <td><Radio name="C5_centrum" value="2b" /></td>
                    <td><Radio name="C5_centrum" value="2a" /></td>
                    <td><Radio name="C5_centrum" value="1" /></td>
                    <td><Radio name="C5_centrum" value="C" /></td>

                    <td className="segment">C3-6 (~5)</td>
                    <td><Radio name="C5_complete" value="C" /></td>

                    <td><Radio name="C5_L_arch" value="C" /></td>
                    <td><Radio name="C5_L_arch" value="1" /></td>
                    <td><Radio name="C5_L_arch" value="2a" /></td>
                    <td><Radio name="C5_L_arch" value="2b" /></td>
                    <td><Radio name="C5_L_arch" value="3" /></td>
                    <td><Radio name="C5_L_arch" value="0" /></td>

                    <td><Radio name="C5_R_arch" value="C" /></td>
                    <td><Radio name="C5_R_arch" value="1" /></td>
                    <td><Radio name="C5_R_arch" value="2a" /></td>
                    <td><Radio name="C5_R_arch" value="2b" /></td>
                    <td><Radio name="C5_R_arch" value="3" /></td>
                    <td><Radio name="C5_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="C6_complete" value="0" /></td>

                    <td><Radio name="C6_centrum" value="0" /></td>
                    <td><Radio name="C6_centrum" value="3" /></td>
                    <td><Radio name="C6_centrum" value="2b" /></td>
                    <td><Radio name="C6_centrum" value="2a" /></td>
                    <td><Radio name="C6_centrum" value="1" /></td>
                    <td><Radio name="C6_centrum" value="C" /></td>

                    <td className="segment">C3-6 (~6)</td>
                    <td><Radio name="C6_complete" value="C" /></td>

                    <td><Radio name="C6_L_arch" value="C" /></td>
                    <td><Radio name="C6_L_arch" value="1" /></td>
                    <td><Radio name="C6_L_arch" value="2a" /></td>
                    <td><Radio name="C6_L_arch" value="2b" /></td>
                    <td><Radio name="C6_L_arch" value="3" /></td>
                    <td><Radio name="C6_L_arch" value="0" /></td>

                    <td><Radio name="C6_R_arch" value="C" /></td>
                    <td><Radio name="C6_R_arch" value="1" /></td>
                    <td><Radio name="C6_R_arch" value="2a" /></td>
                    <td><Radio name="C6_R_arch" value="2b" /></td>
                    <td><Radio name="C6_R_arch" value="3" /></td>
                    <td><Radio name="C6_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="C7_complete" value="0" /></td>

                    <td><Radio name="C7_centrum" value="0" /></td>
                    <td><Radio name="C7_centrum" value="3" /></td>
                    <td><Radio name="C7_centrum" value="2b" /></td>
                    <td><Radio name="C7_centrum" value="2a" /></td>
                    <td><Radio name="C7_centrum" value="1" /></td>
                    <td><Radio name="C7_centrum" value="C" /></td>

                    <td className="segment">C7</td>
                    <td><Radio name="C7_complete" value="C" /></td>

                    <td><Radio name="C7_L_arch" value="C" /></td>
                    <td><Radio name="C7_L_arch" value="1" /></td>
                    <td><Radio name="C7_L_arch" value="2a" /></td>
                    <td><Radio name="C7_L_arch" value="2b" /></td>
                    <td><Radio name="C7_L_arch" value="3" /></td>
                    <td><Radio name="C7_L_arch" value="0" /></td>

                    <td><Radio name="C7_R_arch" value="C" /></td>
                    <td><Radio name="C7_R_arch" value="1" /></td>
                    <td><Radio name="C7_R_arch" value="2a" /></td>
                    <td><Radio name="C7_R_arch" value="2b" /></td>
                    <td><Radio name="C7_R_arch" value="3" /></td>
                    <td><Radio name="C7_R_arch" value="0" /></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td />
                    <td className="hspace" rowSpan="13" />
                    <td colSpan="7" />
                    <td className="hspace" rowSpan="13" />
                    <td colSpan="2" />
                    <td className="hspace" rowSpan="13" />
                    <td colSpan="7" />
                    <td className="hspace" rowSpan="13" />
                  </tr>
                  <tr>
                    <td><Radio name="T1_complete" value="0" /></td>

                    <td><Radio name="T1_centrum" value="0" /></td>
                    <td rowSpan="12"><input type="text" name="T_centra_count" /></td>
                    <td><Radio name="T1_centrum" value="3" /></td>
                    <td><Radio name="T1_centrum" value="2b" /></td>
                    <td><Radio name="T1_centrum" value="2a" /></td>
                    <td><Radio name="T1_centrum" value="1" /></td>
                    <td><Radio name="T1_centrum" value="C" /></td>

                    <td className="segment">T1</td>
                    <td><Radio name="T1_complete" value="C" /></td>

                    <td><Radio name="T1_L_arch" value="C" /></td>
                    <td><Radio name="T1_L_arch" value="1" /></td>
                    <td><Radio name="T1_L_arch" value="2a" /></td>
                    <td><Radio name="T1_L_arch" value="2b" /></td>
                    <td><Radio name="T1_L_arch" value="3" /></td>
                    <td rowSpan="12"><input type="text" name="T_L_arch_count" /></td>
                    <td><Radio name="T1_L_arch" value="0" /></td>

                    <td><Radio name="T1_R_arch" value="C" /></td>
                    <td><Radio name="T1_R_arch" value="1" /></td>
                    <td><Radio name="T1_R_arch" value="2a" /></td>
                    <td><Radio name="T1_R_arch" value="2b" /></td>
                    <td><Radio name="T1_R_arch" value="3" /></td>
                    <td rowSpan="12"><input type="text" name="T_R_arch_count" /></td>
                    <td><Radio name="T1_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="T2_complete" value="0" /></td>

                    <td><Radio name="T2_centrum" value="0" /></td>
                    <td><Radio name="T2_centrum" value="3" /></td>
                    <td><Radio name="T2_centrum" value="2b" /></td>
                    <td><Radio name="T2_centrum" value="2a" /></td>
                    <td><Radio name="T2_centrum" value="1" /></td>
                    <td><Radio name="T2_centrum" value="C" /></td>

                    <td className="segment">T2-9 (~2)</td>
                    <td><Radio name="T2_complete" value="C" /></td>

                    <td><Radio name="T2_L_arch" value="C" /></td>
                    <td><Radio name="T2_L_arch" value="1" /></td>
                    <td><Radio name="T2_L_arch" value="2a" /></td>
                    <td><Radio name="T2_L_arch" value="2b" /></td>
                    <td><Radio name="T2_L_arch" value="3" /></td>
                    <td><Radio name="T2_L_arch" value="0" /></td>

                    <td><Radio name="T2_R_arch" value="C" /></td>
                    <td><Radio name="T2_R_arch" value="1" /></td>
                    <td><Radio name="T2_R_arch" value="2a" /></td>
                    <td><Radio name="T2_R_arch" value="2b" /></td>
                    <td><Radio name="T2_R_arch" value="3" /></td>
                    <td><Radio name="T2_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="T3_complete" value="0" /></td>

                    <td><Radio name="T3_centrum" value="0" /></td>
                    <td><Radio name="T3_centrum" value="3" /></td>
                    <td><Radio name="T3_centrum" value="2b" /></td>
                    <td><Radio name="T3_centrum" value="2a" /></td>
                    <td><Radio name="T3_centrum" value="1" /></td>
                    <td><Radio name="T3_centrum" value="C" /></td>

                    <td className="segment">T2-9 (~3)</td>
                    <td><Radio name="T3_complete" value="C" /></td>

                    <td><Radio name="T3_L_arch" value="C" /></td>
                    <td><Radio name="T3_L_arch" value="1" /></td>
                    <td><Radio name="T3_L_arch" value="2a" /></td>
                    <td><Radio name="T3_L_arch" value="2b" /></td>
                    <td><Radio name="T3_L_arch" value="3" /></td>
                    <td><Radio name="T3_L_arch" value="0" /></td>

                    <td><Radio name="T3_R_arch" value="C" /></td>
                    <td><Radio name="T3_R_arch" value="1" /></td>
                    <td><Radio name="T3_R_arch" value="2a" /></td>
                    <td><Radio name="T3_R_arch" value="2b" /></td>
                    <td><Radio name="T3_R_arch" value="3" /></td>
                    <td><Radio name="T3_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="T4_complete" value="0" /></td>

                    <td><Radio name="T4_centrum" value="0" /></td>
                    <td><Radio name="T4_centrum" value="3" /></td>
                    <td><Radio name="T4_centrum" value="2b" /></td>
                    <td><Radio name="T4_centrum" value="2a" /></td>
                    <td><Radio name="T4_centrum" value="1" /></td>
                    <td><Radio name="T4_centrum" value="C" /></td>

                    <td className="segment">T2-9 (~4)</td>
                    <td><Radio name="T4_complete" value="C" /></td>

                    <td><Radio name="T4_L_arch" value="C" /></td>
                    <td><Radio name="T4_L_arch" value="1" /></td>
                    <td><Radio name="T4_L_arch" value="2a" /></td>
                    <td><Radio name="T4_L_arch" value="2b" /></td>
                    <td><Radio name="T4_L_arch" value="3" /></td>
                    <td><Radio name="T4_L_arch" value="0" /></td>

                    <td><Radio name="T4_R_arch" value="C" /></td>
                    <td><Radio name="T4_R_arch" value="1" /></td>
                    <td><Radio name="T4_R_arch" value="2a" /></td>
                    <td><Radio name="T4_R_arch" value="2b" /></td>
                    <td><Radio name="T4_R_arch" value="3" /></td>
                    <td><Radio name="T4_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="T5_complete" value="0" /></td>

                    <td><Radio name="T5_centrum" value="0" /></td>
                    <td><Radio name="T5_centrum" value="3" /></td>
                    <td><Radio name="T5_centrum" value="2b" /></td>
                    <td><Radio name="T5_centrum" value="2a" /></td>
                    <td><Radio name="T5_centrum" value="1" /></td>
                    <td><Radio name="T5_centrum" value="C" /></td>

                    <td className="segment">T2-9 (~5)</td>
                    <td><Radio name="T5_complete" value="C" /></td>

                    <td><Radio name="T5_L_arch" value="C" /></td>
                    <td><Radio name="T5_L_arch" value="1" /></td>
                    <td><Radio name="T5_L_arch" value="2a" /></td>
                    <td><Radio name="T5_L_arch" value="2b" /></td>
                    <td><Radio name="T5_L_arch" value="3" /></td>
                    <td><Radio name="T5_L_arch" value="0" /></td>

                    <td><Radio name="T5_R_arch" value="C" /></td>
                    <td><Radio name="T5_R_arch" value="1" /></td>
                    <td><Radio name="T5_R_arch" value="2a" /></td>
                    <td><Radio name="T5_R_arch" value="2b" /></td>
                    <td><Radio name="T5_R_arch" value="3" /></td>
                    <td><Radio name="T5_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="T6_complete" value="0" /></td>

                    <td><Radio name="T6_centrum" value="0" /></td>
                    <td><Radio name="T6_centrum" value="3" /></td>
                    <td><Radio name="T6_centrum" value="2b" /></td>
                    <td><Radio name="T6_centrum" value="2a" /></td>
                    <td><Radio name="T6_centrum" value="1" /></td>
                    <td><Radio name="T6_centrum" value="C" /></td>

                    <td className="segment">T2-9 (~6)</td>
                    <td><Radio name="T6_complete" value="C" /></td>

                    <td><Radio name="T6_L_arch" value="C" /></td>
                    <td><Radio name="T6_L_arch" value="1" /></td>
                    <td><Radio name="T6_L_arch" value="2a" /></td>
                    <td><Radio name="T6_L_arch" value="2b" /></td>
                    <td><Radio name="T6_L_arch" value="3" /></td>
                    <td><Radio name="T6_L_arch" value="0" /></td>

                    <td><Radio name="T6_R_arch" value="C" /></td>
                    <td><Radio name="T6_R_arch" value="1" /></td>
                    <td><Radio name="T6_R_arch" value="2a" /></td>
                    <td><Radio name="T6_R_arch" value="2b" /></td>
                    <td><Radio name="T6_R_arch" value="3" /></td>
                    <td><Radio name="T6_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="T7_complete" value="0" /></td>

                    <td><Radio name="T7_centrum" value="0" /></td>
                    <td><Radio name="T7_centrum" value="3" /></td>
                    <td><Radio name="T7_centrum" value="2b" /></td>
                    <td><Radio name="T7_centrum" value="2a" /></td>
                    <td><Radio name="T7_centrum" value="1" /></td>
                    <td><Radio name="T7_centrum" value="C" /></td>

                    <td className="segment">T2-9 (~7)</td>
                    <td><Radio name="T7_complete" value="C" /></td>

                    <td><Radio name="T7_L_arch" value="C" /></td>
                    <td><Radio name="T7_L_arch" value="1" /></td>
                    <td><Radio name="T7_L_arch" value="2a" /></td>
                    <td><Radio name="T7_L_arch" value="2b" /></td>
                    <td><Radio name="T7_L_arch" value="3" /></td>
                    <td><Radio name="T7_L_arch" value="0" /></td>

                    <td><Radio name="T7_R_arch" value="C" /></td>
                    <td><Radio name="T7_R_arch" value="1" /></td>
                    <td><Radio name="T7_R_arch" value="2a" /></td>
                    <td><Radio name="T7_R_arch" value="2b" /></td>
                    <td><Radio name="T7_R_arch" value="3" /></td>
                    <td><Radio name="T7_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="T8_complete" value="0" /></td>

                    <td><Radio name="T8_centrum" value="0" /></td>
                    <td><Radio name="T8_centrum" value="3" /></td>
                    <td><Radio name="T8_centrum" value="2b" /></td>
                    <td><Radio name="T8_centrum" value="2a" /></td>
                    <td><Radio name="T8_centrum" value="1" /></td>
                    <td><Radio name="T8_centrum" value="C" /></td>

                    <td className="segment">T2-9 (~8)</td>
                    <td><Radio name="T8_complete" value="C" /></td>

                    <td><Radio name="T8_L_arch" value="C" /></td>
                    <td><Radio name="T8_L_arch" value="1" /></td>
                    <td><Radio name="T8_L_arch" value="2a" /></td>
                    <td><Radio name="T8_L_arch" value="2b" /></td>
                    <td><Radio name="T8_L_arch" value="3" /></td>
                    <td><Radio name="T8_L_arch" value="0" /></td>

                    <td><Radio name="T8_R_arch" value="C" /></td>
                    <td><Radio name="T8_R_arch" value="1" /></td>
                    <td><Radio name="T8_R_arch" value="2a" /></td>
                    <td><Radio name="T8_R_arch" value="2b" /></td>
                    <td><Radio name="T8_R_arch" value="3" /></td>
                    <td><Radio name="T8_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="T9_complete" value="0" /></td>

                    <td><Radio name="T9_centrum" value="0" /></td>
                    <td><Radio name="T9_centrum" value="3" /></td>
                    <td><Radio name="T9_centrum" value="2b" /></td>
                    <td><Radio name="T9_centrum" value="2a" /></td>
                    <td><Radio name="T9_centrum" value="1" /></td>
                    <td><Radio name="T9_centrum" value="C" /></td>

                    <td className="segment">T2-9 (~9)</td>
                    <td><Radio name="T9_complete" value="C" /></td>

                    <td><Radio name="T9_L_arch" value="C" /></td>
                    <td><Radio name="T9_L_arch" value="1" /></td>
                    <td><Radio name="T9_L_arch" value="2a" /></td>
                    <td><Radio name="T9_L_arch" value="2b" /></td>
                    <td><Radio name="T9_L_arch" value="3" /></td>
                    <td><Radio name="T9_L_arch" value="0" /></td>

                    <td><Radio name="T9_R_arch" value="C" /></td>
                    <td><Radio name="T9_R_arch" value="1" /></td>
                    <td><Radio name="T9_R_arch" value="2a" /></td>
                    <td><Radio name="T9_R_arch" value="2b" /></td>
                    <td><Radio name="T9_R_arch" value="3" /></td>
                    <td><Radio name="T9_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="T10_complete" value="0" /></td>

                    <td><Radio name="T10_centrum" value="0" /></td>
                    <td><Radio name="T10_centrum" value="3" /></td>
                    <td><Radio name="T10_centrum" value="2b" /></td>
                    <td><Radio name="T10_centrum" value="2a" /></td>
                    <td><Radio name="T10_centrum" value="1" /></td>
                    <td><Radio name="T10_centrum" value="C" /></td>

                    <td className="segment">T10</td>
                    <td><Radio name="T10_complete" value="C" /></td>

                    <td><Radio name="T10_L_arch" value="C" /></td>
                    <td><Radio name="T10_L_arch" value="1" /></td>
                    <td><Radio name="T10_L_arch" value="2a" /></td>
                    <td><Radio name="T10_L_arch" value="2b" /></td>
                    <td><Radio name="T10_L_arch" value="3" /></td>
                    <td><Radio name="T10_L_arch" value="0" /></td>

                    <td><Radio name="T10_R_arch" value="C" /></td>
                    <td><Radio name="T10_R_arch" value="1" /></td>
                    <td><Radio name="T10_R_arch" value="2a" /></td>
                    <td><Radio name="T10_R_arch" value="2b" /></td>
                    <td><Radio name="T10_R_arch" value="3" /></td>
                    <td><Radio name="T10_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="T11_complete" value="0" /></td>

                    <td><Radio name="T11_centrum" value="0" /></td>
                    <td><Radio name="T11_centrum" value="3" /></td>
                    <td><Radio name="T11_centrum" value="2b" /></td>
                    <td><Radio name="T11_centrum" value="2a" /></td>
                    <td><Radio name="T11_centrum" value="1" /></td>
                    <td><Radio name="T11_centrum" value="C" /></td>

                    <td className="segment">T11</td>
                    <td><Radio name="T11_complete" value="C" /></td>

                    <td><Radio name="T11_L_arch" value="C" /></td>
                    <td><Radio name="T11_L_arch" value="1" /></td>
                    <td><Radio name="T11_L_arch" value="2a" /></td>
                    <td><Radio name="T11_L_arch" value="2b" /></td>
                    <td><Radio name="T11_L_arch" value="3" /></td>
                    <td><Radio name="T11_L_arch" value="0" /></td>

                    <td><Radio name="T11_R_arch" value="C" /></td>
                    <td><Radio name="T11_R_arch" value="1" /></td>
                    <td><Radio name="T11_R_arch" value="2a" /></td>
                    <td><Radio name="T11_R_arch" value="2b" /></td>
                    <td><Radio name="T11_R_arch" value="3" /></td>
                    <td><Radio name="T11_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="T12_complete" value="0" /></td>

                    <td><Radio name="T12_centrum" value="0" /></td>
                    <td><Radio name="T12_centrum" value="3" /></td>
                    <td><Radio name="T12_centrum" value="2b" /></td>
                    <td><Radio name="T12_centrum" value="2a" /></td>
                    <td><Radio name="T12_centrum" value="1" /></td>
                    <td><Radio name="T12_centrum" value="C" /></td>

                    <td className="segment">T12</td>
                    <td><Radio name="T12_complete" value="C" /></td>

                    <td><Radio name="T12_L_arch" value="C" /></td>
                    <td><Radio name="T12_L_arch" value="1" /></td>
                    <td><Radio name="T12_L_arch" value="2a" /></td>
                    <td><Radio name="T12_L_arch" value="2b" /></td>
                    <td><Radio name="T12_L_arch" value="3" /></td>
                    <td><Radio name="T12_L_arch" value="0" /></td>

                    <td><Radio name="T12_R_arch" value="C" /></td>
                    <td><Radio name="T12_R_arch" value="1" /></td>
                    <td><Radio name="T12_R_arch" value="2a" /></td>
                    <td><Radio name="T12_R_arch" value="2b" /></td>
                    <td><Radio name="T12_R_arch" value="3" /></td>
                    <td><Radio name="T12_R_arch" value="0" /></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td />
                    <td className="hspace" rowSpan="6" />
                    <td colSpan="7" />
                    <td className="hspace" rowSpan="6" />
                    <td colSpan="2" />
                    <td className="hspace" rowSpan="6" />
                    <td colSpan="7" />
                    <td className="hspace" rowSpan="6" />
                  </tr>
                  <tr>
                    <td><Radio name="L1_complete" value="0" /></td>

                    <td><Radio name="L1_centrum" value="0" /></td>
                    <td rowSpan="5"><input type="text" name="L_centra_count" /></td>
                    <td><Radio name="L1_centrum" value="3" /></td>
                    <td><Radio name="L1_centrum" value="2b" /></td>
                    <td><Radio name="L1_centrum" value="2a" /></td>
                    <td><Radio name="L1_centrum" value="1" /></td>
                    <td><Radio name="L1_centrum" value="C" /></td>

                    <td className="segment">L1</td>
                    <td><Radio name="L1_complete" value="C" /></td>

                    <td><Radio name="L1_L_arch" value="C" /></td>
                    <td><Radio name="L1_L_arch" value="1" /></td>
                    <td><Radio name="L1_L_arch" value="2a" /></td>
                    <td><Radio name="L1_L_arch" value="2b" /></td>
                    <td><Radio name="L1_L_arch" value="3" /></td>
                    <td rowSpan="5"><input type="text" name="L_L_arch_count" /></td>
                    <td><Radio name="L1_L_arch" value="0" /></td>

                    <td><Radio name="L1_R_arch" value="C" /></td>
                    <td><Radio name="L1_R_arch" value="1" /></td>
                    <td><Radio name="L1_R_arch" value="2a" /></td>
                    <td><Radio name="L1_R_arch" value="2b" /></td>
                    <td><Radio name="L1_R_arch" value="3" /></td>
                    <td rowSpan="5"><input type="text" name="L_R_arch_count" /></td>
                    <td><Radio name="L1_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="L2_complete" value="0" /></td>

                    <td><Radio name="L2_centrum" value="0" /></td>
                    <td><Radio name="L2_centrum" value="3" /></td>
                    <td><Radio name="L2_centrum" value="2b" /></td>
                    <td><Radio name="L2_centrum" value="2a" /></td>
                    <td><Radio name="L2_centrum" value="1" /></td>
                    <td><Radio name="L2_centrum" value="C" /></td>

                    <td className="segment">L2</td>
                    <td><Radio name="L2_complete" value="C" /></td>

                    <td><Radio name="L2_L_arch" value="C" /></td>
                    <td><Radio name="L2_L_arch" value="1" /></td>
                    <td><Radio name="L2_L_arch" value="2a" /></td>
                    <td><Radio name="L2_L_arch" value="2b" /></td>
                    <td><Radio name="L2_L_arch" value="3" /></td>
                    <td><Radio name="L2_L_arch" value="0" /></td>

                    <td><Radio name="L2_R_arch" value="C" /></td>
                    <td><Radio name="L2_R_arch" value="1" /></td>
                    <td><Radio name="L2_R_arch" value="2a" /></td>
                    <td><Radio name="L2_R_arch" value="2b" /></td>
                    <td><Radio name="L2_R_arch" value="3" /></td>
                    <td><Radio name="L2_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="L3_complete" value="0" /></td>

                    <td><Radio name="L3_centrum" value="0" /></td>
                    <td><Radio name="L3_centrum" value="3" /></td>
                    <td><Radio name="L3_centrum" value="2b" /></td>
                    <td><Radio name="L3_centrum" value="2a" /></td>
                    <td><Radio name="L3_centrum" value="1" /></td>
                    <td><Radio name="L3_centrum" value="C" /></td>

                    <td className="segment">L3</td>
                    <td><Radio name="L3_complete" value="C" /></td>

                    <td><Radio name="L3_L_arch" value="C" /></td>
                    <td><Radio name="L3_L_arch" value="1" /></td>
                    <td><Radio name="L3_L_arch" value="2a" /></td>
                    <td><Radio name="L3_L_arch" value="2b" /></td>
                    <td><Radio name="L3_L_arch" value="3" /></td>
                    <td><Radio name="L3_L_arch" value="0" /></td>

                    <td><Radio name="L3_R_arch" value="C" /></td>
                    <td><Radio name="L3_R_arch" value="1" /></td>
                    <td><Radio name="L3_R_arch" value="2a" /></td>
                    <td><Radio name="L3_R_arch" value="2b" /></td>
                    <td><Radio name="L3_R_arch" value="3" /></td>
                    <td><Radio name="L3_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="L4_complete" value="0" /></td>

                    <td><Radio name="L4_centrum" value="0" /></td>
                    <td><Radio name="L4_centrum" value="3" /></td>
                    <td><Radio name="L4_centrum" value="2b" /></td>
                    <td><Radio name="L4_centrum" value="2a" /></td>
                    <td><Radio name="L4_centrum" value="1" /></td>
                    <td><Radio name="L4_centrum" value="C" /></td>

                    <td className="segment">L4</td>
                    <td><Radio name="L4_complete" value="C" /></td>

                    <td><Radio name="L4_L_arch" value="C" /></td>
                    <td><Radio name="L4_L_arch" value="1" /></td>
                    <td><Radio name="L4_L_arch" value="2a" /></td>
                    <td><Radio name="L4_L_arch" value="2b" /></td>
                    <td><Radio name="L4_L_arch" value="3" /></td>
                    <td><Radio name="L4_L_arch" value="0" /></td>

                    <td><Radio name="L4_R_arch" value="C" /></td>
                    <td><Radio name="L4_R_arch" value="1" /></td>
                    <td><Radio name="L4_R_arch" value="2a" /></td>
                    <td><Radio name="L4_R_arch" value="2b" /></td>
                    <td><Radio name="L4_R_arch" value="3" /></td>
                    <td><Radio name="L4_R_arch" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="L5_complete" value="0" /></td>

                    <td><Radio name="L5_centrum" value="0" /></td>
                    <td><Radio name="L5_centrum" value="3" /></td>
                    <td><Radio name="L5_centrum" value="2b" /></td>
                    <td><Radio name="L5_centrum" value="2a" /></td>
                    <td><Radio name="L5_centrum" value="1" /></td>
                    <td><Radio name="L5_centrum" value="C" /></td>

                    <td className="segment">L5</td>
                    <td><Radio name="L5_complete" value="C" /></td>

                    <td><Radio name="L5_L_arch" value="C" /></td>
                    <td><Radio name="L5_L_arch" value="1" /></td>
                    <td><Radio name="L5_L_arch" value="2a" /></td>
                    <td><Radio name="L5_L_arch" value="2b" /></td>
                    <td><Radio name="L5_L_arch" value="3" /></td>
                    <td><Radio name="L5_L_arch" value="0" /></td>

                    <td><Radio name="L5_R_arch" value="C" /></td>
                    <td><Radio name="L5_R_arch" value="1" /></td>
                    <td><Radio name="L5_R_arch" value="2a" /></td>
                    <td><Radio name="L5_R_arch" value="2b" /></td>
                    <td><Radio name="L5_R_arch" value="3" /></td>
                    <td><Radio name="L5_R_arch" value="0" /></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td />
                    <td className="hspace" rowSpan="8" />
                    <td colSpan="7" />
                    <td className="hspace" rowSpan="8" />
                    <td colSpan="2" />
                    <td className="hspace" rowSpan="7" />
                    <td colSpan="7" />
                    <td className="hspace" rowSpan="7" />
                  </tr>
                  <tr>
                    <td><Radio name="Sacrum_complete" value="0" /></td>

                    <td><Radio name="Sacrum" value="0" /></td>
                    <td rowSpan="6"><input type="text" name="S_centra_count" /></td>
                    <td><Radio name="Sacrum" value="3" /></td>
                    <td><Radio name="Sacrum" value="2b" /></td>
                    <td><Radio name="Sacrum" value="2a" /></td>
                    <td><Radio name="Sacrum" value="1" /></td>
                    <td><Radio name="Sacrum" value="C" /></td>

                    <td className="segment">Sacrum</td>
                    <td><Radio name="Sacrum_complete" value="C" /></td>

                    <td><Radio name="Sacrum_L_alae" value="C" /></td>
                    <td><Radio name="Sacrum_L_alae" value="1" /></td>
                    <td><Radio name="Sacrum_L_alae" value="2a" /></td>
                    <td><Radio name="Sacrum_L_alae" value="2b" /></td>
                    <td><Radio name="Sacrum_L_alae" value="3" /></td>
                    <td rowSpan="6"><input type="text" name="S_L_ala_count" /></td>
                    <td><Radio name="Sacrum_L_alae" value="0" /></td>

                    <td><Radio name="Sacrum_R_alae" value="C" /></td>
                    <td><Radio name="Sacrum_R_alae" value="1" /></td>
                    <td><Radio name="Sacrum_R_alae" value="2a" /></td>
                    <td><Radio name="Sacrum_R_alae" value="2b" /></td>
                    <td><Radio name="Sacrum_R_alae" value="3" /></td>
                    <td rowSpan="6"><input type="text" name="S_R_ala_count" /></td>
                    <td><Radio name="Sacrum_R_alae" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="S1_complete" value="0" /></td>

                    <td><Radio name="S1_centrum" value="0" /></td>
                    <td><Radio name="S1_centrum" value="3" /></td>
                    <td><Radio name="S1_centrum" value="2b" /></td>
                    <td><Radio name="S1_centrum" value="2a" /></td>
                    <td><Radio name="S1_centrum" value="1" /></td>
                    <td><Radio name="S1_centrum" value="C" /></td>

                    <td className="segment">S1</td>
                    <td><Radio name="S1_complete" value="C" /></td>

                    <td><Radio name="S1_L_ala" value="C" /></td>
                    <td><Radio name="S1_L_ala" value="1" /></td>
                    <td><Radio name="S1_L_ala" value="2a" /></td>
                    <td><Radio name="S1_L_ala" value="2b" /></td>
                    <td><Radio name="S1_L_ala" value="3" /></td>
                    <td><Radio name="S1_L_ala" value="0" /></td>

                    <td><Radio name="S1_R_ala" value="C" /></td>
                    <td><Radio name="S1_R_ala" value="1" /></td>
                    <td><Radio name="S1_R_ala" value="2a" /></td>
                    <td><Radio name="S1_R_ala" value="2b" /></td>
                    <td><Radio name="S1_R_ala" value="3" /></td>
                    <td><Radio name="S1_R_ala" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="S2_complete" value="0" /></td>

                    <td><Radio name="S2_centrum" value="0" /></td>
                    <td><Radio name="S2_centrum" value="3" /></td>
                    <td><Radio name="S2_centrum" value="2b" /></td>
                    <td><Radio name="S2_centrum" value="2a" /></td>
                    <td><Radio name="S2_centrum" value="1" /></td>
                    <td><Radio name="S2_centrum" value="C" /></td>

                    <td className="segment">S2</td>
                    <td><Radio name="S2_complete" value="C" /></td>

                    <td><Radio name="S2_L_ala" value="C" /></td>
                    <td><Radio name="S2_L_ala" value="1" /></td>
                    <td><Radio name="S2_L_ala" value="2a" /></td>
                    <td><Radio name="S2_L_ala" value="2b" /></td>
                    <td><Radio name="S2_L_ala" value="3" /></td>
                    <td><Radio name="S2_L_ala" value="0" /></td>

                    <td><Radio name="S2_R_ala" value="C" /></td>
                    <td><Radio name="S2_R_ala" value="1" /></td>
                    <td><Radio name="S2_R_ala" value="2a" /></td>
                    <td><Radio name="S2_R_ala" value="2b" /></td>
                    <td><Radio name="S2_R_ala" value="3" /></td>
                    <td><Radio name="S2_R_ala" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="S3_complete" value="0" /></td>

                    <td><Radio name="S3_centrum" value="0" /></td>
                    <td><Radio name="S3_centrum" value="3" /></td>
                    <td><Radio name="S3_centrum" value="2b" /></td>
                    <td><Radio name="S3_centrum" value="2a" /></td>
                    <td><Radio name="S3_centrum" value="1" /></td>
                    <td><Radio name="S3_centrum" value="C" /></td>

                    <td className="segment">S3</td>
                    <td><Radio name="S3_complete" value="C" /></td>

                    <td><Radio name="S3_L_ala" value="C" /></td>
                    <td><Radio name="S3_L_ala" value="1" /></td>
                    <td><Radio name="S3_L_ala" value="2a" /></td>
                    <td><Radio name="S3_L_ala" value="2b" /></td>
                    <td><Radio name="S3_L_ala" value="3" /></td>
                    <td><Radio name="S3_L_ala" value="0" /></td>

                    <td><Radio name="S3_R_ala" value="C" /></td>
                    <td><Radio name="S3_R_ala" value="1" /></td>
                    <td><Radio name="S3_R_ala" value="2a" /></td>
                    <td><Radio name="S3_R_ala" value="2b" /></td>
                    <td><Radio name="S3_R_ala" value="3" /></td>
                    <td><Radio name="S3_R_ala" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="S4_complete" value="0" /></td>

                    <td><Radio name="S4_centrum" value="0" /></td>
                    <td><Radio name="S4_centrum" value="3" /></td>
                    <td><Radio name="S4_centrum" value="2b" /></td>
                    <td><Radio name="S4_centrum" value="2a" /></td>
                    <td><Radio name="S4_centrum" value="1" /></td>
                    <td><Radio name="S4_centrum" value="C" /></td>

                    <td className="segment">S4</td>
                    <td><Radio name="S4_complete" value="C" /></td>

                    <td><Radio name="S4_L_ala" value="C" /></td>
                    <td><Radio name="S4_L_ala" value="1" /></td>
                    <td><Radio name="S4_L_ala" value="2a" /></td>
                    <td><Radio name="S4_L_ala" value="2b" /></td>
                    <td><Radio name="S4_L_ala" value="3" /></td>
                    <td><Radio name="S4_L_ala" value="0" /></td>

                    <td><Radio name="S4_R_ala" value="C" /></td>
                    <td><Radio name="S4_R_ala" value="1" /></td>
                    <td><Radio name="S4_R_ala" value="2a" /></td>
                    <td><Radio name="S4_R_ala" value="2b" /></td>
                    <td><Radio name="S4_R_ala" value="3" /></td>
                    <td><Radio name="S4_R_ala" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="S5_complete" value="0" /></td>

                    <td><Radio name="S5_centrum" value="0" /></td>
                    <td><Radio name="S5_centrum" value="3" /></td>
                    <td><Radio name="S5_centrum" value="2b" /></td>
                    <td><Radio name="S5_centrum" value="2a" /></td>
                    <td><Radio name="S5_centrum" value="1" /></td>
                    <td><Radio name="S5_centrum" value="C" /></td>

                    <td className="segment">S5</td>
                    <td><Radio name="S5_complete" value="C" /></td>

                    <td><Radio name="S5_L_ala" value="C" /></td>
                    <td><Radio name="S5_L_ala" value="1" /></td>
                    <td><Radio name="S5_L_ala" value="2a" /></td>
                    <td><Radio name="S5_L_ala" value="2b" /></td>
                    <td><Radio name="S5_L_ala" value="3" /></td>
                    <td><Radio name="S5_L_ala" value="0" /></td>

                    <td><Radio name="S5_R_ala" value="C" /></td>
                    <td><Radio name="S5_R_ala" value="1" /></td>
                    <td><Radio name="S5_R_ala" value="2a" /></td>
                    <td><Radio name="S5_R_ala" value="2b" /></td>
                    <td><Radio name="S5_R_ala" value="3" /></td>
                    <td><Radio name="S5_R_ala" value="0" /></td>
                  </tr>
                  <tr>
                    <td><Radio name="Coccyx_complete" value="0" /></td>

                    <td><Radio name="Coccyx" value="0" /></td>
                    <td />
                    <td><Radio name="Coccyx" value="3" /></td>
                    <td><Radio name="Coccyx" value="2b" /></td>
                    <td><Radio name="Coccyx" value="2a" /></td>
                    <td><Radio name="Coccyx" value="1" /></td>
                    <td><Radio name="Coccyx" value="C" /></td>

                    <td className="segment">Coccyx</td>
                    <td><Radio name="Coccyx_complete" value="C" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="osteo-column">
              <div className="osteo dental">
                <div className="permanent">
                  <h3>Permanent Dentition</h3>
                  <div className="key">0=absent; F=frag.; 1-5=wear stage</div>

                  {permanentDentZeroButton}

                  <fieldset className="upper">
                    <legend>Upper</legend>

                    <label style={{ left: 40, top: 219 }}>
                      RM
                      <sup>3</sup>
                      <input name="Teeth_UM3_R" type="text" style={{ left: -29, top: -2 }} />
                    </label>
                    <label style={{ left: 43, top: 194 }}>
                      RM
                      <sup>2</sup>
                      <input name="Teeth_UM2_R" type="text" style={{ left: -29, top: -3 }} />
                    </label>
                    <label style={{ left: 49, top: 167 }}>
                      RM
                      <sup>1</sup>
                      <input name="Teeth_UM1_R" type="text" style={{ left: -29, top: -9 }} />
                    </label>
                    <label style={{ left: 53, top: 143 }}>
                      RP
                      <sup>4</sup>
                      <input name="Teeth_UP4_R" type="text" style={{ left: -25, top: -11 }} />
                    </label>
                    <label style={{ left: 17, top: 102 }}>
                      RP
                      <sup>3</sup>
                      <input name="Teeth_UP3_R" type="text" style={{ left: 21, top: 12 }} />
                    </label>
                    <label style={{ left: 32, top: 76 }}>
                      RC
                      <sup>X</sup>
                      <input name="Teeth_UC_R" type="text" style={{ left: 16, top: 17 }} />
                    </label>
                    <label style={{ left: 55, top: 53 }}>
                      RI
                      <sup>2</sup>
                      <input name="Teeth_UI2_R" type="text" style={{ left: 11, top: 18 }} />
                    </label>
                    <label style={{ left: 92, top: 41 }}>
                      RI
                      <sup>1</sup>
                      <input name="Teeth_UI1_R" type="text" style={{ left: 0, top: 22 }} />
                    </label>

                    <label style={{ left: 124, top: 41 }}>
                      LI
                      <sup>1</sup>
                      <input name="Teeth_UI1_L" type="text" style={{ left: -4, top: 22 }} />
                    </label>
                    <label style={{ left: 160, top: 53 }}>
                      LI
                      <sup>2</sup>
                      <input name="Teeth_UI2_L" type="text" style={{ left: -14, top: 18 }} />
                    </label>
                    <label style={{ left: 179, top: 76 }}>
                      LC
                      <sup>X</sup>
                      <input name="Teeth_UC_L" type="text" style={{ left: -18, top: 17 }} />
                    </label>
                    <label style={{ left: 195, top: 102 }}>
                      LP
                      <sup>3</sup>
                      <input name="Teeth_UP3_L" type="text" style={{ left: -24, top: 12 }} />
                    </label>
                    <label style={{ left: 156, top: 143 }}>
                      LP
                      <sup>4</sup>
                      <input name="Teeth_UP4_L" type="text" style={{ left: 25, top: -11 }} />
                    </label>
                    <label style={{ left: 157, top: 167 }}>
                      LM
                      <sup>1</sup>
                      <input name="Teeth_UM1_L" type="text" style={{ left: 29, top: -9 }} />
                    </label>
                    <label style={{ left: 163, top: 194 }}>
                      LM
                      <sup>2</sup>
                      <input name="Teeth_UM2_L" type="text" style={{ left: 29, top: -3 }} />
                    </label>
                    <label style={{ left: 166, top: 219 }}>
                      LM
                      <sup>3</sup>
                      <input name="Teeth_UM3_L" type="text" style={{ left: 29, top: -2 }} />
                    </label>
                  </fieldset>

                  <fieldset className="lower">
                    <legend>Lower</legend>

                    <label style={{ left: 50, top: 284 }}>
                      RM
                      <sub>3</sub>
                      <input name="Teeth_LM3_R" type="text" style={{ left: -30, top: 0 }} />
                    </label>
                    <label style={{ left: 53, top: 314 }}>
                      RM
                      <sub>2</sub>
                      <input name="Teeth_LM2_R" type="text" style={{ left: -30, top: 2 }} />
                    </label>
                    <label style={{ left: 62, top: 341 }}>
                      RM
                      <sub>1</sub>
                      <input name="Teeth_LM1_R" type="text" style={{ left: -29, top: 7 }} />
                    </label>
                    <label style={{ left: 64, top: 367 }}>
                      RP
                      <sub>4</sub>
                      <input name="Teeth_LP4_R" type="text" style={{ left: -21, top: 9 }} />
                    </label>
                    <label style={{ left: 30, top: 412 }}>
                      RP
                      <sub>3</sub>
                      <input name="Teeth_LP3_R" type="text" style={{ left: 20, top: -14 }} />
                    </label>
                    <label style={{ left: 46, top: 434 }}>
                      RC
                      <sub>X</sub>
                      <input name="Teeth_LC_R" type="text" style={{ left: 15, top: -18 }} />
                    </label>
                    <label style={{ left: 77, top: 446 }}>
                      I
                      <sub>2</sub>
                      <input name="Teeth_LI2_R" type="text" style={{ left: 5, top: -18 }} />
                    </label>
                    <label style={{ left: 100, top: 453 }}>
                      I
                      <sub>1</sub>
                      <input name="Teeth_LI1_R" type="text" style={{ left: -1, top: -20 }} />
                    </label>

                    <label style={{ left: 122, top: 452 }}>
                      I
                      <sub>1</sub>
                      <input name="Teeth_LI1_L" type="text" style={{ left: -5, top: -20 }} />
                    </label>
                    <label style={{ left: 143, top: 445 }}>
                      I
                      <sub>2</sub>
                      <input name="Teeth_LI2_L" type="text" style={{ left: -9, top: -18 }} />
                    </label>
                    <label style={{ left: 162, top: 433 }}>
                      LC
                      <sub>X</sub>
                      <input name="Teeth_LC_L" type="text" style={{ left: -17, top: -18 }} />
                    </label>
                    <label style={{ left: 178, top: 412 }}>
                      LP
                      <sub>3</sub>
                      <input name="Teeth_LP3_L" type="text" style={{ left: -21, top: -15 }} />
                    </label>
                    <label style={{ left: 142, top: 367 }}>
                      LP
                      <sub>4</sub>
                      <input name="Teeth_LP4_L" type="text" style={{ left: 23, top: 8 }} />
                    </label>
                    <label style={{ left: 143, top: 341 }}>
                      LM
                      <sub>1</sub>
                      <input name="Teeth_LM1_L" type="text" style={{ left: 29, top: 7 }} />
                    </label>
                    <label style={{ left: 151, top: 314 }}>
                      LM
                      <sub>2</sub>
                      <input name="Teeth_LM2_L" type="text" style={{ left: 30, top: 2 }} />
                    </label>
                    <label style={{ left: 155, top: 284 }}>
                      LM
                      <sub>3</sub>
                      <input name="Teeth_LM3_L" type="text" style={{ left: 29, top: 0 }} />
                    </label>
                  </fieldset>
                </div>
                <div className="deciduous">
                  <h3>Deciduous Dentition</h3>
                  <div className="key">0=absent; F=frag.; 1-5=wear stage</div>

                  {deciduousDentZeroButton}

                  <fieldset className="upper">
                    <legend>Upper</legend>

                    <label style={{ left: 34, top: 143 }}>
                      Rdm
                      <sup>2</sup>
                      <input name="Teeth_decid_Udm2_R" type="text" style={{ left: -30, top: -3 }} />
                    </label>
                    <label style={{ left: 39, top: 115 }}>
                      Rdm
                      <sup>1</sup>
                      <input name="Teeth_decid_Udm1_R" type="text" style={{ left: -26, top: -8 }} />
                    </label>
                    <label style={{ left: 11, top: 71 }}>
                      Rdc
                      <sup>x</sup>
                      <input name="Teeth_decid_Udc_R" type="text" style={{ left: 21, top: 13 }} />
                    </label>
                    <label style={{ left: 39, top: 51 }}>
                      Rdi
                      <sup>2</sup>
                      <input name="Teeth_decid_Udi2_R" type="text" style={{ left: 7, top: 16 }} />
                    </label>
                    <label style={{ left: 68, top: 44 }}>
                      Rdi
                      <sup>1</sup>
                      <input name="Teeth_decid_Udi1_R" type="text" style={{ left: -1, top: 17 }} />
                    </label>

                    <label style={{ left: 94, top: 44 }}>
                      Ldi
                      <sup>1</sup>
                      <input name="Teeth_decid_Udi1_L" type="text" style={{ left: -4, top: 17 }} />
                    </label>
                    <label style={{ left: 121, top: 51 }}>
                      Ldi
                      <sup>2</sup>
                      <input name="Teeth_decid_Udi2_L" type="text" style={{ left: -11, top: 16 }} />
                    </label>
                    <label style={{ left: 147, top: 73 }}>
                      Ldc
                      <sup>x</sup>
                      <input name="Teeth_decid_Udc_L" type="text" style={{ left: -24, top: 11 }} />
                    </label>
                    <label style={{ left: 111, top: 115 }}>
                      Ldm
                      <sup>1</sup>
                      <input name="Teeth_decid_Udm1_L" type="text" style={{ left: 27, top: -8 }} />
                    </label>
                    <label style={{ left: 116, top: 143 }}>
                      Ldm
                      <sup>2</sup>
                      <input name="Teeth_decid_Udm2_L" type="text" style={{ left: 31, top: -3 }} />
                    </label>
                  </fieldset>

                  <fieldset className="lower">
                    <legend>Lower</legend>

                    <label style={{ left: 36, top: 198 }}>
                      Rdm
                      <sub>2</sub>
                      <input name="Teeth_decid_Ldm2_R" type="text" style={{ left: -29, top: 1 }} />
                    </label>
                    <label style={{ left: 47, top: 228 }}>
                      Rdm
                      <sub>1</sub>
                      <input name="Teeth_decid_Ldm1_R" type="text" style={{ left: -28, top: 4 }} />
                    </label>
                    <label style={{ left: 27, top: 272 }}>
                      dc
                      <sub>x</sub>
                      <input name="Teeth_decid_Ldc_R" type="text" style={{ left: 11, top: -17 }} />
                    </label>
                    <label style={{ left: 50, top: 286 }}>
                      di
                      <sub>2</sub>
                      <input name="Teeth_decid_Ldi2_R" type="text" style={{ left: 4, top: -17 }} />
                    </label>
                    <label style={{ left: 72, top: 290 }}>
                      di
                      <sub>1</sub>
                      <input name="Teeth_decid_Ldi1_R" type="text" style={{ left: 0, top: -18 }} />
                    </label>

                    <label style={{ left: 93, top: 290 }}>
                      di
                      <sub>1</sub>
                      <input name="Teeth_decid_Ldi1_L" type="text" style={{ left: -3, top: -18 }} />
                    </label>
                    <label style={{ left: 115, top: 285 }}>
                      di
                      <sub>2</sub>
                      <input name="Teeth_decid_Ldi2_L" type="text" style={{ left: -7, top: -16 }} />
                    </label>
                    <label style={{ left: 136, top: 272 }}>
                      dc
                      <sub>x</sub>
                      <input name="Teeth_decid_Ldc_L" type="text" style={{ left: -15, top: -17 }} />
                    </label>
                    <label style={{ left: 102, top: 228 }}>
                      Ldm
                      <sub>1</sub>
                      <input name="Teeth_decid_Ldm1_L" type="text" style={{ left: 28, top: 4 }} />
                    </label>
                    <label style={{ left: 113, top: 198 }}>
                      Ldm
                      <sub>2</sub>
                      <input name="Teeth_decid_Ldm2_L" type="text" style={{ left: 30, top: 0 }} />
                    </label>
                  </fieldset>

                  <div className="immVertFrags">
                    <h3>Imm. Vert. frags</h3>
                    Count
                    {' '}
                    <input type="text" name="Teeth_immVertFragsCount" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      /* eslint-enable
         jsx-a11y/control-has-associated-label,
         jsx-a11y/label-has-associated-control */
    }

    renderForm(component) {
      if (!component) {
        return component;
      }

      const { readOnly, value: data } = this.props;
      const { type, props } = component;

      if (!props) {
        return component;
      }

      const { name, value, children } = props;
      const overrideProps = {};

      if (type === Radio || type === Checkbox) {
        overrideProps.checked = (data.get(name) === value);
        overrideProps.disabled = readOnly;
        overrideProps.onChange = this.handleChange;

        this.radioOrCheckboxFieldNames[name] = true;
      } else if (type === 'input') {
        overrideProps.disabled = readOnly;
        overrideProps.value = data.get(name) || '';
        overrideProps.onChange = this.handleChange;

        this.textFieldNames[name] = true;
      }

      return React.cloneElement(component, overrideProps, React.Children.map(
        children, (child) => this.renderForm(child),
      ));
    }

    render() {
      const {
        value,
      } = this.props;

      return (value ? this.renderForm(this.renderTemplate()) : null);
    }
  }

  OsteoInventoryInput.propTypes = propTypes;

  return OsteoInventoryInput;
};
