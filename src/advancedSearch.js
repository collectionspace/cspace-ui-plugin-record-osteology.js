export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:osteology_common/InventoryID',
      },
      {
        op: OP_EQ,
        path: 'ns2:osteology_common/inventoryAnalyst',
      },
      {
        op: OP_RANGE,
        path: 'ns2:osteology_common/inventoryDate',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
