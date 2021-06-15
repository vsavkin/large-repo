import { render } from '@testing-library/react';

import App19component1 from './app19component1';

describe('App19component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component1 />);
    expect(baseElement).toBeTruthy();
  });
});
