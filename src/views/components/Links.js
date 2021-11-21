// import { Link } from '@mui/material';
import { AppLink, AppButton } from '../../components';
import { AppSection } from '../../components/forms';

/**
 * Renders demo section for Link
 */
const LinksSection = () => {
  return (
    <AppSection title="Links">
      {/* <Link color="inherit">MUI inherit</Link> <Link color="primary">MUI primary</Link>{' '}
      <Link color="secondary">MUI secondary</Link> <Link color="textPrimary">MUI textPrimary</Link>{' '}
      <Link color="textSecondary">MUI textSecondary</Link> <Link color="error">MUI error</Link> <br /> */}
      <AppLink to="/">Internal AppLink</AppLink> &nbsp;
      <AppLink to="/" openInNewTab>
        Internal AppLink in New Tab
      </AppLink>{' '}
      &nbsp;
      <AppLink href="//karpolan.com">External AppLink</AppLink> &nbsp;
      <AppLink href="//karpolan.com" openInNewTab={false}>
        External AppLink in Same Tab
      </AppLink>{' '}
      &nbsp;
      <br />
      <AppLink to="/">
        <AppButton ml={0} size="small" label="as Default Button" />
      </AppLink>
      <AppLink to="/">
        <AppButton size="small" color="primary" label="as Primary Button" />
      </AppLink>
      <AppLink to="/">
        <AppButton mr={0} size="small" color="secondary" label="as Secondary Button" />
      </AppLink>
    </AppSection>
  );
};

export default LinksSection;
