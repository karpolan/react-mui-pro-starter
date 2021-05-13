import PropTypes from 'prop-types';

/**
 * PropTypes for "common" dialogs
 */
export const PropTypesCommonDialog = {
  open: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.bool]),
  title: PropTypes.string,
  text: PropTypes.string,
  body: PropTypes.node,
  hideCancelButton: PropTypes.bool,
  confirmButtonText: PropTypes.string,
  confirmButtonColor: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
