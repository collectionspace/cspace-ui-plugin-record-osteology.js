import { defineMessages } from 'react-intl';

export default {
  record: defineMessages({
    name: {
      id: 'record.osteology.name',
      description: 'The name of the osteology record type.',
      defaultMessage: 'Osteology',
    },
    collectionName: {
      id: 'record.osteology.collectionName',
      description: 'The name of a collection of records of the osteology type.',
      defaultMessage: 'Osteology',
    },
  }),
  inputTable: defineMessages({
    completeness: {
      id: 'inputTable.osteology.completeness',
      defaultMessage: 'Completeness',
    },
    dentition: {
      id: 'inputTable.osteology.dentition',
      defaultMessage: 'Dentition',
    },
    mortuaryTreatment: {
      id: 'inputTable.osteology.mortuaryTreatment',
      defaultMessage: 'Mortuary treatment',
    },
    behrensmeyer: {
      id: 'inputTable.osteology.behrensmeyer',
      defaultMessage: 'Behrensmeyer stage',
    },
  }),
  panel: defineMessages({
    info: {
      id: 'panel.osteology.info',
      defaultMessage: 'Osteology Information',
    },
    inventory: {
      id: 'panel.osteology.inventory',
      defaultMessage: 'Inventory',
    },
  }),
};
