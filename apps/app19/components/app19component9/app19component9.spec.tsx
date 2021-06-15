import { render } from '@testing-library/react';

import App19component9 from './app19component9';

describe('App19component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App19component9 />);
    expect(baseElement).toBeTruthy();
  });
});
