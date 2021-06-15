import { render } from '@testing-library/react';

import App19component50 from './app19component50';

describe('App19component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component50 />);
    expect(baseElement).toBeTruthy();
  });
});
