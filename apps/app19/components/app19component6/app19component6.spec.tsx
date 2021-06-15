import { render } from '@testing-library/react';

import App19component6 from './app19component6';

describe('App19component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component6 />);
    expect(baseElement).toBeTruthy();
  });
});
