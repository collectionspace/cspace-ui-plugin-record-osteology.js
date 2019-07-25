import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatDate,
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      InventoryID: {
        messages: defineMessages({
          label: {
            id: 'column.osteology.default.InventoryID',
            defaultMessage: 'Inventory ID',
          },
        }),
        order: 10,
        sortBy: 'osteology_common:InventoryID',
        width: 250,
      },
      inventoryDate: {
        messages: defineMessages({
          label: {
            id: 'column.osteology.default.inventoryDate',
            defaultMessage: 'Date',
          },
        }),
        formatValue: formatDate,
        order: 20,
        sortBy: 'osteology_common:inventoryDate',
        width: 400,
      },
      updatedAt: {
        messages: defineMessages({
          label: {
            id: 'column.group.default.updatedAt',
            defaultMessage: 'Updated',
          },
        }),
        formatValue: formatTimestamp,
        order: 30,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
