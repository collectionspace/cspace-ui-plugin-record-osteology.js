import { defineMessages } from 'react-intl';

export default {
  sexDeterminations: {
    values: [
      'Female',
      'Probably female',
      'Possibly female',
      'Male',
      'Probably male',
      'Possibly male',
      'Indeterminate',
      'Unknown',
    ],
    messages: defineMessages({
      Female: {
        id: 'option.sexDeterminations.Female',
        defaultMessage: 'female',
      },
      'Probably female': {
        id: 'option.sexDeterminations.Probably female',
        defaultMessage: 'probably female',
      },
      'Possibly female': {
        id: 'option.sexDeterminations.Possibly female',
        defaultMessage: 'possibly female',
      },
      Male: {
        id: 'option.sexDeterminations.Male',
        defaultMessage: 'male',
      },
      'Probably male': {
        id: 'option.sexDeterminations.Probably male',
        defaultMessage: 'probably male',
      },
      'Possibly male': {
        id: 'option.sexDeterminations.Possibly male',
        defaultMessage: 'possibly male',
      },
      Indeterminate: {
        id: 'option.sexDeterminations.Indeterminate',
        defaultMessage: 'indeterminate',
      },
      Unknown: {
        id: 'option.sexDeterminations.Unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
  // NB: The below configuration is currently only used on advanced search. These option lists are
  // also hardcoded into osteoInventoryInput.jsx for display on the record editor.
  osteoLevels: {
    values: [
      '0',
      '3',
      '2b',
      '2a',
      '1',
      'C',
    ],
    messages: defineMessages({
      0: {
        id: 'option.osteoLevels.0',
        defaultMessage: 'absent',
      },
      3: {
        id: 'option.osteoLevels.3',
        defaultMessage: '<25% present',
      },
      '2b': {
        id: 'option.osteoLevels.2b',
        defaultMessage: '25-50% present',
      },
      '2a': {
        id: 'option.osteoLevels.2a',
        defaultMessage: '50-75% present',
      },
      1: {
        id: 'option.osteoLevels.1',
        defaultMessage: '>75% present',
      },
      C: {
        id: 'option.osteoLevels.C',
        defaultMessage: 'complete',
      },
    }),
  },
  osteoAbsoluteLevels: {
    values: [
      '0',
      'C',
    ],
    messages: defineMessages({
      0: {
        id: 'option.osteoAbsoluteLevels.0',
        defaultMessage: 'absent',
      },
      C: {
        id: 'option.osteoAbsoluteLevels.C',
        defaultMessage: 'complete',
      },
    }),
  },
  // This really should have been a boolean, but it's a string, where C means complete, and empty
  // means incomplete. For search, this will translate to a one-option list (C = "yes"). To find
  // incomplete bones, use the "is blank" or "is not" operator.
  osteoCompleteStates: {
    values: [
      'C',
    ],
    messages: defineMessages({
      C: {
        id: 'option.osteoCompleteStates.C',
        defaultMessage: 'yes',
      },
    }),
  },
};
