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
};
