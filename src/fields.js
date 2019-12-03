import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    StructuredDateInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
    DATA_TYPE_FLOAT,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:osteology_common',
          },
        },
      },
      ...extensions.core.fields,
      'ns2:osteology_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/osteology',
          },
        },
        InventoryID: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.osteology_common.InventoryID.name',
                defaultMessage: 'Inventory ID',
              },
            }),
            required: true,
            view: {
              type: TextInput,
            },
          },
        },
        osteoAgeEstimateGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          osteoAgeEstimateGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.osteology_common.osteoAgeEstimateGroup.name',
                  defaultMessage: 'Age estimate',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            osteoAgeEstimateVerbatim: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.osteoAgeEstimateVerbatim.fullName',
                    defaultMessage: 'Age estimate verbatim',
                  },
                  name: {
                    id: 'field.osteology_common.osteoAgeEstimateVerbatim.name',
                    defaultMessage: 'Verbatim',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            osteoAgeEstimateLower: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.osteoAgeEstimateLower.fullName',
                    defaultMessage: 'Age estimate lower',
                  },
                  name: {
                    id: 'field.osteology_common.osteoAgeEstimateLower.name',
                    defaultMessage: 'Lower (years)',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            osteoAgeEstimateUpper: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.osteoAgeEstimateUpper.fullName',
                    defaultMessage: 'Age estimate upper',
                  },
                  name: {
                    id: 'field.osteology_common.osteoAgeEstimateUpper.name',
                    defaultMessage: 'Upper (years)',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            osteoAgeEstimateDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.osteoAgeEstimateDateGroup.fullName',
                    defaultMessage: 'Age estimate date',
                  },
                  groupName: {
                    id: 'field.osteology_common.osteoAgeEstimateDateGroup.groupName',
                    defaultMessage: 'Date',
                  },
                  name: {
                    id: 'field.osteology_common.osteoAgeEstimateDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            osteoAgeEstimateAnalyst: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.osteoAgeEstimateAnalyst.fullName',
                    defaultMessage: 'Age estimate analyst',
                  },
                  name: {
                    id: 'field.osteology_common.osteoAgeEstimateAnalyst.name',
                    defaultMessage: 'Analyst',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local',
                  },
                },
              },
            },
            osteoAgeEstimateNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.osteoAgeEstimateNote.fullName',
                    defaultMessage: 'Age estimate note',
                  },
                  name: {
                    id: 'field.osteology_common.osteoAgeEstimateNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        sexDeterminationGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          sexDeterminationGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.osteology_common.sexDeterminationGroup.name',
                  defaultMessage: 'Sex determination',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            sexDetermination: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.sexDetermination.fullName',
                    defaultMessage: 'Sex determination',
                  },
                  name: {
                    id: 'field.osteology_common.sexDetermination.name',
                    defaultMessage: 'Sex',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'sexDeterminations',
                  },
                },
              },
            },
            sexDeterminationDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.sexDeterminationDateGroup.fullName',
                    defaultMessage: 'Sex determination date',
                  },
                  groupName: {
                    id: 'field.osteology_common.sexDeterminationDateGroup.groupName',
                    defaultMessage: 'Date',
                  },
                  name: {
                    id: 'field.osteology_common.sexDeterminationDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            sexDeterminationAnalyst: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.sexDeterminationAnalyst.fullName',
                    defaultMessage: 'Sex determination analyst',
                  },
                  name: {
                    id: 'field.osteology_common.sexDeterminationAnalyst.name',
                    defaultMessage: 'Analyst',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local',
                  },
                },
              },
            },
            sexDeterminationNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.sexDeterminationNote.fullName',
                    defaultMessage: 'Sex determination note',
                  },
                  name: {
                    id: 'field.osteology_common.sexDeterminationNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        completeness: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.osteology_common.completeness.fullName',
                defaultMessage: 'Completeness level',
              },
              name: {
                id: 'field.osteology_common.completeness.name',
                defaultMessage: 'Level',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'osteocompleteness',
              },
            },
          },
        },
        completenessNote: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.osteology_common.completenessNote.fullName',
                defaultMessage: 'Completeness note',
              },
              name: {
                id: 'field.osteology_common.completenessNote.name',
                defaultMessage: 'Note',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        molarsPresent: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.osteology_common.molarsPresent.name',
                defaultMessage: 'Molars present',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        dentitionScore: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.osteology_common.dentitionScore.fullName',
                defaultMessage: 'Dentition score',
              },
              name: {
                id: 'field.osteology_common.dentitionScore.name',
                defaultMessage: 'Score',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'dentitionscore',
              },
            },
          },
        },
        dentitionNote: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.osteology_common.dentitionNote.fullName',
                defaultMessage: 'Dentition note',
              },
              name: {
                id: 'field.osteology_common.dentitionNote.name',
                defaultMessage: 'Note',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        mortuaryTreatment: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.osteology_common.mortuaryTreatment.fullName',
                defaultMessage: 'Mortuary treatment',
              },
              name: {
                id: 'field.osteology_common.mortuaryTreatment.name',
                defaultMessage: 'Treatment',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'mortuarytreatment',
              },
            },
          },
        },
        mortuaryTreatmentNote: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.osteology_common.mortuaryTreatmentNote.fullName',
                defaultMessage: 'Mortuary treatment note',
              },
              name: {
                id: 'field.osteology_common.mortuaryTreatmentNote.name',
                defaultMessage: 'Note',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        behrensmeyerSingleLower: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.osteology_common.behrensmeyerSingleLower.fullName',
                defaultMessage: 'Behrensmeyer stage - Single/lower',
              },
              name: {
                id: 'field.osteology_common.behrensmeyerSingleLower.name',
                defaultMessage: 'Single/lower',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'behrensmeyer',
              },
            },
          },
        },
        behrensmeyerUpper: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.osteology_common.behrensmeyerUpper.fullName',
                defaultMessage: 'Behrensmeyer stage - Upper',
              },
              name: {
                id: 'field.osteology_common.behrensmeyerUpper.name',
                defaultMessage: 'Upper',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'behrensmeyer',
              },
            },
          },
        },
        NotesOnElementInventory: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_common.NotesOnElementInventory.name',
                defaultMessage: 'Inventory note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        pathologyNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_common.pathologyNote.name',
                defaultMessage: 'General pathology and trauma note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        InventoryIsComplete: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.osteology_common.InventoryIsComplete.name',
                defaultMessage: 'Inventory complete',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        inventoryAnalyst: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.osteology_common.inventoryAnalyst.fullName',
                defaultMessage: 'Inventory analyst',
              },
              name: {
                id: 'field.osteology_common.inventoryAnalyst.name',
                defaultMessage: 'Analyst',
              },
            }),
            required: true,
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local',
              },
            },
          },
        },
        inventoryDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              fullName: {
                id: 'field.osteology_common.inventoryDate.fullName',
                defaultMessage: 'Inventory date',
              },
              name: {
                id: 'field.osteology_common.inventoryDate.name',
                defaultMessage: 'Date',
              },
            }),
            required: true,
            view: {
              type: DateInput,
            },
          },
        },
        // Osteo inventory fields.
        // NB: The below configuration is currently only used on advanced search. These fields are
        // also hardcoded into osteoInventoryInput.jsx for display on the record editor.
        Acetabulum_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Acetabulum_L.name',
                defaultMessage: 'Acetabulum left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Acetabulum_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Acetabulum_R.name',
                defaultMessage: 'Acetabulum right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Auricular_surf_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Auricular_surf_L.name',
                defaultMessage: 'Auricular surf. left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Auricular_surf_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Auricular_surf_R.name',
                defaultMessage: 'Auricular surf. right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C1_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C1_L_arch.name',
                defaultMessage: 'C1 left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C1_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C1_R_arch.name',
                defaultMessage: 'C1 right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C1_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C1_complete.name',
                defaultMessage: 'C1',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        C2_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C2_L_arch.name',
                defaultMessage: 'C2 left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C2_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C2_R_arch.name',
                defaultMessage: 'C2 right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C2_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C2_centrum.name',
                defaultMessage: 'C2 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C2_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C2_complete.name',
                defaultMessage: 'C2',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        C3_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C3_L_arch.name',
                defaultMessage: 'C3-6 (~3) left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C3_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C3_R_arch.name',
                defaultMessage: 'C3-6 (~3) right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C3_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C3_centrum.name',
                defaultMessage: 'C3-6 (~3) centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C3_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C3_complete.name',
                defaultMessage: 'C3-6 (~3)',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        C4_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C4_L_arch.name',
                defaultMessage: 'C3-6 (~4) left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C4_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C4_R_arch.name',
                defaultMessage: 'C3-6 (~4) right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C4_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C4_centrum.name',
                defaultMessage: 'C3-6 (~4) centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C4_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C4_complete.name',
                defaultMessage: 'C3-6 (~4)',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        C5_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C5_L_arch.name',
                defaultMessage: 'C3-6 (~5) left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C5_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C5_R_arch.name',
                defaultMessage: 'C3-6 (~5) right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C5_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C5_centrum.name',
                defaultMessage: 'C3-6 (~5) centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C5_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C5_complete.name',
                defaultMessage: 'C3-6 (~5)',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        C6_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C6_L_arch.name',
                defaultMessage: 'C3-6 (~6) left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C6_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C6_R_arch.name',
                defaultMessage: 'C3-6 (~6) right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C6_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C6_centrum.name',
                defaultMessage: 'C3-6 (~6) centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C6_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C6_complete.name',
                defaultMessage: 'C3-6 (~6)',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        C7_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C7_L_arch.name',
                defaultMessage: 'C7 left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C7_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C7_R_arch.name',
                defaultMessage: 'C7 right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C7_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C7_centrum.name',
                defaultMessage: 'C7 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        C7_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C7_complete.name',
                defaultMessage: 'C7',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        C_L_arch_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C_L_arch_count.name',
                defaultMessage: 'C left arch count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        C_R_arch_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C_R_arch_count.name',
                defaultMessage: 'C right arch count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        C_centra_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.C_centra_count.name',
                defaultMessage: 'C centra count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Calcaneus_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Calcaneus_L.name',
                defaultMessage: 'Calcaneus left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Calcaneus_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Calcaneus_R.name',
                defaultMessage: 'Calcaneus right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Capitate_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Capitate_L.name',
                defaultMessage: 'Capitate left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Capitate_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Capitate_R.name',
                defaultMessage: 'Capitate right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Carpals_L_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Carpals_L_complete.name',
                defaultMessage: 'Carpals left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Carpals_R_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Carpals_R_complete.name',
                defaultMessage: 'Carpals right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Clavicle_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Clavicle_L.name',
                defaultMessage: 'Clavicle left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Clavicle_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Clavicle_R.name',
                defaultMessage: 'Clavicle right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Coccyx: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Coccyx.name',
                defaultMessage: 'Coccyx',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        // Coccyx_complete is redundant with coccyx. Don't show it in search.
        // Coccyx_complete: {
        //   [config]: {
        //     messages: {
        //       name: {
        //         id: 'field.osteology_common.Coccyx_complete.name',
        //         defaultMessage: 'Coccyx',
        //       },
        //     },
        //     view: {
        //       type: OptionPickerInput,
        //       props: {
        //         source: 'osteoAbsoluteLevels',
        //       },
        //     },
        //   },
        // },
        Cranium: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Cranium.name',
                defaultMessage: 'Cranium',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Cuboid_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Cuboid_L.name',
                defaultMessage: 'Cuboid left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Cuboid_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Cuboid_R.name',
                defaultMessage: 'Cuboid right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ethmoid: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ethmoid.name',
                defaultMessage: 'Ethmoid',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Femur_L_JS_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Femur_L_JS_D.name',
                defaultMessage: 'Femur left dist. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Femur_L_JS_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Femur_L_JS_P.name',
                defaultMessage: 'Femur left prox. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Femur_L_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Femur_L_complete.name',
                defaultMessage: 'Femur left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Femur_L_shaft_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Femur_L_shaft_D.name',
                defaultMessage: 'Femur left dist. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Femur_L_shaft_M: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Femur_L_shaft_M.name',
                defaultMessage: 'Femur left mid. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Femur_L_shaft_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Femur_L_shaft_P.name',
                defaultMessage: 'Femur left prox. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Femur_R_JS_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Femur_R_JS_D.name',
                defaultMessage: 'Femur right dist. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Femur_R_JS_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Femur_R_JS_P.name',
                defaultMessage: 'Femur right prox. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Femur_R_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Femur_R_complete.name',
                defaultMessage: 'Femur right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Femur_R_shaft_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Femur_R_shaft_D.name',
                defaultMessage: 'Femur right dist. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Femur_R_shaft_M: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Femur_R_shaft_M.name',
                defaultMessage: 'Femur right mid. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Femur_R_shaft_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Femur_R_shaft_P.name',
                defaultMessage: 'Femur right prox. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Fibula_L_JS_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Fibula_L_JS_D.name',
                defaultMessage: 'Fibula left dist. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Fibula_L_JS_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Fibula_L_JS_P.name',
                defaultMessage: 'Fibula left prox. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Fibula_L_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Fibula_L_complete.name',
                defaultMessage: 'Fibula left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Fibula_L_shaft_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Fibula_L_shaft_D.name',
                defaultMessage: 'Fibula left dist. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Fibula_L_shaft_M: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Fibula_L_shaft_M.name',
                defaultMessage: 'Fibula left mid. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Fibula_L_shaft_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Fibula_L_shaft_P.name',
                defaultMessage: 'Fibula left prox. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Fibula_R_JS_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Fibula_R_JS_D.name',
                defaultMessage: 'Fibula right dist. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Fibula_R_JS_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Fibula_R_JS_P.name',
                defaultMessage: 'Fibula right prox. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Fibula_R_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Fibula_R_complete.name',
                defaultMessage: 'Fibula right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Fibula_R_shaft_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Fibula_R_shaft_D.name',
                defaultMessage: 'Fibula right dist. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Fibula_R_shaft_M: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Fibula_R_shaft_M.name',
                defaultMessage: 'Fibula right mid. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Fibula_R_shaft_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Fibula_R_shaft_P.name',
                defaultMessage: 'Fibula right prox. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Frontal_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Frontal_L.name',
                defaultMessage: 'Frontal left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Frontal_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Frontal_R.name',
                defaultMessage: 'Frontal right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Glenoid_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Glenoid_L.name',
                defaultMessage: 'Glenoid left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Glenoid_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Glenoid_R.name',
                defaultMessage: 'Glenoid right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Hamate_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Hamate_L.name',
                defaultMessage: 'Hamate left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Hamate_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Hamate_R.name',
                defaultMessage: 'Hamate right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Humerus_L_JS_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Humerus_L_JS_D.name',
                defaultMessage: 'Humerus left dist. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Humerus_L_JS_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Humerus_L_JS_P.name',
                defaultMessage: 'Humerus left prox. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Humerus_L_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Humerus_L_complete.name',
                defaultMessage: 'Humerus left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Humerus_L_shaft_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Humerus_L_shaft_D.name',
                defaultMessage: 'Humerus left dist. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Humerus_L_shaft_M: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Humerus_L_shaft_M.name',
                defaultMessage: 'Humerus left mid. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Humerus_L_shaft_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Humerus_L_shaft_P.name',
                defaultMessage: 'Humerus left prox. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Humerus_R_JS_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Humerus_R_JS_D.name',
                defaultMessage: 'Humerus right dist. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Humerus_R_JS_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Humerus_R_JS_P.name',
                defaultMessage: 'Humerus right prox. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Humerus_R_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Humerus_R_complete.name',
                defaultMessage: 'Humerus right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Humerus_R_shaft_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Humerus_R_shaft_D.name',
                defaultMessage: 'Humerus right dist. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Humerus_R_shaft_M: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Humerus_R_shaft_M.name',
                defaultMessage: 'Humerus right mid. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Humerus_R_shaft_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Humerus_R_shaft_P.name',
                defaultMessage: 'Humerus right prox. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Hyoid: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Hyoid.name',
                defaultMessage: 'Hyoid',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ilium_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ilium_L.name',
                defaultMessage: 'Ilium left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ilium_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ilium_R.name',
                defaultMessage: 'Ilium right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Int_cuneif_2_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Int_cuneif_2_L.name',
                defaultMessage: 'Int. cuneiform (2) left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Int_cuneif_2_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Int_cuneif_2_R.name',
                defaultMessage: 'Int. cuneiform (2) right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ischium_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ischium_L.name',
                defaultMessage: 'Ischium left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ischium_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ischium_R.name',
                defaultMessage: 'Ischium right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L1_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L1_L_arch.name',
                defaultMessage: 'L1 left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L1_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L1_R_arch.name',
                defaultMessage: 'L1 right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L1_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L1_centrum.name',
                defaultMessage: 'L1 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L1_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L1_complete.name',
                defaultMessage: 'L1',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        L2_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L2_L_arch.name',
                defaultMessage: 'L2 left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L2_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L2_R_arch.name',
                defaultMessage: 'L2 right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L2_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L2_centrum.name',
                defaultMessage: 'L2 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L2_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L2_complete.name',
                defaultMessage: 'L2',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        L3_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L3_L_arch.name',
                defaultMessage: 'L3 left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L3_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L3_R_arch.name',
                defaultMessage: 'L3 right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L3_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L3_centrum.name',
                defaultMessage: 'L3 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L3_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L3_complete.name',
                defaultMessage: 'L3',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        L4_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L4_L_arch.name',
                defaultMessage: 'L4 left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L4_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L4_R_arch.name',
                defaultMessage: 'L4 right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L4_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L4_centrum.name',
                defaultMessage: 'L4 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L4_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L4_complete.name',
                defaultMessage: 'L4',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        L5_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L5_L_arch.name',
                defaultMessage: 'L5 left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L5_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L5_R_arch.name',
                defaultMessage: 'L5 right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L5_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L5_centrum.name',
                defaultMessage: 'L5 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        L5_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L5_complete.name',
                defaultMessage: 'L5',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        L_L_arch_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L_L_arch_count.name',
                defaultMessage: 'L left arch count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        L_R_arch_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L_R_arch_count.name',
                defaultMessage: 'L right arch count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        L_centra_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.L_centra_count.name',
                defaultMessage: 'L centra count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Lacrimal_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Lacrimal_L.name',
                defaultMessage: 'Lacrimal left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Lacrimal_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Lacrimal_R.name',
                defaultMessage: 'Lacrimal right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Lat_cuneif_3_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Lat_cuneif_3_L.name',
                defaultMessage: 'Lat. cuneiform (3) left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Lat_cuneif_3_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Lat_cuneif_3_R.name',
                defaultMessage: 'Lat. cuneiform (3) right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Lunate_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Lunate_L.name',
                defaultMessage: 'Lunate left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Lunate_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Lunate_R.name',
                defaultMessage: 'Lunate right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MC1_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC1_L.name',
                defaultMessage: 'MC 1 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MC1_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC1_R.name',
                defaultMessage: 'MC 1 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MC2_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC2_L.name',
                defaultMessage: 'MC 2 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MC2_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC2_R.name',
                defaultMessage: 'MC 2 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MC3_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC3_L.name',
                defaultMessage: 'MC 3 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MC3_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC3_R.name',
                defaultMessage: 'MC 3 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MC4_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC4_L.name',
                defaultMessage: 'MC 4 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MC4_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC4_R.name',
                defaultMessage: 'MC 4 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MC5_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC5_L.name',
                defaultMessage: 'MC 5 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MC5_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC5_R.name',
                defaultMessage: 'MC 5 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MC_L_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC_L_complete.name',
                defaultMessage: 'MC left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        MC_L_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC_L_count.name',
                defaultMessage: 'MC left count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        MC_R_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC_R_complete.name',
                defaultMessage: 'MC right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        MC_R_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MC_R_count.name',
                defaultMessage: 'MC right count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        MT1_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT1_L.name',
                defaultMessage: 'MT 1 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MT1_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT1_R.name',
                defaultMessage: 'MT 1 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MT2_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT2_L.name',
                defaultMessage: 'MT 2 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MT2_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT2_R.name',
                defaultMessage: 'MT 2 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MT3_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT3_L.name',
                defaultMessage: 'MT 3 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MT3_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT3_R.name',
                defaultMessage: 'MT 3 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MT4_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT4_L.name',
                defaultMessage: 'MT 4 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MT4_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT4_R.name',
                defaultMessage: 'MT 4 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MT5_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT5_L.name',
                defaultMessage: 'MT 5 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MT5_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT5_R.name',
                defaultMessage: 'MT 5 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        MT_L_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT_L_complete.name',
                defaultMessage: 'MT left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        MT_L_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT_L_count.name',
                defaultMessage: 'MT left count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        MT_R_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT_R_complete.name',
                defaultMessage: 'MT right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        MT_R_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.MT_R_count.name',
                defaultMessage: 'MT right count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Mandible_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Mandible_L.name',
                defaultMessage: 'Mandible left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Mandible_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Mandible_R.name',
                defaultMessage: 'Mandible right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Manubrium: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Manubrium.name',
                defaultMessage: 'Manubrium',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Maxilla_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Maxilla_L.name',
                defaultMessage: 'Maxilla left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Maxilla_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Maxilla_R.name',
                defaultMessage: 'Maxilla right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Med_cuneif_1_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Med_cuneif_1_L.name',
                defaultMessage: 'Med. cuneiform (1) left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Med_cuneif_1_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Med_cuneif_1_R.name',
                defaultMessage: 'Med. cuneiform (1) right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Nasal_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Nasal_L.name',
                defaultMessage: 'Nasal left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Nasal_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Nasal_R.name',
                defaultMessage: 'Nasal right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Navicular_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Navicular_L.name',
                defaultMessage: 'Navicular left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Navicular_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Navicular_R.name',
                defaultMessage: 'Navicular right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Occipital: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Occipital.name',
                defaultMessage: 'Occipital',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Occipital_L_pars_lateralis: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Occipital_L_pars_lateralis.name',
                defaultMessage: 'Occipital pars lateralis left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Occipital_R_pars_lateralis: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Occipital_R_pars_lateralis.name',
                defaultMessage: 'Occipital pars lateralis right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Occipital_pars_basilaris: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Occipital_pars_basilaris.name',
                defaultMessage: 'Occipital pars basilaris',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Orbit_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Orbit_L.name',
                defaultMessage: 'Orbit left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Orbit_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Orbit_R.name',
                defaultMessage: 'Orbit right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Os_coxae_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Os_coxae_L.name',
                defaultMessage: 'Os coxae left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Os_coxae_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Os_coxae_R.name',
                defaultMessage: 'Os coxae right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Palatine_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Palatine_L.name',
                defaultMessage: 'Palatine left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Palatine_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Palatine_R.name',
                defaultMessage: 'Palatine right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Parietal_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Parietal_L.name',
                defaultMessage: 'Parietal left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Parietal_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Parietal_R.name',
                defaultMessage: 'Parietal right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Patella_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Patella_L.name',
                defaultMessage: 'Patella left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Patella_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Patella_R.name',
                defaultMessage: 'Patella right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Phalanx_D_count_foot: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Phalanx_D_count_foot.name',
                defaultMessage: 'Dist. foot phalanges count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Phalanx_D_count_hand: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Phalanx_D_count_hand.name',
                defaultMessage: 'Dist. hand phalanges count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Phalanx_I_count_foot: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Phalanx_I_count_foot.name',
                defaultMessage: 'Int. foot phalanges count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Phalanx_I_count_hand: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Phalanx_I_count_hand.name',
                defaultMessage: 'Int. hand phalanges count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Phalanx_P_count_foot: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Phalanx_P_count_foot.name',
                defaultMessage: 'Prox. foot phalanges count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Phalanx_P_count_hand: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Phalanx_P_count_hand.name',
                defaultMessage: 'Prox. hand phalanges count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Phalanx_juv_count_foot: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Phalanx_juv_count_foot.name',
                defaultMessage: 'Juv. foot phalanges count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Phalanx_juv_count_hand: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Phalanx_juv_count_hand.name',
                defaultMessage: 'Juv. hand phalanges count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Pisiform_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Pisiform_L.name',
                defaultMessage: 'Pisiform left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Pisiform_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Pisiform_R.name',
                defaultMessage: 'Pisiform right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Pubis_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Pubis_L.name',
                defaultMessage: 'Pubis left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Pubis_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Pubis_R.name',
                defaultMessage: 'Pubis right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Radius_L_JS_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Radius_L_JS_D.name',
                defaultMessage: 'Radius left dist. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Radius_L_JS_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Radius_L_JS_P.name',
                defaultMessage: 'Radius left prox. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Radius_L_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Radius_L_complete.name',
                defaultMessage: 'Radius left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Radius_L_shaft_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Radius_L_shaft_D.name',
                defaultMessage: 'Radius left dist. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Radius_L_shaft_M: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Radius_L_shaft_M.name',
                defaultMessage: 'Radius left mid. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Radius_L_shaft_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Radius_L_shaft_P.name',
                defaultMessage: 'Radius left prox. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Radius_R_JS_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Radius_R_JS_D.name',
                defaultMessage: 'Radius right dist. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Radius_R_JS_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Radius_R_JS_P.name',
                defaultMessage: 'Radius right prox. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Radius_R_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Radius_R_complete.name',
                defaultMessage: 'Radius right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Radius_R_shaft_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Radius_R_shaft_D.name',
                defaultMessage: 'Radius right dist. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Radius_R_shaft_M: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Radius_R_shaft_M.name',
                defaultMessage: 'Radius right mid. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Radius_R_shaft_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Radius_R_shaft_P.name',
                defaultMessage: 'Radius right prox. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib10_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib10_L.name',
                defaultMessage: 'Rib 10 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib10_L_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib10_L_head_neck_complete.name',
                defaultMessage: 'Rib 10 left head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib10_L_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib10_L_sternal_end_complete.name',
                defaultMessage: 'Rib 10 left sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib10_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib10_R.name',
                defaultMessage: 'Rib 10 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib10_R_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib10_R_head_neck_complete.name',
                defaultMessage: 'Rib 10 right head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib10_R_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib10_R_sternal_end_complete.name',
                defaultMessage: 'Rib 10 right sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib11_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib11_L.name',
                defaultMessage: 'Rib 11 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib11_L_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib11_L_head_neck_complete.name',
                defaultMessage: 'Rib 11 left head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib11_L_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib11_L_sternal_end_complete.name',
                defaultMessage: 'Rib 11 left sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib11_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib11_R.name',
                defaultMessage: 'Rib 11 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib11_R_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib11_R_head_neck_complete.name',
                defaultMessage: 'Rib 11 right head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib11_R_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib11_R_sternal_end_complete.name',
                defaultMessage: 'Rib 11 right sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib12_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib12_L.name',
                defaultMessage: 'Rib 12 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib12_L_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib12_L_head_neck_complete.name',
                defaultMessage: 'Rib 12 left head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib12_L_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib12_L_sternal_end_complete.name',
                defaultMessage: 'Rib 12 left sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib12_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib12_R.name',
                defaultMessage: 'Rib 12 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib12_R_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib12_R_head_neck_complete.name',
                defaultMessage: 'Rib 12 right head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib12_R_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib12_R_sternal_end_complete.name',
                defaultMessage: 'Rib 12 right sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib1_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib1_L.name',
                defaultMessage: 'Rib 1 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib1_L_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib1_L_head_neck_complete.name',
                defaultMessage: 'Rib 1 left head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib1_L_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib1_L_sternal_end_complete.name',
                defaultMessage: 'Rib 1 left sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib1_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib1_R.name',
                defaultMessage: 'Rib 1 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib1_R_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib1_R_head_neck_complete.name',
                defaultMessage: 'Rib 1 right head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib1_R_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib1_R_sternal_end_complete.name',
                defaultMessage: 'Rib 1 right sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib2_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib2_L.name',
                defaultMessage: 'Rib 2 left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib2_L_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib2_L_head_neck_complete.name',
                defaultMessage: 'Rib 2 left head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib2_L_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib2_L_sternal_end_complete.name',
                defaultMessage: 'Rib 2 left sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib2_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib2_R.name',
                defaultMessage: 'Rib 2 right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib2_R_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib2_R_head_neck_complete.name',
                defaultMessage: 'Rib 2 right head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib2_R_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib2_R_sternal_end_complete.name',
                defaultMessage: 'Rib 2 right sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib3_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib3_L.name',
                defaultMessage: 'Rib 3-9 (~3) left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib3_L_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib3_L_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~3) left head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib3_L_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib3_L_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~3) left sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib3_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib3_R.name',
                defaultMessage: 'Rib 3-9 (~3) right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib3_R_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib3_R_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~3) right head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib3_R_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib3_R_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~3) right sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib4_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib4_L.name',
                defaultMessage: 'Rib 3-9 (~4) left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib4_L_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib4_L_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~4) left head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib4_L_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib4_L_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~4) left sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib4_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib4_R.name',
                defaultMessage: 'Rib 3-9 (~4) right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib4_R_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib4_R_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~4) right head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib4_R_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib4_R_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~4) right sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib5_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib5_L.name',
                defaultMessage: 'Rib 3-9 (~5) left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib5_L_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib5_L_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~5) left head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib5_L_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib5_L_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~5) left sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib5_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib5_R.name',
                defaultMessage: 'Rib 3-9 (~5) right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib5_R_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib5_R_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~5) right head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib5_R_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib5_R_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~5) right sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib6_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib6_L.name',
                defaultMessage: 'Rib 3-9 (~6) left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib6_L_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib6_L_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~6) left head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib6_L_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib6_L_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~6) left sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib6_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib6_R.name',
                defaultMessage: 'Rib 3-9 (~6) right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib6_R_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib6_R_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~6) right head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib6_R_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib6_R_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~6) right sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib7_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib7_L.name',
                defaultMessage: 'Rib 3-9 (~7) left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib7_L_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib7_L_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~7) left head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib7_L_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib7_L_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~7) left sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib7_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib7_R.name',
                defaultMessage: 'Rib 3-9 (~7) right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib7_R_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib7_R_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~7) right head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib7_R_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib7_R_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~7) right sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib8_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib8_L.name',
                defaultMessage: 'Rib 3-9 (~8) left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib8_L_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib8_L_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~8) left head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib8_L_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib8_L_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~8) left sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib8_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib8_R.name',
                defaultMessage: 'Rib 3-9 (~8) right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib8_R_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib8_R_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~8) right head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib8_R_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib8_R_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~8) right sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib9_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib9_L.name',
                defaultMessage: 'Rib 3-9 (~9) left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib9_L_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib9_L_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~9) left head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib9_L_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib9_L_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~9) left sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib9_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib9_R.name',
                defaultMessage: 'Rib 3-9 (~9) right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Rib9_R_head_neck_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib9_R_head_neck_complete.name',
                defaultMessage: 'Rib 3-9 (~9) right head/neck complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Rib9_R_sternal_end_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Rib9_R_sternal_end_complete.name',
                defaultMessage: 'Rib 3-9 (~9) right sternal end complete',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoCompleteStates',
              },
            },
          },
        },
        Ribs_L_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ribs_L_complete.name',
                defaultMessage: 'Ribs left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Ribs_R_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ribs_R_complete.name',
                defaultMessage: 'Ribs right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        S1_L_ala: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S1_L_ala.name',
                defaultMessage: 'S1 left ala',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S1_R_ala: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S1_R_ala.name',
                defaultMessage: 'S1 right ala',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S1_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S1_centrum.name',
                defaultMessage: 'S1 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S1_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S1_complete.name',
                defaultMessage: 'S1',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        S2_L_ala: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S2_L_ala.name',
                defaultMessage: 'S2 left ala',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S2_R_ala: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S2_R_ala.name',
                defaultMessage: 'S2 right ala',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S2_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S2_centrum.name',
                defaultMessage: 'S2 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S2_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S2_complete.name',
                defaultMessage: 'S2',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        S3_L_ala: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S3_L_ala.name',
                defaultMessage: 'S3 left ala',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S3_R_ala: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S3_R_ala.name',
                defaultMessage: 'S3 right ala',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S3_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S3_centrum.name',
                defaultMessage: 'S3 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S3_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S3_complete.name',
                defaultMessage: 'S3',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        S4_L_ala: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S4_L_ala.name',
                defaultMessage: 'S4 left ala',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S4_R_ala: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S4_R_ala.name',
                defaultMessage: 'S4 right ala',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S4_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S4_centrum.name',
                defaultMessage: 'S4 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S4_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S4_complete.name',
                defaultMessage: 'S4',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        S5_L_ala: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S5_L_ala.name',
                defaultMessage: 'S5 left ala',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S5_R_ala: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S5_R_ala.name',
                defaultMessage: 'S5 right ala',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S5_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S5_centrum.name',
                defaultMessage: 'S5 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        S5_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S5_complete.name',
                defaultMessage: 'S5',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        S_L_ala_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S_L_ala_count.name',
                defaultMessage: 'S left ala count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        S_R_ala_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S_R_ala_count.name',
                defaultMessage: 'S right ala count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        S_centra_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.S_centra_count.name',
                defaultMessage: 'S centra count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Sacrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Sacrum.name',
                defaultMessage: 'Sacrum centra',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Sacrum_L_alae: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Sacrum_L_alae.name',
                defaultMessage: 'Sacrum left alae',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Sacrum_R_alae: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Sacrum_R_alae.name',
                defaultMessage: 'Sacrum right alae',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Sacrum_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Sacrum_complete.name',
                defaultMessage: 'Sacrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Scaphoid_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Scaphoid_L.name',
                defaultMessage: 'Scaphoid left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Scaphoid_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Scaphoid_R.name',
                defaultMessage: 'Scaphoid right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Scapula_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Scapula_L.name',
                defaultMessage: 'Scapula left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Scapula_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Scapula_R.name',
                defaultMessage: 'Scapula right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Sesamoid_L_count_foot: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Sesamoid_L_count_foot.name',
                defaultMessage: 'Foot sesamoid left count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Sesamoid_L_count_hand: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Sesamoid_L_count_hand.name',
                defaultMessage: 'Hand sesamoid left count ',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Sesamoid_R_count_foot: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Sesamoid_R_count_foot.name',
                defaultMessage: 'Foot sesamoid right count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Sesamoid_R_count_hand: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Sesamoid_R_count_hand.name',
                defaultMessage: 'Hand sesamoid right count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Sphenoid: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Sphenoid.name',
                defaultMessage: 'Sphenoid',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Sternum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Sternum.name',
                defaultMessage: 'Sternum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T10_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T10_L_arch.name',
                defaultMessage: 'T10 left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T10_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T10_R_arch.name',
                defaultMessage: 'T10 right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T10_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T10_centrum.name',
                defaultMessage: 'T10 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T10_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T10_complete.name',
                defaultMessage: 'T10',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        T11_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T11_L_arch.name',
                defaultMessage: 'T11 left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T11_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T11_R_arch.name',
                defaultMessage: 'T11 right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T11_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T11_centrum.name',
                defaultMessage: 'T11 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T11_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T11_complete.name',
                defaultMessage: 'T11',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        T12_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T12_L_arch.name',
                defaultMessage: 'T12 left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T12_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T12_R_arch.name',
                defaultMessage: 'T12 right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T12_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T12_centrum.name',
                defaultMessage: 'T12 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T12_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T12_complete.name',
                defaultMessage: 'T12',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        T1_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T1_L_arch.name',
                defaultMessage: 'T1 left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T1_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T1_R_arch.name',
                defaultMessage: 'T1 right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T1_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T1_centrum.name',
                defaultMessage: 'T1 centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T1_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T1_complete.name',
                defaultMessage: 'T1',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        T2_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T2_L_arch.name',
                defaultMessage: 'T2-9 (~2) left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T2_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T2_R_arch.name',
                defaultMessage: 'T2-9 (~2) right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T2_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T2_centrum.name',
                defaultMessage: 'T2-9 (~2) centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T2_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T2_complete.name',
                defaultMessage: 'T2-9 (~2)',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        T3_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T3_L_arch.name',
                defaultMessage: 'T2-9 (~3) left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T3_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T3_R_arch.name',
                defaultMessage: 'T2-9 (~3) right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T3_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T3_centrum.name',
                defaultMessage: 'T2-9 (~3) centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T3_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T3_complete.name',
                defaultMessage: 'T2-9 (~3)',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        T4_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T4_L_arch.name',
                defaultMessage: 'T2-9 (~4) left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T4_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T4_R_arch.name',
                defaultMessage: 'T2-9 (~4) right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T4_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T4_centrum.name',
                defaultMessage: 'T2-9 (~4) centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T4_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T4_complete.name',
                defaultMessage: 'T2-9 (~4)',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        T5_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T5_L_arch.name',
                defaultMessage: 'T2-9 (~5) left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T5_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T5_R_arch.name',
                defaultMessage: 'T2-9 (~5) right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T5_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T5_centrum.name',
                defaultMessage: 'T2-9 (~5) centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T5_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T5_complete.name',
                defaultMessage: 'T2-9 (~5)',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        T6_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T6_L_arch.name',
                defaultMessage: 'T2-9 (~6) left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T6_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T6_R_arch.name',
                defaultMessage: 'T2-9 (~6) right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T6_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T6_centrum.name',
                defaultMessage: 'T2-9 (~6) centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T6_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T6_complete.name',
                defaultMessage: 'T2-9 (~6)',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        T7_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T7_L_arch.name',
                defaultMessage: 'T2-9 (~7) left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T7_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T7_R_arch.name',
                defaultMessage: 'T2-9 (~7) right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T7_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T7_centrum.name',
                defaultMessage: 'T2-9 (~7) centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T7_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T7_complete.name',
                defaultMessage: 'T2-9 (~7)',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        T8_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T8_L_arch.name',
                defaultMessage: 'T2-9 (~8) left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T8_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T8_R_arch.name',
                defaultMessage: 'T2-9 (~8) right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T8_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T8_centrum.name',
                defaultMessage: 'T2-9 (~8) centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T8_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T8_complete.name',
                defaultMessage: 'T2-9 (~8)',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        T9_L_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T9_L_arch.name',
                defaultMessage: 'T2-9 (~9) left arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T9_R_arch: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T9_R_arch.name',
                defaultMessage: 'T2-9 (~9) right arch',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T9_centrum: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T9_centrum.name',
                defaultMessage: 'T2-9 (~9) centrum',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        T9_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T9_complete.name',
                defaultMessage: 'T2-9 (~9)',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        T_L_arch_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T_L_arch_count.name',
                defaultMessage: 'T left arch count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        T_R_arch_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T_R_arch_count.name',
                defaultMessage: 'T right arch count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        T_centra_count: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.T_centra_count.name',
                defaultMessage: 'T centra count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Talus_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Talus_L.name',
                defaultMessage: 'Talus left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Talus_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Talus_R.name',
                defaultMessage: 'Talus right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Tarsals_L_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tarsals_L_complete.name',
                defaultMessage: 'Tarsals left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Tarsals_R_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tarsals_R_complete.name',
                defaultMessage: 'Tarsals right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Teeth_LC_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LC_L.name',
                defaultMessage: 'Lower LCx',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LC_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LC_R.name',
                defaultMessage: 'Lower RCx',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LI1_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LI1_L.name',
                defaultMessage: 'Lower LI1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LI1_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LI1_R.name',
                defaultMessage: 'Lower RI1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LI2_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LI2_L.name',
                defaultMessage: 'Lower LI2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LI2_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LI2_R.name',
                defaultMessage: 'Lower RI2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LM1_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LM1_L.name',
                defaultMessage: 'Lower LM1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LM1_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LM1_R.name',
                defaultMessage: 'Lower RM1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LM2_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LM2_L.name',
                defaultMessage: 'Lower LM2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LM2_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LM2_R.name',
                defaultMessage: 'Lower RM2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LM3_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LM3_L.name',
                defaultMessage: 'Lower LM3',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LM3_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LM3_R.name',
                defaultMessage: 'Lower RM3',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LP3_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LP3_L.name',
                defaultMessage: 'Lower LP3',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LP3_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LP3_R.name',
                defaultMessage: 'Lower RP3',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LP4_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LP4_L.name',
                defaultMessage: 'Lower LP4',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_LP4_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_LP4_R.name',
                defaultMessage: 'Lower RP4',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UC_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UC_L.name',
                defaultMessage: 'Upper LCx',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UC_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UC_R.name',
                defaultMessage: 'Upper RCx',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UI1_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UI1_L.name',
                defaultMessage: 'Upper LI1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UI1_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UI1_R.name',
                defaultMessage: 'Upper RI1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UI2_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UI2_L.name',
                defaultMessage: 'Upper LI2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UI2_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UI2_R.name',
                defaultMessage: 'Upper RI2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UM1_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UM1_L.name',
                defaultMessage: 'Upper LM1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UM1_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UM1_R.name',
                defaultMessage: 'Upper RM1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UM2_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UM2_L.name',
                defaultMessage: 'Upper LM2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UM2_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UM2_R.name',
                defaultMessage: 'Upper RM2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UM3_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UM3_L.name',
                defaultMessage: 'Upper LM3',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UM3_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UM3_R.name',
                defaultMessage: 'Upper RM3',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UP3_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UP3_L.name',
                defaultMessage: 'Upper LP3',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UP3_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UP3_R.name',
                defaultMessage: 'Upper RP3',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UP4_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UP4_L.name',
                defaultMessage: 'Upper LP4',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_UP4_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_UP4_R.name',
                defaultMessage: 'Upper RP4',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Ldc_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Ldc_L.name',
                defaultMessage: 'Lower Ldcx',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Ldc_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Ldc_R.name',
                defaultMessage: 'Lower Rdcx',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Ldi1_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Ldi1_L.name',
                defaultMessage: 'Lower Ldi1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Ldi1_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Ldi1_R.name',
                defaultMessage: 'Lower Rdi1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Ldi2_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Ldi2_L.name',
                defaultMessage: 'Lower Ldi2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Ldi2_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Ldi2_R.name',
                defaultMessage: 'Lower Rdi2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Ldm1_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Ldm1_L.name',
                defaultMessage: 'Lower Ldm1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Ldm1_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Ldm1_R.name',
                defaultMessage: 'Lower Rdm1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Ldm2_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Ldm2_L.name',
                defaultMessage: 'Lower Ldm2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Ldm2_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Ldm2_R.name',
                defaultMessage: 'Lower Rdm2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Udc_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Udc_L.name',
                defaultMessage: 'Upper Ldcx',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Udc_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Udc_R.name',
                defaultMessage: 'Upper Rdcx',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Udi1_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Udi1_L.name',
                defaultMessage: 'Upper Ldi1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Udi1_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Udi1_R.name',
                defaultMessage: 'Upper Rdi1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Udi2_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Udi2_L.name',
                defaultMessage: 'Upper Ldi2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Udi2_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Udi2_R.name',
                defaultMessage: 'Upper Rdi2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Udm1_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Udm1_L.name',
                defaultMessage: 'Upper Ldm1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Udm1_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Udm1_R.name',
                defaultMessage: 'Upper Rdm1',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Udm2_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Udm2_L.name',
                defaultMessage: 'Upper Ldm2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_decid_Udm2_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_decid_Udm2_R.name',
                defaultMessage: 'Upper Rdm2',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Teeth_immVertFragsCount: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Teeth_immVertFragsCount.name',
                defaultMessage: 'Imm. vert. frags count',
              },
            },
            view: {
              type: TextInput,
            },
          },
        },
        Temporal_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Temporal_L.name',
                defaultMessage: 'Temporal left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Temporal_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Temporal_R.name',
                defaultMessage: 'Temporal right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Tibia_L_JS_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tibia_L_JS_D.name',
                defaultMessage: 'Tibia left dist. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Tibia_L_JS_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tibia_L_JS_P.name',
                defaultMessage: 'Tibia left prox. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Tibia_L_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tibia_L_complete.name',
                defaultMessage: 'Tibia left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Tibia_L_shaft_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tibia_L_shaft_D.name',
                defaultMessage: 'Tibia left dist. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Tibia_L_shaft_M: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tibia_L_shaft_M.name',
                defaultMessage: 'Tibia left mid. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Tibia_L_shaft_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tibia_L_shaft_P.name',
                defaultMessage: 'Tibia left prox. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Tibia_R_JS_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tibia_R_JS_D.name',
                defaultMessage: 'Tibia right dist. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Tibia_R_JS_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tibia_R_JS_P.name',
                defaultMessage: 'Tibia right prox. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Tibia_R_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tibia_R_complete.name',
                defaultMessage: 'Tibia right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Tibia_R_shaft_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tibia_R_shaft_D.name',
                defaultMessage: 'Tibia right dist. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Tibia_R_shaft_M: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tibia_R_shaft_M.name',
                defaultMessage: 'Tibia right mid. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Tibia_R_shaft_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Tibia_R_shaft_P.name',
                defaultMessage: 'Tibia right prox. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Trapezium_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Trapezium_L.name',
                defaultMessage: 'Trapezium left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Trapezium_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Trapezium_R.name',
                defaultMessage: 'Trapezium right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Trapezoid_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Trapezoid_L.name',
                defaultMessage: 'Trapezoid left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Trapezoid_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Trapezoid_R.name',
                defaultMessage: 'Trapezoid right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Triquetral_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Triquetral_L.name',
                defaultMessage: 'Triquetral left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Triquetral_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Triquetral_R.name',
                defaultMessage: 'Triquetral right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ulna_L_JS_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ulna_L_JS_D.name',
                defaultMessage: 'Ulna left dist. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ulna_L_JS_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ulna_L_JS_P.name',
                defaultMessage: 'Ulna left prox. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ulna_L_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ulna_L_complete.name',
                defaultMessage: 'Ulna left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Ulna_L_shaft_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ulna_L_shaft_D.name',
                defaultMessage: 'Ulna left dist. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ulna_L_shaft_M: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ulna_L_shaft_M.name',
                defaultMessage: 'Ulna left mid. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ulna_L_shaft_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ulna_L_shaft_P.name',
                defaultMessage: 'Ulna left prox. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ulna_R_JS_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ulna_R_JS_D.name',
                defaultMessage: 'Ulna right dist. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ulna_R_JS_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ulna_R_JS_P.name',
                defaultMessage: 'Ulna right prox. JS',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ulna_R_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ulna_R_complete.name',
                defaultMessage: 'Ulna right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Ulna_R_shaft_D: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ulna_R_shaft_D.name',
                defaultMessage: 'Ulna right dist. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ulna_R_shaft_M: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ulna_R_shaft_M.name',
                defaultMessage: 'Ulna right mid. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Ulna_R_shaft_P: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Ulna_R_shaft_P.name',
                defaultMessage: 'Ulna right prox. 1/3 shaft',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Vertebrae_complete: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Vertebrae_complete.name',
                defaultMessage: 'Vertebrae',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoAbsoluteLevels',
              },
            },
          },
        },
        Vomer: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Vomer.name',
                defaultMessage: 'Vomer',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Zygomatic_L: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Zygomatic_L.name',
                defaultMessage: 'Zygomatic left',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
        Zygomatic_R: {
          [config]: {
            messages: {
              name: {
                id: 'field.osteology_common.Zygomatic_R.name',
                defaultMessage: 'Zygomatic right',
              },
            },
            view: {
              type: OptionPickerInput,
              props: {
                source: 'osteoLevels',
              },
            },
          },
        },
      },
    },
  };
};
