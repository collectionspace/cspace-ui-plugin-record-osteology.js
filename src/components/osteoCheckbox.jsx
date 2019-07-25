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
      // eslint-disable-next-line jsx-a11y/label-has-for
      <label>
        <input type="checkbox" disabled={!!readOnly} {...remainingProps} />
        <span />
      </label>
    );
  }

  OsteoCheckbox.propTypes = propTypes;

  return OsteoCheckbox;
};
