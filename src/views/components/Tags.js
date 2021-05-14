import { AppSection } from '../../components/forms';
import { Tag, TagCloud } from '../../components/Tag';

/**
 * Renders demo section for Tags and TagCloud
 */
const TagsSection = ({ useTagCloud = false }) => {
  function renderTags() {
    return [
      <Tag key="1" label="default" color="default" />,
      <Tag key="2" label="primary" color="primary" />,
      <Tag key="3" label="secondary" color="secondary" />,
      <Tag key="4" label="error" color="error" />,
      <Tag key="5" label="warning" color="warning" />,
      <Tag key="6" label="info" color="info" />,
      <Tag key="7" label="success" color="success" />,
    ];
  }

  return (
    <AppSection title={useTagCloud ? 'TagCloud' : 'Tags'}>
      {useTagCloud ? <TagCloud>{renderTags()}</TagCloud> : renderTags()}
    </AppSection>
  );
};

export default TagsSection;
