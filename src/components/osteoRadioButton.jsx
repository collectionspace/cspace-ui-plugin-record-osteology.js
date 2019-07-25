import {
  ABSENT_CLASS,
  ABSENT_VALUE,
  COMPLETE_CLASS,
  COMPLETE_VALUE,
} from '../constants';

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

  function OsteoRadioButton(props) {
    const {
      readOnly,
      value,
      ...remainingProps
    } = props;

    let className;

    if (value === COMPLETE_VALUE) {
      className = COMPLETE_CLASS;
    } else if (value === ABSENT_VALUE) {
      className = ABSENT_CLASS;
    }

    return (
      // eslint-disable-next-line jsx-a11y/label-has-for
      <label>
        <input
          className={className}
          disabled={!!readOnly}
          type="radio"
          value={value}
          {...remainingProps}
        />
        <span />
      </label>
    );
  }

  OsteoRadioButton.propTypes = propTypes;

  return OsteoRadioButton;
};
