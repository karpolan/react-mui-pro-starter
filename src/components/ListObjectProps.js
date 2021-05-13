
import PropTypes from 'prop-types';
import clsx from 'clsx';

const sortByAbc = ([a], [b]) => a.localeCompare(b);
const sortByZxy = ([a], [b]) => b.localeCompare(a);
const sortNone = () => 0;

/**
 * Renders <ul> list with all properties of the given JavaScript object
 * Use .listObjectProps, .key/.title, .value/.property CSS classes for styling
 * @param {object} props.object - object to print out
 * @param {boolean} props.sortAbc - properties sorted A-Z when true
 * @param {boolean} props.sortZxy - properties sorted Z-A when true
 * @param {boolean} props.noChildren - nested object and arrays are ignored when true
 */
export const ListObjectProps = ({
  object,
  sortAbc = false,
  sortZxy = false,
  noChildren = false,
  className,
  ...props
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
    <ul className={clsx('listObjectProps', className)} {...props}>
      {renderObjectPropsWithSorting()}
    </ul>
  );
};

ListObjectProps.propTypes = {
  object: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  sortAbc: PropTypes.bool,
  sortZxy: PropTypes.bool,
  noChildren: PropTypes.bool,
  className: PropTypes.string,
};

export default ListObjectProps;
