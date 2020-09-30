/**
 *
 * RenderField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <FormControl error={touched && error && true}>
      <input className="input" {...input} placeholder={label} type={type} />
      {!touched && <FormHelperText id="uri">{label}</FormHelperText>}
      {touched &&
        ((error && <FormHelperText>{error}</FormHelperText>) ||
          (warning && <FormHelperText>{warning}</FormHelperText>))}
    </FormControl>
  );
};

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export default RenderField;
