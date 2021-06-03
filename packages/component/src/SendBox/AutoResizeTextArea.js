import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import AccessibleTextArea from '../Utils/AccessibleTextArea';
import useEnterKeyHint from '../hooks/internal/useEnterKeyHint';
import useStyleSet from '../hooks/useStyleSet';

const AutoResizeTextArea = forwardRef(
  (
    {
      'aria-label': ariaLabel,
      className,
      'data-id': dataId,
      disabled,
      enterKeyHint,
      inputMode,
      onChange,
      onFocus,
      onKeyDown,
      onKeyDownCapture,
      onKeyPress,
      onSelect,
      placeholder,
      readOnly,
      rows,
      textAreaClassName,
      value
    },
    ref
  ) => {
    const [{ autoResizeTextArea: autoResizeTextAreaStyleSet }] = useStyleSet();

    useEnterKeyHint(ref, enterKeyHint);

    return (
      <div className={classNames('webchat__auto-resize-textarea', autoResizeTextAreaStyleSet + '', className)}>
        {/* We need to add a space here, so blank lines will be counted in the doppelganger. */}
        <div aria-hidden={true} className="webchat__auto-resize-textarea__doppelganger">
          {value}&nbsp;
        </div>
        <AccessibleTextArea
          aria-label={ariaLabel}
          className={classNames('webchat__auto-resize-textarea__textarea', textAreaClassName)}
          data-id={dataId}
          disabled={disabled}
          inputMode={inputMode}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onKeyDownCapture={onKeyDownCapture}
          onKeyPress={onKeyPress}
          onSelect={onSelect}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={ref}
          rows={rows}
          value={value}
        />
      </div>
    );
  }
);

AutoResizeTextArea.defaultProps = {
  'aria-label': undefined,
  'data-id': undefined,
  className: undefined,
  disabled: undefined,
  enterKeyHint: undefined,
  inputMode: undefined,
  onChange: undefined,
  onFocus: undefined,
  onKeyDown: undefined,
  onKeyDownCapture: undefined,
  onKeyPress: undefined,
  onSelect: undefined,
  placeholder: undefined,
  readOnly: undefined,
  rows: undefined,
  textAreaClassName: undefined,
  value: ''
};

AutoResizeTextArea.propTypes = {
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  'data-id': PropTypes.string,
  disabled: PropTypes.bool,
  enterKeyHint: PropTypes.string,
  inputMode: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyDownCapture: PropTypes.func,
  onKeyPress: PropTypes.func,
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  rows: PropTypes.string,
  textAreaClassName: PropTypes.string,
  value: PropTypes.string
};

export default AutoResizeTextArea;
