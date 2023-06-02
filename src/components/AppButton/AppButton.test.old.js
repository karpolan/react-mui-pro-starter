import { render, screen } from '@testing-library/react';
import AppButton from './AppButton';
import { AppThemeProvider } from '../../theme';
import AppStore from '../../store';

const WrappedAppButton = (props) => {
  return (
    <AppStore>
      <AppThemeProvider>
        <AppButton {...props} />
      </AppThemeProvider>
    </AppStore>
  );
};

/**
 * Test specific color for AppButton
 * @param {string} colorName - name of the color, one of ColorName type
 * @param {string} [expectedClassName] - optional value to be found in className (color "true" may use "success" class name)
 * @param {boolean} [ignoreClassName] - optional flag to ignore className (color "inherit" doesn't use any class name)
 */
function testButtonColor(colorName, expectedClassName = colorName, ignoreClassName = false) {
  it(`supports "${colorName}" color`, async () => {
    let text = `${colorName} button`;
    await render(<WrappedAppButton color={colorName}>{text}</WrappedAppButton>);

    let span = screen.getByText(text); // <span> with specific text
    expect(span).toBeDefined();

    let button = span.closest('button'); // parent <button> element
    expect(button).toBeDefined();
    // console.log('button.className:', button?.className)
    expect(ignoreClassName || button?.className?.includes(`makeStyles-${expectedClassName}`)).toBeTruthy(); // There is "makeStyles-[expectedClassName]-xxx" class
  });
}

describe('AppButton component', () => {
  //   beforeEach(() => {});

  it('renders itself', async () => {
    let text = 'sample button';
    await render(<WrappedAppButton>{text}</WrappedAppButton>);
    let span = screen.getByText(text);
    expect(span).toBeDefined();
    expect(span).toHaveTextContent(text);
    let button = span.closest('button'); // parent <button> element
    expect(button).toBeDefined();
    expect(button).toHaveAttribute('type', 'button'); // not "submit" or "input" by default
  });

  testButtonColor('primary');
  testButtonColor('secondary');
  testButtonColor('error');
  testButtonColor('warning');
  testButtonColor('info');
  testButtonColor('success');
  testButtonColor('true');
  testButtonColor('false');

  testButtonColor('default');
  testButtonColor('inherit', 'default', true);

  it('supports className property', async () => {
    let text = 'button with specific class';
    let className = 'someClassName';
    await render(<WrappedAppButton className={className}>{text}</WrappedAppButton>);
    let span = screen.getByText(text);
    expect(span).toBeDefined();
    let button = span.closest('button'); // parent <button> element
    expect(button).toBeDefined();
    expect(button).toHaveClass(className);
  });

  it('supports label property', async () => {
    let text = 'button with label';
    await render(<WrappedAppButton label={text} />);
    let span = screen.getByText(text);
    expect(span).toBeDefined();
    let button = span.closest('button'); // parent <button> element
    expect(button).toBeDefined();
  });

  it('supports text property', async () => {
    let text = 'button with text';
    await render(<WrappedAppButton text={text} />);
    let span = screen.getByText(text);
    expect(span).toBeDefined();
    let button = span.closest('button'); // parent <button> element
    expect(button).toBeDefined();
  });
});
