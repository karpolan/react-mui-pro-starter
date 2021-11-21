import { useState } from 'react';
import { Checkbox, Switch } from '@mui/material';
import { AppButton } from '../../components';
import { AppSection } from '../../components/forms';

/**
 * Renders demo section for Buttons
 */
const ButtonsSection = () => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleSwitchButtons = () => {
    setButtonsDisabled(!buttonsDisabled);
  };

  return (
    <AppSection title="Buttons">
      <AppButton label="default" color="default" disabled={buttonsDisabled} />
      <AppButton label="primary" color="primary" disabled={buttonsDisabled} />
      <AppButton label="secondary" color="secondary" disabled={buttonsDisabled} />
      <AppButton label="error" color="error" disabled={buttonsDisabled} />
      <AppButton label="warning" color="warning" disabled={buttonsDisabled} />
      <AppButton label="info" color="info" disabled={buttonsDisabled} />
      <AppButton label="success" color="success" disabled={buttonsDisabled} />
      <AppButton label="small" color="default" size="small" disabled={buttonsDisabled} />
      <Checkbox checked={!buttonsDisabled} onChange={handleSwitchButtons} title="Enable/Disable buttons"></Checkbox>
      <Switch
        color="primary"
        title="Enable/Disable buttons"
        checked={!buttonsDisabled}
        onChange={handleSwitchButtons}
      />
    </AppSection>
  );
};

export default ButtonsSection;
