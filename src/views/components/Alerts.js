import { AppSection, AppAlert } from '../../components/forms';

/**
 * Renders demo section for Alerts
 */
const AlertsSection = () => {
  const handleAlertClose = (event, reason) => {
    log.info('handleAlertClose() - event:', event);
    alert('onClose() called');
  };

  return (
    <AppSection title="Alerts">
      <AppAlert severity="error">severity="error"</AppAlert>
      <AppAlert severity="warning">severity="warning"</AppAlert>
      <AppAlert severity="info">severity="info"</AppAlert>
      <AppAlert severity="success">severity="success"</AppAlert>
      <AppAlert severity="error" variant="standard" onClose={handleAlertClose}>
        severity="error" variant="standard"
      </AppAlert>
      <AppAlert severity="error" variant="outlined" onClose={handleAlertClose}>
        severity="error" variant="outlined"
      </AppAlert>
      <AppAlert severity="error" variant="filled" onClose={handleAlertClose}>
        severity="error" variant="filled"
      </AppAlert>
    </AppSection>
  );
};

export default AlertsSection;
