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
              name: {
                id: 'field.osteology_common.completeness.name',
                defaultMessage: 'Level',
              },
              fullName: {
                id: 'field.osteology_common.completeness.fullName',
                defaultMessage: 'Completeness level',
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
              name: {
                id: 'field.osteology_common.completenessNote.name',
                defaultMessage: 'Note',
              },
              fullName: {
                id: 'field.osteology_common.completenessNote.fullName',
                defaultMessage: 'Completeness note',
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
              name: {
                id: 'field.osteology_common.dentitionScore.name',
                defaultMessage: 'Score',
              },
              fullName: {
                id: 'field.osteology_common.dentitionScore.fullName',
                defaultMessage: 'Dentition score',
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
              name: {
                id: 'field.osteology_common.dentitionNote.name',
                defaultMessage: 'Note',
              },
              fullName: {
                id: 'field.osteology_common.dentitionNote.fullName',
                defaultMessage: 'Dentition note',
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
              name: {
                id: 'field.osteology_common.mortuaryTreatment.name',
                defaultMessage: 'Treatment',
              },
              fullName: {
                id: 'field.osteology_common.mortuaryTreatment.fullName',
                defaultMessage: 'Mortuary treatment',
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
              name: {
                id: 'field.osteology_common.mortuaryTreatmentNote.name',
                defaultMessage: 'Note',
              },
              fullName: {
                id: 'field.osteology_common.mortuaryTreatmentNote.fullName',
                defaultMessage: 'Mortuary treatment note',
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
              name: {
                id: 'field.osteology_common.behrensmeyerSingleLower.name',
                defaultMessage: 'Single/lower',
              },
              fullName: {
                id: 'field.osteology_common.behrensmeyerSingleLower.fullName',
                defaultMessage: 'Behrensmeyer stage - single/lower',
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
              name: {
                id: 'field.osteology_common.behrensmeyerUpper.name',
                defaultMessage: 'Upper',
              },
              fullName: {
                id: 'field.osteology_common.behrensmeyerUpper.fullName',
                defaultMessage: 'Behrensmeyer stage - upper',
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
        // TODO: Configure inventory fields. This will be necessary if/when services schema are
        // generated from this config. It's not necessary now, because the fields are hardcoded
        // into OsteoInventoryInput.
      },
    },
  };
};
