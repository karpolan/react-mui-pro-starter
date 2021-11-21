import PropTypes from 'prop-types';
import clsx from 'clsx';

const sortByAbc = ([a], [b]) => a.localeCompare(b);
const sortByZxy = ([a], [b]) => b.localeCompare(a);
const sortNone = () => 0;

/**
 * Renders <ul> list with all properties of the given JavaScript object
 * Use .listObjectProps, .key/.title, .value/.property CSS classes for styling
 * @component ListObjectProps
 * @param {object} [object] - object to print out
 * @param {boolean} [sortAbc] - properties sorted A-Z when true
 * @param {boolean} [sortZxy] - properties sorted Z-A when true
 * @param {boolean} [noChildren] - nested object and arrays are ignored when true
 */
export const ListObjectProps = ({
  className,
  object,
  noChildren = false,
  sortAbc = false,
  sortZxy = false,
  ...restOfProps
}) => {
  if (!object || typeof object !== 'object') return null;

  const sortFunc = sortAbc ? sortByAbc : sortZxy ? sortByZxy : sortNone;

  function renderObjectPropsWithSorting() {
    const result = Object.entries(object)
      .sort(sortFunc)
      .map(([key, value]) => {
        if (typeof value === 'object') {
          return (
            <li key={key}>
              <span className="key title">{key}:</span>
              {noChildren ? (
                ` [${Array.isArray(value) ? 'Array' : 'Object'}]`
              ) : (
                <ListObjectProps object={value} {...{ sortAbc, sortZxy }} />
              )}
            </li>
          );
        } else {
          return (
            <li key={key}>
              <span className="key title">{key}:</span> <span className="value property">{value}</span>
            </li>
          );
        }
      });
    return result;
  }

  return (
    <ul className={clsx('listObjectProps', className)} {...restOfProps}>
      {renderObjectPropsWithSorting()}
    </ul>
  );
};

ListObjectProps.propTypes = {
  className: PropTypes.string,
  object: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  noChildren: PropTypes.bool,
  sortAbc: PropTypes.bool,
  sortZxy: PropTypes.bool,
};

export default ListObjectProps;
