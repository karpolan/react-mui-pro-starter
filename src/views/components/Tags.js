import { AppSection } from '../../components/forms';
import { AppTag, AppTagCloud } from '../../components/AppTag';

/**
 * Renders demo section for Tags and TagCloud
 */
const TagsSection = ({ useTagCloud = false }) => {
  function renderTags() {
    return [
      <AppTag key="1" label="default" color="default" />,
      <AppTag key="2" label="primary" color="primary" />,
      <AppTag key="3" label="secondary" color="secondary" />,
      <AppTag key="4" label="error" color="error" />,
      <AppTag key="5" label="warning" color="warning" />,
      <AppTag key="6" label="info" color="info" />,
      <AppTag key="7" label="success" color="success" />,
    ];
  }

  return (
    <AppSection title={useTagCloud ? 'TagCloud' : 'Tags'}>
      {useTagCloud ? <AppTagCloud>{renderTags()}</AppTagCloud> : renderTags()}
    </AppSection>
  );
};

export default TagsSection;
