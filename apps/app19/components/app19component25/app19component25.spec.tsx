import { render } from '@testing-library/react';

import App19component25 from './app19component25';

describe('App19component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component25 />);
    expect(baseElement).toBeTruthy();
  });
});
