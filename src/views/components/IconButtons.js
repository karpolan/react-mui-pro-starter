import { Divider } from '@mui/material';
import { AppIcon, AppIconButton } from '../../components';
import { AppSection } from '../../components/forms';

/**
 * Renders demo section for "Icon Buttons"
 */
const IconButtonSection = () => {
  return (
    <AppSection title="Icon Buttons">
      <AppIconButton title="Default icon, no color specified" />
      <AppIconButton icon="close" color="primary" title="Close icon with Primary color" />
      <AppIconButton icon="menu" color="secondary" title="Menu icon with Secondary color" />
      <AppIconButton icon="settings" color="error" title="Settings icon with Error color" />
      <AppIconButton icon="search" color="warning" title="Search icon with Warning color" />
      <AppIconButton icon="info" color="info" title="Info icon with Info color" />
      <AppIconButton icon="home" color="success" title="Home icon with Success color" />
      <AppIconButton icon="visibilityoff" color="#FF8C00" title="VisibilityOff icon with DarkOrange (#FF8C00) color" />
      <AppIconButton
        icon="visibilityon"
        color="rgb(50, 205, 50)"
        title="VisibilityOn icon with LimeGreen (rgb(50, 205, 50)) color"
      />
      <AppIconButton icon="account" color="inherit" title="Account icon with Inherit color" />
      <br /> <br />
      <Divider />
      <AppIcon icon="close" color="primary" fontSize="large" />
      <AppIcon icon="menu" color="secondary" fontSize="large" />
      <AppIcon icon="settings" color="error" fontSize="large" />
      <AppIcon icon="info" color="disabled" fontSize="large" />
      <AppIcon icon="close" color="primary" />
      <AppIcon icon="menu" color="secondary" />
      <AppIcon icon="settings" color="error" />
      <AppIcon icon="search" color="action" />
      <AppIcon icon="info" color="disabled" />
      <AppIcon icon="home" color="inherit" />
      <AppIcon icon="close" color="primary" fontSize="small" />
      <AppIcon icon="menu" color="secondary" fontSize="small" />
      <AppIcon icon="settings" color="error" fontSize="small" />
      <AppIcon icon="search" color="action" fontSize="small" />
      <AppIcon icon="info" color="disabled" fontSize="small" />
      <AppIcon icon="home" color="inherit" fontSize="small" />
    </AppSection>
  );
};

export default IconButtonSection;
