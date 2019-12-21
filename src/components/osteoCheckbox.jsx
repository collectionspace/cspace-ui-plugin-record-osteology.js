export default (configContext) => {
  const {
    React,
    PropTypes,
  } = configContext.lib;

  const propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
  };

  function OsteoCheckbox(props) {
    const {
      readOnly,
      ...remainingProps
    } = props;

    return (
      // FIXME
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label>
        <input type="checkbox" disabled={!!readOnly} {...remainingProps} />
        <span />
      </label>
    );
  }

  OsteoCheckbox.propTypes = propTypes;

  return OsteoCheckbox;
};
