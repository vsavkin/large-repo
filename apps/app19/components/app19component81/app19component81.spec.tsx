import { render } from '@testing-library/react';

import App19component81 from './app19component81';

describe('App19component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component81 />);
    expect(baseElement).toBeTruthy();
  });
});
